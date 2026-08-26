import React, { useEffect, useState } from 'react';
import { Eye, Trash2 } from 'lucide-react';

export default function AdminMessages() {
  const [items, setItems] = useState([]);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const authHeader = localStorage.getItem('admin_auth');

  useEffect(() => {
    fetch('http://localhost:8787/api/admin/messages', { headers: { 'Authorization': `Basic ${authHeader}` } })
      .then(r => r.json()).then(setItems);
  }, []);

    const del = (id) => setDeleteConfirmId(id);

  const confirmDelete = async () => {
    if (!deleteConfirmId) return;
    const res = await fetch(`http://localhost:8787/api/admin/messages/${deleteConfirmId}`, { method: 'DELETE', headers: { 'Authorization': `Basic ${authHeader}` } });
    if(res.ok) setItems(items.filter(i => i.id !== deleteConfirmId));
    setDeleteConfirmId(null);
  };

  return (
    <div className="admin-table-section">
      <div className="admin-table-header"><h2>Messages</h2></div>
      <table className="admin-table">
        <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Date</th><th>Action</th></tr></thead>
        <tbody>
          {items.map(i => <tr key={i.id}><td>{i.id}</td><td>{i.name}</td><td>{i.email}</td><td>{i.message}</td><td>{new Date(i.created_at).toLocaleDateString()}</td><td><button className="action-btn" onClick={()=>del(i.id)}><Trash2 size={16} /></button></td></tr>)}
        </tbody>
      </table>
    
      {deleteConfirmId && (
        <div className="admin-modal-overlay" onClick={() => setDeleteConfirmId(null)}>
          <div className="admin-modal-content" onClick={e => e.stopPropagation()} style={{maxWidth: '400px', textAlign: 'center'}}>
            <h3 style={{marginBottom: '15px', color: '#791112'}}>Confirm Deletion</h3>
            <p style={{marginBottom: '25px', color: '#555'}}>Are you sure you want to delete this message?</p>
            <div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
              <button onClick={() => setDeleteConfirmId(null)} style={{padding: '10px 20px', background: '#f5f5f5', color: '#333', border: '1px solid #ddd', borderRadius: '6px', cursor: 'pointer'}}>Cancel</button>
              <button onClick={confirmDelete} style={{padding: '10px 20px', background: '#791112', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer'}}>Delete</button>
            </div>
          </div>
        </div>
      )}
</div>
  );
}
