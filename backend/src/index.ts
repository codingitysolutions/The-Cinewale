import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = { DB: D1Database }
const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())

// PUBLIC ENDPOINTS
app.post('/api/enquiries', async (c) => {
  try {
    const { name, email, phone, dates, venue, guest_count, services, story, hear_about } = await c.req.json()
    if (!name || !email || !phone) return c.json({ error: 'Required fields missing' }, 400)
    await c.env.DB.prepare(`INSERT INTO enquiries (name, email, phone, dates, venue, guest_count, services, story, hear_about) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(name, email, phone, dates||'', venue||'', guest_count||'', services||'', story||'', hear_about||'').run()
    return c.json({ message: 'Success' }, 201)
  } catch (e) { return c.json({ error: 'Server error' }, 500) }
})

app.post('/api/subscribers', async (c) => {
  try {
    const { email } = await c.req.json()
    if (!email) return c.json({ error: 'Email required' }, 400)
    await c.env.DB.prepare(`INSERT INTO subscribers (email) VALUES (?)`).bind(email).run()
    return c.json({ message: 'Success' }, 201)
  } catch (e) { return c.json({ error: 'Server error' }, 500) }
})

// PROTECTED ADMIN ROUTES
// Custom Dynamic Basic Auth using D1 Database
app.use('/api/admin/*', async (c, next) => {
  const authHeader = c.req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  try {
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');

    // Check database for ANY user that matches
    const admin = await c.env.DB.prepare(`SELECT * FROM admin_credentials WHERE username = ?`).bind(username).first();
    
    if (admin && admin.password === password) {
      c.set('adminUser', admin);
      await next();
    } else {
      return c.json({ error: 'Unauthorized' }, 401);
    }
  } catch (error) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
});

// Get Current Admin Info
app.get('/api/admin/me', async (c) => {
  const user = c.get('adminUser');
  return c.json({
    id: user.id,
    username: user.username,
    role: user.role,
    permissions: user.permissions
  });
});

// Profile Routes
app.post('/api/admin/profile/email', async (c) => {
  try {
    const { currentPassword, newEmail } = await c.req.json();
    const admin = await c.env.DB.prepare(`SELECT * FROM admin_credentials WHERE id = 1`).first();
    
    if (admin.password !== currentPassword) {
      return c.json({ error: 'Incorrect current password' }, 400);
    }

    await c.env.DB.prepare(`UPDATE admin_credentials SET username = ? WHERE id = 1`).bind(newEmail).run();
    return c.json({ message: 'Email updated successfully' });
  } catch (e) {
    return c.json({ error: 'Server error' }, 500);
  }
});

app.post('/api/admin/profile/password', async (c) => {
  try {
    const { currentPassword, newPassword } = await c.req.json();
    const admin = await c.env.DB.prepare(`SELECT * FROM admin_credentials WHERE id = 1`).first();
    
    if (admin.password !== currentPassword) {
      return c.json({ error: 'Incorrect current password' }, 400);
    }

    await c.env.DB.prepare(`UPDATE admin_credentials SET password = ? WHERE id = 1`).bind(newPassword).run();
    return c.json({ message: 'Password updated successfully' });
  } catch (e) {
    return c.json({ error: 'Server error' }, 500);
  }
});


// Generic Helper for simple tables
const createCrudRoutes = (path, tableName, insertCols, insertVars, getInsertValues) => {
  app.get(`/api/admin/${path}`, async (c) => {
    const { results } = await c.env.DB.prepare(`SELECT * FROM ${tableName} ORDER BY created_at DESC`).all()
    return c.json(results)
  })
  app.post(`/api/admin/${path}`, async (c) => {
    try {
      const body = await c.req.json()
      const vals = getInsertValues(body)
      await c.env.DB.prepare(`INSERT INTO ${tableName} (${insertCols}) VALUES (${insertVars})`).bind(...vals).run()
      return c.json({ message: 'Created' }, 201)
    } catch (e) { return c.json({ error: 'Error' }, 500) }
  })
  app.delete(`/api/admin/${path}/:id`, async (c) => {
    await c.env.DB.prepare(`DELETE FROM ${tableName} WHERE id = ?`).bind(c.req.param('id')).run()
    return c.json({ message: 'Deleted' })
  })
}

// Enquiries (Custom for PATCH)
app.get('/api/admin/enquiries', async (c) => {
  const { results } = await c.env.DB.prepare(`SELECT * FROM enquiries ORDER BY created_at DESC`).all()
  return c.json(results)
})
app.patch('/api/admin/enquiries/:id', async (c) => {
  const { status } = await c.req.json()
  await c.env.DB.prepare(`UPDATE enquiries SET status = ? WHERE id = ?`).bind(status, c.req.param('id')).run()
  return c.json({ message: 'Updated' })
})
app.delete('/api/admin/enquiries/:id', async (c) => {
  await c.env.DB.prepare(`DELETE FROM enquiries WHERE id = ?`).bind(c.req.param('id')).run()
  return c.json({ message: 'Deleted' })
})

// Other Resources
createCrudRoutes('subscribers', 'subscribers', 'email', '?', b => [b.email])
createCrudRoutes('messages', 'messages', 'name, email, message', '?, ?, ?', b => [b.name, b.email, b.message])
createCrudRoutes('categories', 'categories', 'name, slug', '?, ?', b => [b.name, b.slug])
createCrudRoutes('team', 'team', 'name, role', '?, ?', b => [b.name, b.role])

// Settings (Key-Value)
app.get('/api/admin/settings', async (c) => {
  const { results } = await c.env.DB.prepare(`SELECT * FROM settings`).all()
  const obj = results.reduce((acc, row) => ({ ...acc, [row.key]: row.value }), {})
  return c.json(obj)
})
app.post('/api/admin/settings', async (c) => {
  const body = await c.req.json()
  for (const [key, value] of Object.entries(body)) {
    await c.env.DB.prepare(`INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)`).bind(key, value).run()
  }
  return c.json({ message: 'Updated' })
})


// Team Management (Admin only)
app.get('/api/admin/team/users', async (c) => {
  const user = c.get('adminUser');
  if (user.role !== 'admin') return c.json({error: 'Forbidden'}, 403);
  const users = await c.env.DB.prepare('SELECT id, username, role, permissions FROM admin_credentials').all();
  return c.json(users.results);
});

app.post('/api/admin/team/users', async (c) => {
  const user = c.get('adminUser');
  if (user.role !== 'admin') return c.json({error: 'Forbidden'}, 403);
  const { username, password, role, permissions } = await c.req.json();
  const permsStr = JSON.stringify(permissions);
  await c.env.DB.prepare('INSERT INTO admin_credentials (username, password, role, permissions) VALUES (?, ?, ?, ?)').bind(username, password, role, permsStr).run();
  return c.json({success: true});
});

app.delete('/api/admin/team/users/:id', async (c) => {
  const user = c.get('adminUser');
  if (user.role !== 'admin') return c.json({error: 'Forbidden'}, 403);
  const id = c.req.param('id');
  if (id == 1) return c.json({error: 'Cannot delete master admin'}, 400); // Protect id=1
  await c.env.DB.prepare('DELETE FROM admin_credentials WHERE id = ?').bind(id).run();
  return c.json({success: true});
});

export default app
