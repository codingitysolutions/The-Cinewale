import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const base64Auth = btoa(username + ':' + password);

    try {
      // Test the credentials and get user profile
      const res = await fetch('http://localhost:8787/api/admin/me', {
        headers: { 'Authorization': `Basic ${base64Auth}` }
      });

      if (res.ok) {
        const user = await res.json();
        // Credentials are correct
        localStorage.setItem('admin_auth', base64Auth);
        localStorage.setItem('admin_permissions', user.permissions);
        localStorage.setItem('admin_role', user.role);
        
        // Redirect based on permissions
        if (user.permissions !== 'all' && user.permissions.includes('bookings')) {
           navigate('/admin/enquiries'); // Or bookings depending on route name
        } else {
           navigate('/admin/dashboard');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Network error connecting to backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a0808 0%, #3e0a0a 100%)',
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '420px' }}>
        
        
        <div style={{
          background: '#fff',
          padding: '50px 40px',
          borderRadius: '16px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}>
        <h2 style={{ margin: '15px 0 5px 0', color: '#333', fontSize: '22px', fontWeight: '600' }}>Welcome Back</h2>
        <p style={{ color: '#777', marginBottom: '30px', fontSize: '14px' }}>Sign in to access your portal</p>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {error && (
            <div style={{
              background: '#ffebee', color: '#c62828', padding: '10px', 
              borderRadius: '8px', fontSize: '13px', fontWeight: '500'
            }}>
              {error}
            </div>
          )}
          
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '14px', left: '15px', color: '#aaa' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <input 
              type="text" 
              placeholder="Email / Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              style={{
                width: '100%', padding: '14px 15px 14px 45px',
                border: '1px solid #ddd', borderRadius: '8px',
                fontSize: '14px', boxSizing: 'border-box',
                outline: 'none', transition: '0.2s', background: '#fafafa'
              }}
              onFocus={(e) => e.target.style.borderColor = '#791112'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '14px', left: '15px', color: '#aaa' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={{
                width: '100%', padding: '14px 15px 14px 45px',
                border: '1px solid #ddd', borderRadius: '8px',
                fontSize: '14px', boxSizing: 'border-box',
                outline: 'none', transition: '0.2s', background: '#fafafa'
              }}
              onFocus={(e) => e.target.style.borderColor = '#791112'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '14px', marginTop: '10px',
            background: '#791112', color: '#fff', border: 'none',
            borderRadius: '8px', fontSize: '15px', fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? '0.7' : '1', transition: '0.2s',
            boxShadow: '0 4px 12px rgba(121, 17, 18, 0.2)'
          }}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div style={{ marginTop: '25px', fontSize: '12px', color: '#999' }}>
          Secure Portal &copy; The Cinewale
        </div>
        </div>
      </div>
    </div>
  );
}
