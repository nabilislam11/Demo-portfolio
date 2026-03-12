import React from 'react'
import project from "../../assets/project.png"
import { GoArrowUpRight } from 'react-icons/go'
import MySkill from '../my-skill/MySkill'

const LatestPortfolio = () => {
  return (
    <div className='bg-[#F4F4F4] '>
      <div className="container  py-[100px]">
        <div className=" flex flex-col gap-1.5 text-center items-center ">
          <p className='font-normal font-rubik text-[16px] leading-[28px] text-[#FF494A]'>Latest Portfolio</p>
          <h2 className='font-bold  font-rajdhani  text-[48px] leading-[60px] text-[#141414]  '>Transforming Ideas into Exceptional</h2>
          <p className='font-normal font-rubik text-[18px] leading-[26px] text-[#5D6570] w-[635px]  '>Business consulting consultants provide expert advice and guida businesses to help
them improve their performance, efficiency, and organizational</p>
        </div>
        <div className="mt-[20px] grid grid-cols-1  md:grid-cols-2 items-end   ">
          <div className=" pt-[40px] px-[25px] pb-[90px] flex flex-col gap-8 ">
            <div className="p-[20px] rounded-[20px] border border-[#D9DDE0]"  >
              <img src={project} alt="" />

            </div>
            <div className="flex justify-between   items-center">
              <div className="flex flex-col gap-2.5 ">
                <h2 className='font-rajdhani  font-bold  text-[24px] leading-[30px] text-[#141414]'>My Journey as a Creator</h2>
                <p className='font-rubik font-normal text-[16px] leading-[30px] text-[#5D6570]' >Development Coaches</p>
              </div>
              <div className="py-[14px] px-[15px] rounded-[10px] border border-[#D9DDE0] ">
                <GoArrowUpRight />

              </div>
            </div>
          </div>
             <div className=" pt-[100px] px-[25px] flex flex-col gap-8 ">
            <div className="p-[20px] rounded-[20px] border border-[#D9DDE0]"  >
              <img src={project} alt="" />

            </div>
            <div className="flex justify-between   items-center">
              <div className="flex flex-col gap-2.5 ">
                <h2 className='font-rajdhani  font-bold text-[24px] leading-[30px] text-[#141414]'>My Journey as a Creator</h2>
                <p className='font-rubik font-normal text-[16px] leading-[30px] text-[#5D6570]' >Development Coaches</p>
              </div>
              <div className="py-[14px] px-[15px] rounded-[10px] border border-[#D9DDE0] ">
                <GoArrowUpRight />

              </div>
            </div>
          </div>
          <div className=" pt-[40px] px-[25px] pb-[90px] flex flex-col gap-8 ">
            <div className="p-[20px] rounded-[20px] border border-[#D9DDE0]"  >
              <img src={project} alt="" />

            </div>
            <div className="flex justify-between   items-center">
              <div className="flex flex-col gap-2.5 ">
                <h2 className='font-rajdhani  font-bold  text-[24px] leading-[30px] text-[#141414]'>My Journey as a Creator</h2>
                <p className='font-rubik font-normal text-[16px] leading-[30px] text-[#5D6570]' >Development Coaches</p>
              </div>
              <div className="py-[14px] px-[15px] rounded-[10px] border border-[#D9DDE0] ">
                <GoArrowUpRight />

              </div>
            </div>
          </div>
             <div className=" pt-[100px] px-[25px] flex flex-col gap-8 ">
            <div className="p-[20px] rounded-[20px] border border-[#D9DDE0]"  >
              <img src={project} alt="" />

            </div>
            <div className="flex justify-between   items-center">
              <div className="flex flex-col gap-2.5 ">
                <h2 className='font-rajdhani  font-bold  text-[24px] leading-[30px] text-[#141414]'>My Journey as a Creator</h2>
                <p className='font-rubik font-normal text-[16px] leading-[30px] text-[#5D6570]' >Development Coaches</p>
              </div>
              <div className="py-[14px] px-[15px] rounded-[10px] border border-[#D9DDE0] ">
                <GoArrowUpRight />

              </div>
            </div>
          </div>
        </div>
<MySkill></MySkill>
      </div>
        
    </div>
  )
}

export default LatestPortfolio