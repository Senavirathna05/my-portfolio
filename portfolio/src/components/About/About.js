import React from 'react'
import mylog02 from '../../Image/mylog02.png';
import './About.css'

function About() {
  return (
    <section className='about' id='about'>
      <div className='about-img'>
          <img src={mylog02} alt=''></img> 
      </div>

      <div className='about-content'>
        <h2 className='heading'>About <span>Me</span></h2>
        <h3>Hi, I'm Here To Help Your Next Project!</h3>
        <p>Manages and organizes the presentation of the information 
          in a helpful way. The syntax and semantics of the data transmission
           are layer's main roles. It converts host system datasets into 
           a basic network format for network transport. It transforms the 
           network format sent into the proper host computer format on the 
           receiving end just so data can be used without even a host computer.</p>
           <a href='#' className='btn'>Read More</a>
      </div>

    </section>
  )
}

export default About
