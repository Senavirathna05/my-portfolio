import React from 'react';
import './Navbar.css';
import mylogo from '../Image/mylogo.png';



function Navbar() {
  return (
    <div className='Navbar'> 
      {/* <img src={mylogo} alt='Website Logo'></img> */}
      <p>Sahan.</p>

      <ul className="top-nav">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </ul>

      <div className='bx bx-moon' id="darkMode-icon"></div>
    </div>
  );
}

export default Navbar;
