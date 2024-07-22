import React from 'react'
import girl from './Assets/Girlpic.png'
import arrow from './Assets/whiteArrow.png'

const Hero6 = () => {
  return (
    <div className='hero6'>
        <div className='dom5'>
            <div className='Ldiv'>
                <h4>Let's talk</h4>
                <h2>Speak with our Experts</h2>
                <p>Connect with our experts to receive personalized guidance and solutions tailored to your specific needs and goals.</p>

                <div>
                    <img src={girl} alt="girl" className='girl'/>
                </div>
            </div>


            <div className='Rdiv'>
                <h4>I'm interested in...</h4>
                <div className='btDiv'>
                    <button className='Lbt'>Hiring A Tech Talent</button>
                    <button className='Rbt'>IT Outsourcing</button>
                </div>
                <input type="text" placeholder='  Name' className='ip1'/> <br /> <br />
                <input type="email" placeholder='  Email address' className='ip2'/> <br /> <br />
                {/* <input type="textarea" placeholder='Talk to us...' className='summary'/> */}
                <textarea placeholder="  Talk to us" className='summary'></textarea>
                <br /><br />
                <button className='send'>Send Message <img src={arrow} alt="Warrow" className='arrow'/></button>
            </div>

        </div>
      
    </div>
  )
}

export default Hero6
