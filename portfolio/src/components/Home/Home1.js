import React from 'react';
import './Home1.css'
import 'boxicons';

function Home1() {
  return (
    <section className='home' id='home'>
      <div className='home-content'>
        <h3>Hello, I am</h3> 
        <h1>Sahan Lakmal</h1> 
        <p>
          If the program doesn't work the way it should, the programmer should use
          testing tools and methods to find and fix the mistakes in the code.
        </p>
        <div className='social-media'>
          <a href='#' aria-label="LinkedIn"><box-icon name='linkedin' type='logo'></box-icon></a>
          <a href='#' aria-label="GitHub"><box-icon name='github' type='logo'></box-icon></a>
          <a href='#' aria-label="Facebook"><box-icon name='facebook' type='logo'></box-icon></a>
          <a href='#' aria-label="Instagram"><box-icon name='instagram-alt' type='logo'></box-icon></a>            
        </div>
          <a href='#' className='btn'>Download CV</a>
      </div>

      <div className='profession-container'>
        <div className='profession-box'>

          <div className='profession' style={{ "--i": 0 }}>
            <i class='bx bx-code-alt'> </i>
            <h3>Web Developer</h3>
          </div>

          <div className='profession' style={{ "--i": 1 }}>
            <i class='bx bx-code-alt'> </i>
            <h3>Web Developer</h3>
          </div>

          <div className='profession' style={{ "--i": 2 }}>
            <i class='bx bx-code-alt'> </i>
            <h3>Web Developer</h3>
          </div>

          <div className='profession' style={{ "--i": 3 }}>
            <i class='bx bx-code-alt'> </i>
            <h3>Web Developer</h3>
          </div>
                
        </div>
      </div>
    </section> 
  );
}

export default Home1;
