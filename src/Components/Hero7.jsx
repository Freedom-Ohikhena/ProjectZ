import React from 'react'
import send from './Assets/ar button.png'

const Hero7 = () => {
  return (
    <div className='hero7'>
        <div className='dom6'>
            <div className='hero7txt'>
                <h1 className='h7'>Don’t want to miss anything</h1>
                <p>Stay updated by subscribing to our newsletter, where you'll receive the latest news, insights, and exclusive offers directly in your inbox. Don't miss out on valuable content designed to help you stay ahead in your field.</p>
            </div>
        </div>
        <div className='Esend'>
            <input type="email" placeholder='  Enter Email address'/>
            <img src={send} alt="" />
        </div>
    </div>
  )
}

export default Hero7
