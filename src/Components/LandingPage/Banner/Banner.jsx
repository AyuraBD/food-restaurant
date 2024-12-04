import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import picOne from '../../../assets/one.jpg'
import picTwo from '../../../assets/two.jpg'
import picThree from '../../../assets/three.jpg'
import './Banner.css'

const Banner = () => {
  return (
      <Carousel
      showThumbs={false}
      infiniteLoop
      showStatus={false}
      autoPlay
      interval={3000}
      className="custom-carousel z-0"
      >
        <div>
          <div className='single-slide'>
              <img src={picOne}/>
              <div className='caption'>
                <div className='lg:w-1/2 md:w-2/2 sm:w-2/2 max-sm:w-2/2 m-auto text-white'>
                  <h1 className="text-3xl mb-2 font-bold">Slider one</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur placeat natus sunt iure, qui beatae porro, labore, velit exercitationem corporis saepe deleniti. Obcaecati laboriosam error a corporis voluptatem voluptatibus pariatur.</p>
                  <button className='bg-blue-500 px-8 py-3 rounded-full mt-3'>Learn more</button>
                </div>
              </div>
          </div>
        </div>
        <div>
          <div className='single-slide'>
              <img src={picTwo}/>
              <div className='caption'>
              <div className='lg:w-1/2 md:w-2/2 sm:w-2/2 max-sm:w-2/2 m-auto text-white'>
                  <h1 className="text-3xl mb-2 font-bold">Slider two</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur placeat natus sunt iure, qui beatae porro, labore, velit exercitationem corporis saepe deleniti. Obcaecati laboriosam error a corporis voluptatem voluptatibus pariatur.</p>
                  <button className='bg-blue-500 px-8 py-3 rounded-full mt-3'>Learn more</button>
                </div>
              </div>
          </div>
        </div>
        <div>
          <div className='single-slide'>
              <img src={picThree}/>
              <div className='caption'>
              <div className='lg:w-1/2 md:w-2/2 sm:w-2/2 max-sm:w-2/2 m-auto text-white'>
                  <h1 className="text-3xl mb-2 font-bold">Slider three</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur placeat natus sunt iure, qui beatae porro, labore, velit exercitationem corporis saepe deleniti. Obcaecati laboriosam error a corporis voluptatem voluptatibus pariatur.</p>
                  <button className='bg-blue-500 px-8 py-3 rounded-full mt-3'>Learn more</button>
                </div>
              </div>
          </div>
        </div>       
        
      </Carousel>
  )
}

export default Banner