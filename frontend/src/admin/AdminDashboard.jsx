import React, { useEffect, useState } from 'react';
import { Mail, Inbox, Eye, CheckCircle2 } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
  BarChart, Bar
} from 'recharts';

const COLORS = ['#791112', '#bea180', '#2e7d32', '#1565c0'];

export default function AdminDashboard() {
  const [stats, setStats] = useState({ 
    total: 0, new: 0, viewed: 0, converted: 0, 
    sourcesData: [], statusData: [], timelineData: [] 
  });
  
  const authHeader = localStorage.getItem('admin_auth');

  useEffect(() => {
    fetch('http://localhost:8787/api/admin/enquiries', {
      headers: { 'Authorization': `Basic ${authHeader}` }
    })
    .then(r => r.json())
    .then(data => {
      // Sources
      const sourcesMap = {};
      data.forEach(e => {
        const s = e.hear_about || 'Other';
        sourcesMap[s] = (sourcesMap[s] || 0) + 1;
      });
      const sourcesData = Object.keys(sourcesMap).map(key => ({ name: key, count: sourcesMap[key] }));

      // Status
      const newCount = data.filter(e => e.status === 'New').length;
      const viewedCount = data.filter(e => e.status === 'Viewed').length;
      const convertedCount = data.filter(e => e.status === 'Converted').length;
      const contactedCount = data.filter(e => e.status === 'Contacted').length;
      
      const statusData = [
        { name: 'New', value: newCount },
        { name: 'Viewed', value: viewedCount },
        { name: 'Contacted', value: contactedCount },
        { name: 'Converted', value: convertedCount },
      ].filter(item => item.value > 0);

      // Timeline (Group by date)
      const dateMap = {};
      
      // Seed last 7 days with 0 just so the chart isn't empty
      for(let i=6; i>=0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        dateMap[dateStr] = 0;
      }

      data.forEach(e => {
        if (!e.created_at) return;
        const d = new Date(e.created_at);
        const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        dateMap[dateStr] = (dateMap[dateStr] || 0) + 1;
      });
      
      const timelineData = Object.keys(dateMap).map(date => ({ date, enquiries: dateMap[date] }));

      setStats({
        total: data.length,
        new: newCount,
        viewed: viewedCount,
        converted: convertedCount,
        sourcesData,
        statusData,
        timelineData
      });
    });
  }, [authHeader]);

  return (
    <>
      <div className="admin-stats-grid">
        <div className="admin-stat-card"><div className="admin-stat-icon"><Mail size={24} /></div><div className="admin-stat-content"><h3>Total Bookings</h3><div className="stat-value">{stats.total}</div></div></div>
        <div className="admin-stat-card"><div className="admin-stat-icon" style={{background:'#fff3e0',color:'#ef6c00'}}><Inbox size={24} /></div><div className="admin-stat-content"><h3>New</h3><div className="stat-value">{stats.new}</div></div></div>
        <div className="admin-stat-card"><div className="admin-stat-icon" style={{background:'#e8f5e9',color:'#2e7d32'}}><Eye size={24} /></div><div className="admin-stat-content"><h3>Viewed</h3><div className="stat-value">{stats.viewed}</div></div></div>
        <div className="admin-stat-card"><div className="admin-stat-icon" style={{background:'#e3f2fd',color:'#1565c0'}}><CheckCircle2 size={24} /></div><div className="admin-stat-content"><h3>Converted</h3><div className="stat-value">{stats.converted}</div></div></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', marginTop: '30px' }}>
        
        {/* Main Chart (Area Chart) */}
        <div className="admin-card" style={{ height: '400px' }}>
          <h3>Bookings Overview (Last 7 Days)</h3>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={stats.timelineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEnquiries" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#791112" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#791112" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="enquiries" stroke="#791112" strokeWidth={3} fillOpacity={1} fill="url(#colorEnquiries)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Status Pie Chart */}
        <div className="admin-card" style={{ height: '400px' }}>
          <h3>Status Breakdown</h3>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie
                data={stats.statusData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {stats.statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px', marginTop: '30px' }}>
        {/* Source Bar Chart */}
        <div className="admin-card" style={{ height: '350px' }}>
          <h3>Top Booking Sources</h3>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={stats.sourcesData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#eee" />
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#555', fontSize: 13}} width={120} />
              <Tooltip 
                cursor={{fill: '#f5f5f5'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="count" fill="#bea180" radius={[0, 4, 4, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
