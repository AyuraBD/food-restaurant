import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { FaBars } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

const Header = () => {

  const [open, setOpen] = useState(false);
  return (
    <header className="navbar md:px-10 sm:px-6 max-sm:px-4 lg:px-20 py-4 bg-gray-400">
      <nav className='flex justify-between items-center'>
        <Link className='logo-text' to="/">Food Restaurant</Link>
        <ul className={`${open === true ? 'sm:right-0 max-sm:right-0 sm:w-1/2 max-sm:w-1/2' : 'sm:-right-1/2 max-sm:-right-1/2'} duration-700 sm:top-16 max-sm:top-16 max-sm:right-50 sm:bg-slate-400 md:bg-transparent max-sm:bg-slate-400 sm:p-4 max-sm:p-4 lg:static md:static sm:absolute max-sm:absolute flex gap-4 lg:flex-row md:flex-row sm:flex-col max-sm:flex-col z-10`}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/categories'>Categories</NavLink></li>
          <li><NavLink to='/reservation'>Reservation</NavLink></li>
          <li><NavLink to='/OurBlog'>Our blog</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <div onClick={() => setOpen(!open)} className='flex md:hidden text-xl'>
          {
            open ? <IoMdClose></IoMdClose> :
            <FaBars></FaBars>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header