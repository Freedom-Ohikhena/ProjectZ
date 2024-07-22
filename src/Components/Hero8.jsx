import React from 'react'
import logo from './Assets/Asset 1.png'
import linked from './Assets/Frame 1.png'
import fb from './Assets/Frame 2.png'
import x from './Assets/Frame 3.png'
import ig from './Assets/Frame 4.png'
import arrowup from './Assets/arrow-up.png'
import line from './Assets/Line 4.png'

const Hero8 = () => {
  return (
    <div className='hero8'>
        <div className='foot'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='mid'>
                <div className='midbd'>
                <div className='first'>
                    <h3>Services</h3>
                    <p>Hire Tech talent</p>
                    <p>Consult</p>
                    <p>Support others</p>
                </div>
                <div className='second'>
                    <h3>Company</h3>
                    <p>About us</p>
                    <p>Join our team</p>
                </div>
                <div className='copy'>
                    <img src={line} alt="line" className='line'/>
                    <p>&copy; 2024 Nupat Teams.All Rights Reserved</p>
                </div>              
                </div>
            </div>
            
            <div>
                <h3>Follow us</h3>
                <div className='socials'>
                    <img src={linked} alt="linked" />
                    <img src={fb} alt="fb" />
                    <img src={x} alt="x" />
                    <img src={ig} alt="ig" />
                </div>
                <div>
                    <button className='topbtn'>Back to Top <img src={arrowup} alt="arrow" className='arrowup'/></button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Hero8
