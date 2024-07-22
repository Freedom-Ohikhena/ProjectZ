import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from './Assets/Ellipse 9.png'
import img2 from './Assets/Ellipse 10.png'
import img3 from './Assets/Ellipse 11.png'

function Karousel () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
    <Carousel responsive={responsive} className='karouselsd'>
        <div className='item1'>
            <div className='dt1'>
                <div className='item1img'>
                    <img src={img1} alt="image" />
                </div>
                <div className='item1txt'>
                    <h4>Oladeinde Jackson <span className='title'>CEO, Onyx Solutions</span></h4>
                </div>
            </div>
            <p>NUPAT Outsourcing is a network of hand selected and rigorously vetted employees. Join teams who have hired competent talents from NUPAT Outsourcing from few months to present time.</p>
        </div>

        <div className='item2'>
        <div className='dt2'>
                <div className='item2img'>
                    <img src={img2} alt="image" />
                </div>
                <div className='item2txt'>
                    <h4>Oladeinde Jackson <span className='title'>CEO, Onyx Solutions</span></h4>
                </div>
            </div>
            <p>NUPAT Outsourcing is a network of hand selected and rigorously vetted employees. Join teams who have hired competent talents from NUPAT Outsourcing from few months to present time.</p>
        </div>

        <div className='item3'>
        <div className='dt3'>
                <div className='item3img'>
                    <img src={img3} alt="image" />
                </div>
                <div className='item3txt'>
                    <h4>Oladeinde Jackson <span className='title'>CEO, Onyx Solutions</span></h4>
                </div>
            </div>
            <p>NUPAT Outsourcing is a network of hand selected and rigorously vetted employees. Join teams who have hired competent talents from NUPAT Outsourcing from few months to present time.</p>
        </div>

        <div className='item4'>
        <div className='dt4'>
                <div className='item4img'>
                    <img src={img1} alt="image" />
                </div>
                <div className='item4txt'>
                    <h4>Oladeinde Jackson <span className='title'>CEO, Onyx Solutions</span></h4>
                </div>
            </div>
            <p>NUPAT Outsourcing is a network of hand selected and rigorously vetted employees. Join teams who have hired competent talents from NUPAT Outsourcing from few months to present time.</p>
        </div>
        <div className='item5'>
        <div className='dt5'>
                <div className='item5img'>
                    <img src={img2} alt="image" />
                </div>
                <div className='item5txt'>
                    <h4>Oladeinde Jackson <span className='title'>CEO, Onyx Solutions</span></h4>
                </div>
            </div>
            <p>NUPAT Outsourcing is a network of hand selected and rigorously vetted employees. Join teams who have hired competent talents from NUPAT Outsourcing from few months to present time.</p>

        </div>
    </Carousel>;
    </div>
  )
}

export default Karousel
