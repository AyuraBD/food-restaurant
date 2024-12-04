import React from 'react'
import aboutImg from '../../assets/about.jpg'

const About = () => {
  return (
    <>
      <div className='grid lg:grid-cols-2 gap-4 lg:px-20 md:px-12 sm:px-8 max-sm:px-4 py-10'>
        {/* About left */}
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl mb-3 font-bold'>Where Flavor Meets Excellence!</h1>
          <p className='mb-2'>At Food Restaurant, we believe that every meal tells a story. Nestled in the heart of Chattogram, we are more than just a place to eat — we are a destination for food lovers seeking unforgettable dining experiences.</p>
          <p className='mb-2'>Our chefs craft each dish with passion, blending fresh, locally-sourced ingredients with authentic recipes that celebrate the vibrant culinary traditions of Chattogram. Whether you're here for a casual lunch, a romantic dinner, or a special celebration, we promise warm hospitality and flavors that will leave a lasting impression.</p>
          <p className='mb-2'>Come and savor the essence of good food, great company, and cherished moments at Food . We can’t wait to serve you!</p>
        </div>
        {/* About right */}
        <div>
          <img className='w-full' src={aboutImg} alt="" />
        </div>
      </div>      
    </>
  )
}

export default About