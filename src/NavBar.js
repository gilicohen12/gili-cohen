// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import DownloadButton from './DownloadButton';
import './nav-bar.css';

const NavBar = () => {
  return (
    <nav className= "nav-bar">
      <div className="container"> 
        <Link to="/gili-cohen/" className="logo">GC</Link>
        <div className="nav-texts">
          <Link to="/exploratory" className="nav-links">Exploratory Pieces</Link>
          <Link to="/photography" className="nav-links">Photography</Link>
          <Link to="/gili-cohen/#experience" className="nav-links">Experience</Link>
          <Link to="/contact" className="nav-links">Contact</Link>
          <DownloadButton/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
