import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import TpmService from '../components/tpm-service/TpmService'
import Counter from '../components/counter/Counter'
import LatestService from '../components/latest-service/LatestService'
import SkillArea from '../components/skill-area/SkillArea'

const Home = () => {
  return (
    <>
      <div>

        <Navbar></Navbar>
        <Banner></Banner>
        <TpmService></TpmService>
        <Counter></Counter>
        <LatestService></LatestService>
        <SkillArea></SkillArea>
      </div>


    </>
  )
}

export default Home