import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/NavBar.css';
import logo from '../assets/CareNest logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const userSignedUp = localStorage.getItem('userEmail');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Care-Nest Logo" />
          <span>Care-Nest</span>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/receive">Receive</Link>
          {!userSignedUp ? (
            <Link to="/signup">Signup</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {isAdmin && <Link to="/adminlogin">Admin Login</Link>}
          {userSignedUp && <button onClick={handleLogout} className="logout-btn">Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







