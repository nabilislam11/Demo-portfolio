import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ThemeToggle from '../components/themetoggle/ThemeToggle'
import Banner from '../components/banner/Banner'

const Home = () => {
  return (
    <>
    <div className=" container">

  <Navbar></Navbar>
  <Banner></Banner>

    </div>
  
  
   </>
  )
}

export default Home