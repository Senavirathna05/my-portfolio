import React from 'react'

function Services() {
  return (
    <section className='services' id='services'>
      <h2 className='heading'>my <span>Services</span></h2>

      <div className='services-container'>
        <div className='services-box'>
          <box-icon name='code-alt'></box-icon>
          <h3>Web Development</h3>
          <p> If the program doesn't work the way it should, the programmer should use
          testing tools and methods to find and fix the mistakes in the code.</p>
          <a href='#' className='btn'>Read More</a>
        </div>
      </div>

      <div className='services-box'>
          <box-icon name='code-alt'></box-icon>
          <h3>Graphic Design</h3>
          <p> If the program doesn't work the way it should, the programmer should use
          testing tools and methods to find and fix the mistakes in the code.</p>
          <a href='#' className='btn'>Read More</a>
        </div>

        <div className='services-box'>
          <box-icon name='code-alt'></box-icon>
          <h3>UI/UX Design</h3>
          <p> If the program doesn't work the way it should, the programmer should use
          testing tools and methods to find and fix the mistakes in the code.</p>
          <a href='#' className='btn'>Read More</a>
        </div>
       
    </section>
  )
}

export default Services
