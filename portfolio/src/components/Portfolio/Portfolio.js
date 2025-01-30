import React from 'react'
import './Portfolio.css';
import Eventreminder from '../../Image/Event-reminder.png';

function Portfolio() {
  return (
    <section className='Portfolio' id='portfolio'>
      <h2 className='Portfolio-heading'> Latest <span> Project </span></h2>

      <div className='portfolio-container'>
        <div className='protfolio-box'>
          <img src={Eventreminder}></img>
          
          <div className='portfolio-layer'>
            <h4>web Design</h4>
            <p>Manages and organizes the presentation of the information 
              in a helpful way. The syntax and semantics of the data transmission
              are layer's main roles.</p>
            <a href='#'><i class = 'bx bx-link-external'></i></a>  
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Portfolio
