import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, Mail, Lock, Shield, ArrowLeft, ChevronRight } from 'lucide-react';
import './admin.css';

export default function AdminProfile() {
  const navigate = useNavigate();
  
  const role = localStorage.getItem('admin_role') || 'admin';
  const authHeader = localStorage.getItem('admin_auth') || '';
  let userEmail = 'Unknown';
  try {
    userEmail = atob(authHeader).split(':')[0];
  } catch(e) {}
  
  // 'menu', 'email', 'password'
  const [activeView, setActiveView] = useState('menu');
  
  // States for Email Change
  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [emailPassword, setEmailPassword] = useState('');

  // States for Password Change
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    if (!newEmail || !emailPassword) {
      alert('Please fill all fields');
      return;
    }
    try {
      const res = await fetch('http://localhost:8787/api/admin/profile/email', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${localStorage.getItem('admin_auth')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currentPassword: emailPassword, newEmail: newEmail })
      });
      const data = await res.json();
      if (res.ok) {
        alert('Email updated successfully! Please log in again with your new email.');
        localStorage.removeItem('admin_auth');
        navigate('/admin');
      } else {
        alert(data.error || 'Failed to update email');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    try {
      const res = await fetch('http://localhost:8787/api/admin/profile/password', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${localStorage.getItem('admin_auth')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currentPassword: currentPassword, newPassword: newPassword })
      });
      const data = await res.json();
      if (res.ok) {
        alert('Password updated successfully! Please log in again with your new password.');
        localStorage.removeItem('admin_auth');
        navigate('/admin');
      } else {
        alert(data.error || 'Failed to update password');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Profile Header */}
      <div className="admin-table-section" style={{ marginBottom: '30px', padding: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#791112', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserCircle size={50} />
            </div>
            <div>
              <h2 style={{ margin: '0 0 5px 0', color: '#333', textTransform: 'capitalize' }}>{role} Profile</h2>
              <p style={{ margin: 0, color: '#777', fontSize: '14px' }}>Logged in as: <strong style={{color: '#791112'}}>{userEmail}</strong></p>
            </div>
          </div>
          <button 
            className="admin-filter-btn" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #ddd', padding: '10px 20px', background: '#fff' }} 
            onClick={() => { localStorage.removeItem('admin_auth'); navigate('/admin'); }}
          >
            <Shield size={16} /> Logout
          </button>
        </div>
      </div>

      {/* MENU VIEW */}
      {activeView === 'menu' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          <div 
            className="admin-card" 
            style={{ cursor: 'pointer', transition: '0.2s', border: '1px solid #eaeaea', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            onClick={() => setActiveView('email')}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#bea180'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = '#eaeaea'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ padding: '15px', background: '#fcf8f3', borderRadius: '12px', color: '#bea180' }}>
                <Mail size={28} />
              </div>
              <div>
                <h3 style={{ margin: '0 0 5px 0', color: '#333', fontSize: '16px' }}>Change Email</h3>
                <p style={{ margin: 0, color: '#888', fontSize: '13px' }}>Update your login email address</p>
              </div>
            </div>
            <ChevronRight color="#ccc" />
          </div>

          <div 
            className="admin-card" 
            style={{ cursor: 'pointer', transition: '0.2s', border: '1px solid #eaeaea', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            onClick={() => setActiveView('password')}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#791112'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = '#eaeaea'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ padding: '15px', background: '#ffebee', borderRadius: '12px', color: '#791112' }}>
                <Lock size={28} />
              </div>
              <div>
                <h3 style={{ margin: '0 0 5px 0', color: '#333', fontSize: '16px' }}>Change Password</h3>
                <p style={{ margin: 0, color: '#888', fontSize: '13px' }}>Update your account password</p>
              </div>
            </div>
            <ChevronRight color="#ccc" />
          </div>

        </div>
      )}

      {/* CHANGE EMAIL VIEW */}
      {activeView === 'email' && (
        <div className="admin-table-section" style={{ padding: '30px' }}>
          <button 
            onClick={() => setActiveView('menu')}
            style={{ background: 'none', border: 'none', color: '#777', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '25px', fontSize: '14px', padding: 0 }}
          >
            <ArrowLeft size={16} /> Back to Profile Menu
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '15px' }}>
            <Mail size={24} color="#bea180" />
            <h3 style={{ margin: 0, fontSize: '18px' }}>Change Email Address</h3>
          </div>
          
          <form onSubmit={handleUpdateEmail} style={{ maxWidth: '400px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#555', fontWeight: '500' }}>Current Email</label>
              <input type="email" className="admin-search" style={{ width: '100%', boxSizing: 'border-box' }} value={currentEmail} onChange={e => setCurrentEmail(e.target.value)} placeholder="admin@thecinewale.com" />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#555', fontWeight: '500' }}>New Email</label>
              <input type="email" className="admin-search" style={{ width: '100%', boxSizing: 'border-box' }} value={newEmail} onChange={e => setNewEmail(e.target.value)} placeholder="newadmin@thecinewale.com" />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#555', fontWeight: '500' }}>Current Password / OTP</label>
              <input type="password" className="admin-search" style={{ width: '100%', boxSizing: 'border-box' }} value={emailPassword} onChange={e => setEmailPassword(e.target.value)} placeholder="Verify it's you" />
            </div>
            <button className="admin-filter-btn" style={{ width: '100%', background: '#bea180', color: '#fff', border: 'none', justifyContent: 'center', fontWeight: '600', padding: '12px' }} type="submit">
              Update Email
            </button>
          </form>
        </div>
      )}

      {/* CHANGE PASSWORD VIEW */}
      {activeView === 'password' && (
        <div className="admin-table-section" style={{ padding: '30px' }}>
          <button 
            onClick={() => setActiveView('menu')}
            style={{ background: 'none', border: 'none', color: '#777', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '25px', fontSize: '14px', padding: 0 }}
          >
            <ArrowLeft size={16} /> Back to Profile Menu
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '15px' }}>
            <Lock size={24} color="#791112" />
            <h3 style={{ margin: 0, fontSize: '18px' }}>Change Password</h3>
          </div>
          
          <form onSubmit={handleChangePassword} style={{ maxWidth: '400px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#555', fontWeight: '500' }}>Current Password</label>
              <input type="password" className="admin-search" style={{ width: '100%', boxSizing: 'border-box' }} value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} placeholder="Enter current password" />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#555', fontWeight: '500' }}>New Password</label>
              <input type="password" className="admin-search" style={{ width: '100%', boxSizing: 'border-box' }} value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Enter new password" />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', color: '#555', fontWeight: '500' }}>Confirm New Password</label>
              <input type="password" className="admin-search" style={{ width: '100%', boxSizing: 'border-box' }} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Repeat new password" />
            </div>
            <button className="admin-filter-btn" style={{ width: '100%', background: '#791112', color: '#fff', border: 'none', justifyContent: 'center', fontWeight: '600', padding: '12px' }} type="submit">
              Change Password
            </button>
          </form>
        </div>
      )}

    </div>
  );
}
