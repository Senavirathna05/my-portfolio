import React from 'react'
import './Services.css';

function Services() {
  return (
    <section className='services' id='services'>
     
      <h2 className='services-heading'>my <span>Services</span></h2>

      <div className='services-container'>
        <div className='services-box'>
          <i class='bx bx-code-alt'> </i>
          <h3>Web Development</h3>
          <p> If the program doesn't work the way it should, the programmer should use
          testing tools and methods to find and fix the mistakes in the code.</p>
          <a href='#' className='services-btn'>Read More</a>
        </div>

        <div className='services-box'>
          <i class='bx bx-palette'></i>
          <h3>Graphic Design</h3>
          <p> If the program doesn't work the way it should, the programmer should use
          testing tools and methods to find and fix the mistakes in the code.</p>
          <a href='#' className='services-btn'>Read More</a>
        </div>

        <div className='services-box'>
          <i class='bx bx-paint'></i>
          <h3>UI/UX Design</h3>
          <p> If the program doesn't work the way it should, the programmer should use
          testing tools and methods to find and fix the mistakes in the code.</p>
          <a href='#' className='services-btn'>Read More</a>
        </div>
      </div>
       
    </section>
  )
}

export default Services
