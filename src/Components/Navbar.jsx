import React from 'react'
import asset1 from './Assets/Asset 1.png'
const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <img src={asset1} alt="" />

        <div className='nav2'>
         <li>Home</li>
         <li>About us</li>
         <li>Services</li>
         <li>Contact</li>
        </div>

        <div className='nav3'>
         <button>Join us</button>
         <li>Hire a talent</li>
        </div>
        
      </div>



    </div>
  )
}

export default Navbar
