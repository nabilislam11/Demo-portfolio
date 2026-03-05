import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import TpmService from '../components/tpm-service/TpmService'

const Home = () => {
  return (
    <>
      <div>

        <Navbar></Navbar>
        <Banner></Banner>
        <TpmService></TpmService>
      </div>


    </>
  )
}

export default Home