import React from 'react'
import group5 from './Assets/Group 5.png'
import ms from './Assets/microsoft.png'

const Hero5 = () => {
  return (
    <div className='hero5'>
        <div className='dom4'>
            <div className='hero5txt'>
                <h3>OUR RELATINSHIP WITH OTHER BRANDS</h3>
                <h2>Top Brands We’ve Worked With</h2>
                <p>Our partnership with top brands enables us to create innovative and impactful collaborations that enhance brand visibility and drive mutual growth.</p>
            </div>
        </div>
        <div className='brands'>
                <div className='ms1'>
                    <img src={ms} alt="ms" />
                </div>
                <div className='ms2'>
                    <img src={ms} alt="ms" />
                </div>
                <div className='ms3'>
                    <img src={ms} alt="ms" />
                </div>
                <div className='ms4'>
                    <img src={ms} alt="ms" />
                </div>

            </div>
      
    </div>
  )
}

export default Hero5
