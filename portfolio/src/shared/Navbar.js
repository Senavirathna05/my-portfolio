import React from 'react'
import './Navbar.css';
import mylogo from '../image/mylogo.png';



function Navbar() {
  return (
    <div className='Navbar'> 

        <img src={mylogo} alt='logo'></img>

      <ul className="top-nav">
        <a href="" className="active">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Portfolio</a>
        <a href="">Contact</a>
      </ul>

      <div className='bx bx-moon' id="darkMode-icon"></div>
    </div>
  )
}

export default Navbar

