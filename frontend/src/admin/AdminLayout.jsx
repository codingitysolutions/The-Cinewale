import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { LayoutDashboard, Mail, MessageSquare, Grid, Users, Contact, Settings, UserCircle, LogOut } from 'lucide-react';
import './admin.css';


export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin');
  };

      const permsStr = localStorage.getItem('admin_permissions') || 'all';
  const role = localStorage.getItem('admin_role') || 'admin';

  let navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} />, id: 'dashboard' },
    { name: 'Bookings', path: '/admin/enquiries', icon: <Mail size={20} />, id: 'bookings' },
    { name: 'Messages', path: '/admin/messages', icon: <MessageSquare size={20} />, id: 'messages' },
    { name: 'Subscribers', path: '/admin/subscribers', icon: <Contact size={20} />, id: 'subscribers' },
    { name: 'Team', path: '/admin/team', icon: <Users size={20} />, id: 'team' },
    { name: 'Profile', path: '/admin/profile', icon: <UserCircle size={20} />, id: 'profile' }
  ];

  if (permsStr !== 'all') {
    try {
      const allowed = JSON.parse(permsStr);
      navItems = navItems.filter(item => allowed.includes(item.id) || item.id === 'profile');
    } catch(e) {}
  }

  // Hide Team if not admin
  if (role !== 'admin') {
    navItems = navItems.filter(item => item.id !== 'team');
  }

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo" style={{justifyContent: 'center', padding: '20px'}}>
          <img src="https://res.cloudinary.com/nmv4tzev/image/upload/v1787760762/uuxscuaciavioalk7gyc.png" alt="The Cinewale" style={{width: '100%', maxWidth: '180px', height: 'auto', display: 'block'}} />
        </div>
        
        <div className="admin-nav">
          {navItems.map(item => (
            <div 
              key={item.path}
              className={`admin-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <i className="icon-wrapper">{item.icon}</i> {item.name}
            </div>
          ))}
          <div className="admin-nav-item" onClick={handleLogout}><i className="icon-wrapper"><LogOut size={20} /></i> Logout</div>
        </div>
        
        <div className="admin-sidebar-footer">
          <div className="admin-help-box">
            <h4>Need Help?</h4>
            <p>If you need any help, please contact support.</p>
            <button onClick={() => window.location.href = "mailto:codingitysolutions@gmail.com"}>Contact Support</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <div className="admin-welcome">
            <h1>Cinewale Admin</h1>
            <p>Manage your website data and settings.</p>
          </div>
          <div className="admin-topbar-right">
            <div className="admin-date-picker">
              📅 {new Date().toLocaleDateString()}
            </div>
            <div className="admin-profile" onClick={() => navigate('/admin/profile')}>
              <div className="admin-avatar">{role === 'admin' ? 'A' : 'E'}</div>
              {role === 'admin' ? 'Admin' : 'Employee'} ⌄
            </div>
          </div>
        </header>

        {/* Content Outlet */}
        <Outlet />
      </main>
    </div>
  );
}
