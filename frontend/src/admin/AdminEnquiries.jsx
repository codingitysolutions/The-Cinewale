import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Trash2 } from 'lucide-react';

export default function AdminEnquiries() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState([]);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewModalData, setViewModalData] = useState(null);
  const itemsPerPage = 10;
  
  const authHeader = localStorage.getItem('admin_auth');

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('http://localhost:8787/api/admin/enquiries', {
        headers: { 'Authorization': `Basic ${authHeader}` }
      });
      if (res.ok) setEnquiries(await res.json());
    } finally { setLoading(false); }
  };

    const deleteEnquiry = (id) => setDeleteConfirmId(id);

  const confirmDelete = async () => {
    if (!deleteConfirmId) return;
    try {
      const res = await fetch(`http://localhost:8787/api/admin/enquiries/${deleteConfirmId}`, {
        method: 'DELETE', headers: { 'Authorization': `Basic ${authHeader}` }
      });
      if (res.ok) setEnquiries(enquiries.filter(e => e.id !== deleteConfirmId));
    } catch(err) {}
    setDeleteConfirmId(null);
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:8787/api/admin/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Authorization': `Basic ${authHeader}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e));
    } catch(err) {}
  };

  const filtered = useMemo(() => {
    if (!searchQuery) return enquiries;
    const lowerQ = searchQuery.toLowerCase();
    return enquiries.filter(e => 
      (e.name || '').toLowerCase().includes(lowerQ) ||
      (e.email || '').toLowerCase().includes(lowerQ) ||
      (e.phone || '').toLowerCase().includes(lowerQ)
    );
  }, [searchQuery, enquiries]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  return (
    <>
      <div className="admin-table-section">
        <div className="admin-table-header">
          <div><h2>All Bookings</h2><p>View and manage all received booking requests.</p></div>
          <div className="admin-table-actions">
            <input type="text" className="admin-search" placeholder="Search..." value={searchQuery} onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }} />
          </div>
        </div>
        
        <div style={{overflowX: "auto"}}>
        <table className="admin-table">
          <thead>
            <tr><th>#</th><th>Name</th><th>Email</th><th>Phone</th><th>Dates</th><th>Venue</th><th>Guest Count</th><th>Services</th><th>Source</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            {loading ? <tr><td colSpan="11" style={{textAlign:'center'}}>Loading...</td></tr> : 
             paginated.length === 0 ? <tr><td colSpan="11" style={{textAlign:'center'}}>No bookings found.</td></tr> : 
             paginated.map((enq, index) => (
              <tr key={enq.id}>
                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td>{enq.name}</td>
                <td>{enq.email}</td>
                <td>{enq.phone}</td>
                <td>{enq.dates || '-'}</td>
                <td>{enq.venue || '-'}</td>
                <td>{enq.guest_count || '-'}</td>
                <td>{enq.services || '-'}</td>
                <td>{enq.hear_about || '-'}</td>
                <td>
                  <select value={enq.status} onChange={e => updateStatus(enq.id, e.target.value)} className={`status-badge ${enq.status.toLowerCase()}`}>
                    <option value="New">New</option><option value="Viewed">Viewed</option><option value="Contacted">Contacted</option><option value="Converted">Converted</option>
                  </select>
                </td>
                <td>
                  <div className="action-btns">
                    <button className="action-btn" title="View" onClick={() => setViewModalData(enq)}><Eye size={16} /></button>
                    <button className="action-btn" title="Delete" onClick={() => deleteEnquiry(enq.id)}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
        <div className="admin-pagination">
          <div>Showing {filtered.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length}</div>
          <div className="pagination-controls">
            <button className="page-btn" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>«</button>
            <button className="page-btn" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>»</button>
          </div>
        </div>
      </div>

      {viewModalData && (
        <div className="admin-modal-overlay" onClick={() => setViewModalData(null)}>
          <div className="admin-modal-content" onClick={e => e.stopPropagation()}>
            <button className="admin-modal-close" onClick={() => setViewModalData(null)}>×</button>
            <h2>Enquiry Details</h2>
            <div className="admin-modal-body">
              <p><strong>Name:</strong> {viewModalData.name}</p>
              <p><strong>Email:</strong> {viewModalData.email}</p>
              <p><strong>Phone:</strong> {viewModalData.phone}</p>
              <p><strong>Dates:</strong> {viewModalData.dates || 'N/A'}</p>
              <p><strong>Venue:</strong> {viewModalData.venue || 'N/A'}</p>
              <p><strong>Guest Count:</strong> {viewModalData.guest_count || 'N/A'}</p>
              <p><strong>Services:</strong> {viewModalData.services || 'N/A'}</p>
              <p><strong>Source:</strong> {viewModalData.hear_about || 'N/A'}</p>
              <div style={{marginTop:'15px'}}>
                <strong>Story:</strong>
                <p style={{background:'#f9f9f9', padding:'10px', borderRadius:'6px', marginTop:'5px'}}>{viewModalData.story || 'No story provided.'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    
      {deleteConfirmId && (
        <div className="admin-modal-overlay" onClick={() => setDeleteConfirmId(null)}>
          <div className="admin-modal-content" onClick={e => e.stopPropagation()} style={{maxWidth: '400px', textAlign: 'center'}}>
            <h3 style={{marginBottom: '15px', color: '#791112'}}>Confirm Deletion</h3>
            <p style={{marginBottom: '25px', color: '#555'}}>Are you sure you want to delete this enquiry? This action cannot be undone.</p>
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
