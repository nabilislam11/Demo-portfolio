import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import TpmService from '../components/tpm-service/TpmService'
import Counter from '../components/counter/Counter'

const Home = () => {
  return (
    <>
      <div>

        <Navbar></Navbar>
        <Banner></Banner>
        <TpmService></TpmService>
        <Counter></Counter>
      </div>


    </>
  )
}

export default Home