// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './nav-bar.css';

const NavBar = () => {
  return (
    <nav className= "nav-bar">
      <div className="container"> 
        <Link to="/home" className="logo">GC</Link>
        <div className="nav-texts">
          <Link to="/home#experience" className="nav-links">Experience</Link>
          <Link to="/exploratory" className="nav-links">Exploratory Pieces</Link>
          <Link to="/photography" className="nav-links">Photography</Link>
          <span className="nav-links">Contact</span>
          <button className="download-button">Download CV</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
