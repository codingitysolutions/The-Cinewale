import React, { useEffect, useState } from 'react';
import { Users, Trash2, Shield, Plus } from 'lucide-react';
import './admin.css';

export default function AdminTeam() {
  const [team, setTeam] = useState([]);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  // New User Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [perms, setPerms] = useState({
    dashboard: false,
    bookings: false,
    messages: false,
    subscribers: false
  });

  const authHeader = localStorage.getItem('admin_auth');
  const userRole = localStorage.getItem('admin_role');

  const fetchTeam = () => {
    setLoading(true);
    fetch('http://localhost:8787/api/admin/team/users', {
      headers: { 'Authorization': `Basic ${authHeader}` }
    })
    .then(r => r.json())
    .then(data => {
      if (Array.isArray(data)) setTeam(data);
      setLoading(false);
    })
    .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (userRole === 'admin') fetchTeam();
  }, [authHeader, userRole]);

  const handleCreate = async (e) => {
    e.preventDefault();
    const selectedPerms = Object.keys(perms).filter(k => perms[k]);
    
    if (selectedPerms.length === 0) {
      alert('Please select at least one permission section.');
      return;
    }

    try {
      const res = await fetch('http://localhost:8787/api/admin/team/users', {
        method: 'POST',
        headers: { 
          'Authorization': `Basic ${authHeader}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password: password,
          role: 'employee',
          permissions: selectedPerms
        })
      });
      
      if (res.ok) {
        setShowModal(false);
        setEmail('');
        setPassword('');
        fetchTeam();
      } else {
        alert('Failed to create employee');
      }
    } catch (err) {
      alert('Error connecting to server');
    }
  };

    const handleDelete = (id) => setDeleteConfirmId(id);

  const confirmDelete = async () => {
    if (!deleteConfirmId) return;
    try {
      await fetch(`http://localhost:8787/api/admin/team/users/${deleteConfirmId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Basic ${authHeader}` }
      });
      fetchTeam();
    } catch (err) {
      alert('Error connecting to server');
    }
    setDeleteConfirmId(null);
  };

  if (userRole !== 'admin') {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Access Denied</h2>
        <p>You do not have permission to view the team management section.</p>
      </div>
    );
  }

  return (
    <>
      <div className="admin-header-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: '0 0 5px 0' }}>Team Management</h2>
          <p style={{ margin: 0, color: '#777', fontSize: '14px' }}>Create and manage employee access</p>
        </div>
        <button className="admin-filter-btn" onClick={() => setShowModal(true)}>
          <Plus size={16} /> Add Employee
        </button>
      </div>

      <div className="admin-table-section">
        <table className="admin-table">
          <thead>
            <tr><th>Email / Username</th><th>Role</th><th>Access / Permissions</th><th>Action</th></tr>
          </thead>
          <tbody>
            {loading ? <tr><td colSpan="4" style={{textAlign:'center'}}>Loading...</td></tr> : 
             team.length === 0 ? <tr><td colSpan="4" style={{textAlign:'center'}}>No team members found.</td></tr> : 
             team.map((member) => (
              <tr key={member.id}>
                <td><strong>{member.username}</strong></td>
                <td>
                  <span style={{ 
                    background: member.role === 'admin' ? '#ffebee' : '#e8f5e9', 
                    color: member.role === 'admin' ? '#c62828' : '#2e7d32', 
                    padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' 
                  }}>
                    {member.role.toUpperCase()}
                  </span>
                </td>
                <td>
                  {member.permissions === 'all' ? 'Full Access' : 
                   (JSON.parse(member.permissions || '[]').join(', '))}
                </td>
                <td>
                  {member.role !== 'admin' && (
                    <button className="admin-action-btn delete" onClick={() => handleDelete(member.id)} title="Remove Access">
                      <Trash2 size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content" style={{ maxWidth: '450px', padding: '30px' }}>
            <button onClick={() => setShowModal(false)} className="admin-modal-close">&times;</button>
            <h2 style={{ margin: '0 0 25px 0', color: '#791112', fontSize: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '15px' }}>
              Create Employee Account
            </h2>
            <div className="admin-modal-body">
              <form onSubmit={handleCreate}>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#555' }}>Email Address / Username</label>
                  <input type="text" required className="admin-search" style={{ width: '100%', boxSizing: 'border-box', padding: '12px 15px', background: '#fafafa' }} value={email} onChange={e => setEmail(e.target.value)} placeholder="e.g. employee@thecinewale.com" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#555' }}>Password</label>
                  <input type="password" required className="admin-search" style={{ width: '100%', boxSizing: 'border-box', padding: '12px 15px', background: '#fafafa' }} value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter a secure password" />
                </div>
                
                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', marginBottom: '12px', fontSize: '13px', fontWeight: '600', color: '#555' }}>Select Access Permissions</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    {Object.keys(perms).map(k => (
                      <label key={k} style={{ 
                        display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', 
                        background: perms[k] ? '#ffebee' : '#f9f9f9', 
                        padding: '10px 15px', borderRadius: '8px', 
                        border: perms[k] ? '1px solid #791112' : '1px solid #eaeaea',
                        cursor: 'pointer', transition: '0.2s',
                        color: perms[k] ? '#791112' : '#555', fontWeight: perms[k] ? '600' : '400'
                      }}>
                        <input type="checkbox" checked={perms[k]} onChange={(e) => setPerms({...perms, [k]: e.target.checked})} style={{ display: 'none' }} />
                        <div style={{
                          width: '18px', height: '18px', borderRadius: '4px',
                          border: perms[k] ? 'none' : '2px solid #ccc',
                          background: perms[k] ? '#791112' : 'transparent',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          {perms[k] && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                        </div>
                        {k.charAt(0).toUpperCase() + k.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="admin-filter-btn" style={{ width: '100%', justifyContent: 'center', padding: '14px', background: '#791112', color: '#fff', border: 'none', fontSize: '15px', fontWeight: '600', borderRadius: '8px' }}>
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    
      {deleteConfirmId && (
        <div className="admin-modal-overlay" onClick={() => setDeleteConfirmId(null)}>
          <div className="admin-modal-content" onClick={e => e.stopPropagation()} style={{maxWidth: '400px', textAlign: 'center'}}>
            <h3 style={{marginBottom: '15px', color: '#791112'}}>Confirm Deletion</h3>
            <p style={{marginBottom: '25px', color: '#555'}}>Are you sure you want to remove this employee? This action cannot be undone.</p>
            <div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
              <button onClick={() => setDeleteConfirmId(null)} style={{padding: '10px 20px', background: '#f5f5f5', color: '#333', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer'}}>Cancel</button>
              <button onClick={confirmDelete} style={{padding: '10px 20px', background: '#791112', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer'}}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
