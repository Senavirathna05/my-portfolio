import React from 'react'
import './Navbar.css';



function Navbar() {
  return (
    <div className='Header'>
    <div className='title'>
        <h1>Dashboard</h1>
    </div>
    <div className='information'>
        <div className='pa'>
            <p>Today's Income: <span className='textboltd'>RS.10,000</span></p>
        </div>
        <div className='income'>
             <i className='material-icons notifiicon'>notifications</i>
             
        </div>
    </div>
</div>
  )
}

export default Navbar

