import React from 'react'
import group3 from './Assets/group3.png'
import group4 from './Assets/Group 4.png'
import data from './Data.js'
import arrow from './Assets/Name=arrow-right.png'
import excitedMale from './Assets/Excited happy afro american man looking at laptop computer.png'
import excitedFemale from './Assets/Portrait of young successful african business lady over white wall.png'

const Hero2 = () => {
  return (
    <div className='hero2'>
        <div className='dom'>
      <div className='div1'>
        <h3>WHY CHOOSE NUPAT?</h3>
        <h2>We have Topnotch Tech Talents</h2>
        <p>At Nupat Teams, we pride ourselves in providing tech talents with a proven track record. Our pool consits of experts in Software Software Development and related IT roles. </p>
      </div>       
      </div>

      {/* <div className='topnotch'>
        {data.map((d)=>(
            <div className='Tndiv1'>
                <h2>{d.head}</h2>
                <h5>{d.summary}</h5>
                <button>{d.button}</button>
                <div>
                    <img src={d.image} alt="image" />
                </div>
            </div>
        ))
        }
      </div> */}
      <div className='carddiv'>
      <div className='Mdiv'>
        <img src={excitedMale} alt="" className='male'/>
        <h2>Empower Business Growth</h2>
        <p>At Nupat Teams, we pride ourselves in providing tech talents with a proven track record.</p>
        <button className='button1'>Get Started <img src={arrow} alt="" className='arrow'/></button>
        
      </div>
      <div className='Fdiv'>
        <img src={excitedFemale} alt="" className='female'/>
        <h2>Discover Elite Tech Experts</h2>
        <p>We aim to improve employees' lives and partner organizations by finding beneficial opportunities.</p>
        <button className='button2'>Search talent <img src={arrow} alt="" className='arrow'/></button>        
      </div>     
      </div>
    </div>
  )
}
export default Hero2
