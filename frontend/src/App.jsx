import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Index from './pages/index.jsx';
import Contact from './pages/contact.jsx';
import Faq from './pages/faq.jsx';
import Terms from './pages/terms.jsx';
import Films from './pages/films.jsx';
import Nabanisitha from './pages/nabanisitha.jsx';
import Prajnya_sasmita from './pages/prajnya-sasmita.jsx';
import Preetish_shradha from './pages/preetish-shradha.jsx';
import Sriram_lipsa from './pages/sriram-lipsa.jsx';
import Photography from './pages/photography.jsx';
import Rsvp from './pages/rsvp.jsx';
import Sejal_jagtar from './pages/sejal-jagtar.jsx';
import AdminLayout from './admin/AdminLayout.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';
import AdminEnquiries from './admin/AdminEnquiries.jsx';
import AdminMessages from './admin/AdminMessages.jsx';
import AdminSubscribers from './admin/AdminSubscribers.jsx';
import AdminTeam from './admin/AdminTeam.jsx';
import AdminProfile from './admin/AdminProfile.jsx';

import AdminLogin from './admin/AdminLogin.jsx';



function RouteInterceptor({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const handleClick = (e) => {
      const a = e.target.closest('a');
      if (a && a.href) {
        try {
          const url = new URL(a.href);
          // Intercept only internal links, exclude external and anchors like href="#"
          if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
            e.preventDefault();
            navigate(url.pathname + url.search + url.hash);
            window.scrollTo(0, 0);
          }
        } catch (err) {}
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);
  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <RouteInterceptor>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms-and-condition" element={<Terms />} />
          <Route path="/faq.html" element={<Faq />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films.html" element={<Films />} />
          <Route path="/nabanisitha" element={<Nabanisitha />} />
          <Route path="/nabanisitha.html" element={<Nabanisitha />} />
          <Route path="/prajnya-sasmita" element={<Prajnya_sasmita />} />
          <Route path="/prajnya-sasmita.html" element={<Prajnya_sasmita />} />
          <Route path="/preetish-shradha" element={<Preetish_shradha />} />
          <Route path="/preetish-shradha.html" element={<Preetish_shradha />} />
          <Route path="/sriram-lipsa" element={<Sriram_lipsa />} />
          <Route path="/sriram-lipsa.html" element={<Sriram_lipsa />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography.html" element={<Photography />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/rsvp.html" element={<Rsvp />} />
          <Route path="/sejal-jagtar" element={<Sejal_jagtar />} />
          <Route path="/sejal-jagtar.html" element={<Sejal_jagtar />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/enquiries" element={<AdminEnquiries />} />
            <Route path="/admin/messages" element={<AdminMessages />} />
            <Route path="/admin/subscribers" element={<AdminSubscribers />} />
            <Route path="/admin/team" element={<AdminTeam />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
          </Route>
        </Routes>
      </RouteInterceptor>
    </BrowserRouter>
  );
}

export default App;
