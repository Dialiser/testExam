import React from 'react';
import { FaHome, FaMusic, FaSearch, FaCog, FaSignOutAlt } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import the logo image

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
         
      </div>
      <ul className="menu">
        <li>Menu</li>
        <li><FaHome /> Home</li>
        <li><FaMusic /> Trends</li>
        <li><FaSearch /> Library</li>
        <li><FaMusic /> Discover</li>
      </ul>
      <div className="general">
        <li>GENERAL</li>
        <li><FaCog /> Settings</li>
        <li><FaSignOutAlt /> Log Out</li>
      </div>
    </div>
  );
};

export default Sidebar;
