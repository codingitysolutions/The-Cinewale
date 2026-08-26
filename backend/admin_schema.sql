CREATE TABLE IF NOT EXISTS admin_credentials (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL
);
INSERT OR IGNORE INTO admin_credentials (id, username, password) VALUES (1, 'admin', 'password123');
