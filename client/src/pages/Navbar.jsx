import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/NavBar.css';
import logo from '../assets/CareNest logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload(); // Refresh navbar state
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const getUserInitial = () => {
    if (loggedInUser?.email) return loggedInUser.email.charAt(0).toUpperCase();
    return isAdmin ? 'A' : '';
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

          {/* ✅ Show Status only to normal users */}
          {loggedInUser && !isAdmin && <Link to="/status">Status</Link>}

          {!loggedInUser && !isAdmin ? (
            <Link to="/signup">Signup</Link>
          ) : (
            <div className="profile-container" onClick={toggleDropdown}>
              <div className="profile-icon">{getUserInitial()}</div>
              {showDropdown && (
                <div className="dropdown-menu">
                  {isAdmin && (
                    <Link to="/admin" className="dropdown-item">
                      Dashboard
                    </Link>
                  )}
                  <button onClick={handleLogout} className="dropdown-item">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;











