import React from 'react'
import icon1 from './Assets/icon1.png'
import icon2 from './Assets/icon2.png'
import icon3 from './Assets/icon3.png'
import icon4 from './Assets/icon4.png'

const Hero3 = () => {
  return (
    <div className='hero3'>
        <div className='dom2'>
        <div className='hero3txt'>
        <h3>Our Outsourcing Services and Distinguished Business Assist Solutions</h3>
        <p>Our Outsourcing Services provide top-tier talent and resources to meet your business needs efficiently and cost-effectively.</p>
        </div>  
        </div>

        <div className='hero3cards'>
            <div>
                <img src={icon1} alt="icon" />
                <h3 className='recruit'>Recruitment</h3>
                <p>We source and screen for the right people who will deliver the right result for your organisation; professional and unprofessional positions that solve compliances scalability, cost, quality or other recruiting challenge.</p>
                <button className='b1'>Learn More</button>
            </div>
            <div>
                <img src={icon2} alt="icon" />
                <h3 className='outsoursing'>IT Outsourcing</h3>
                <p>We’ve increased business productivity and efficiency in many organisations using technology, Let’s help your business scale with bespoke IT Solutions.</p>
                <button className='b2'>Learn More</button>
            </div>
            <div>
                <img src={icon3} alt="icon" />
                <h3 className='advisory'>Business Advisory</h3>
                <p>This service focuses on non-permanent employee hiring. Our clients delegate the endless functions involved with contingent worker hiring and management.</p>
                <button className='b3'>Learn More</button>
            </div>
            <div>
                <img src={icon4} alt="icon" />
                <h3 className='hiring'>Talent Hiring</h3>
                <p>To excel, your organisation needs the right talent. Our expert recruiters source, screen and process candidates, using our talent spotlight to connect you with the perfect employee faster and more effectively.</p>
                <button className='b4'>Learn More</button>
            </div>
        </div>
      
      
    </div>
  )
}

export default Hero3
