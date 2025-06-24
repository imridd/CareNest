import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Donate from './pages/donate';
import Receive from './pages/receive';
import SignupLogin from './pages/SignupLogin';
import Status from './pages/UserStatus';          // ✅ User's status page
import AdminDashboard from './pages/AdminDashboard'; // ✅ Admin dashboard

function App() {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/signup" element={<SignupLogin />} />
        <Route path="/login" element={<SignupLogin />} />
        <Route path="/status" element={<Status />} />
        <Route
          path="/admin"
          element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;










