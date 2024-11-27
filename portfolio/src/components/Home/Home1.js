import React from 'react'
import Navbar from '../../shared/Navbar'
import './Home1.css';


function Home1() {
  return (
    <div> 
        <Navbar/>
        <section className='home' id='home'>
            <div className='home-content'>
            <h3>Helo, I am</h3> 
            <h1>Sahan Lakmal</h1> 
            <p>If the program doesn't work the way it should, the programmer should use testing tools and methods to find and fix the mistakes in the code.</p>
            </div>

            <div className='social-media'>
                <a href='#'><box-icon name='linkedin' type='logo' ></box-icon></a>
                <a href='#'><box-icon name='github' type='logo' ></box-icon></a>
                <a href='#'><box-icon name='facebook' type='logo' ></box-icon></a>
                <a href='#'><box-icon name='instagram-alt' type='logo' ></box-icon></a>           
            </div>

            <a href='#'className='btn'>Download CV </a>
        </section>  
    </div>
  )
}

export default Home1
