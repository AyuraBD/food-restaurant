import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Home