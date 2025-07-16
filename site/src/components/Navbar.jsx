import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo / Brand Name */}
      <div className="logo">RT Marine Consulting</div>

      {/* Hamburger toggle (visible on mobile) */}
      <button className="toggle" onClick={toggleMenu}>
        &#9776; {/* Unicode for hamburger icon ☰ */}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
        <li><NavLink to="/coastal-structures" className="nav-link">Coastal Structures</NavLink></li>
        <li><NavLink to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
