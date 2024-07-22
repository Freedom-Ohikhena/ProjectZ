import React from 'react'
import ellipse5 from './Assets/Ellipse 5.png'
import ellipse2 from './Assets/Ellipse 2.png'
import ellipse3 from './Assets/Ellipse 3.png'
import ellipse4 from './Assets/Ellipse 4.png'
import ellipse1 from './Assets/Ellipse 1.png'
import group1 from './Assets/Group 1.png'
import group2 from './Assets/Group 2.png'
import arrow from './Assets/Name=arrow-right.png'
import html from './Assets/logos_html-5.png'
import c from './Assets/devicon_csharp.png'
import js from './Assets/devicon_javascript.png'
import fig from './Assets/devicon_figma.png'


const Hero = () => {
  return (
    <div>
        <div className='herodiv'>
            <img src={ellipse5} alt="ellipse5" className='ellipse5'/>
            <img src={ellipse4} alt="ellipse4" className='ellipse4'/>
            <img src={ellipse1} alt="ellipse1" className='ellipse1'/>
            <img src={ellipse3} alt="ellipse3" className='ellipse3'/>
            <img src={ellipse2} alt="ellipse2" className='ellipse2'/>
            <img src={html} alt="html" className='html' />
            <img src={c} alt="c" className='c' />
            <img src={js} alt="js" className='js'/>
            <img src={fig} alt="fig" className='fig'/>
            

            <div className='herotext'>
                <h1>FIND THE RIGHT <span className='highlight'>TECH TALENT</span> FOR YOUR <span className='highlight'>BUSINESS</span></h1>
                <div className='herotext2'>
                    <h4>Dream Jobs, African top Talents. All in one place</h4>
                </div>
                <div className='herobuttons'>
                    <button className='bt1'>Login</button>
                    <button className='bt2'>Learn More <img src={arrow} alt="arrow" className='arrow'/></button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero
