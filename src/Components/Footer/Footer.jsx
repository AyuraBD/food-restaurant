import React from 'react'
import { CiFacebook, CiInstagram, CiYoutube } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* Footer Started */}
      <footer className='lg:px-20 md:px-12 sm:px-8 max-sm:px-4 bg-slate-500'>
        <div className='top-footer py-4 text-center'>
          <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>
          <div className='flex justify-center items-center gap-4 text-2xl'>
            <CiFacebook></CiFacebook>
            <CiInstagram></CiInstagram>
            <CiYoutube></CiYoutube>
          </div>
        </div>
        <div className='bottom-footer text-center border-t-2 py-4'>
          <p>Copyright- All right reserved by <Link to='/'>Food Restaurant</Link></p>
        </div>
      </footer>
    </>
  )
}

export default Footer