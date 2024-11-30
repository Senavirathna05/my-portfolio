import React, { useEffect } from 'react';
import './Navbar.css';
import mylogo from '../Image/mylogo.png';

function Navbar() {
  useEffect(() => {
    // Sticky navbar logic
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        // Ensure the element exists before accessing classList
        header.classList.toggle('sticky', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="header Navbar">
      {/* <img src={mylogo} alt="Website Logo" /> */}
      <p>Sahan.</p>

      <ul className="top-nav">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </ul>

      <div className="bx bx-moon" id="darkMode-icon"></div>
    </div>
  );
}

export default Navbar;
