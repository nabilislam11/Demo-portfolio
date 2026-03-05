import React from 'react'
import banner from "../../assets/banner.png"
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
const Banner = () => {
    return (
        <div>
            <div className="  flex justify-between items-start">
                <div className=" w-[25%] pt-[192px] space-y-5">
                    <div className=" ">
                        <p className='font-rajdhani font-bold  text-[28px] leading-[38px]' >Hello i’m</p>
                        <h2 className='font-rajdhani font-bold  text-[90px] leading-[103.5px]' >Brooklyn
                            Simmons</h2>
                    </div>
                    <div className="flex items-center rounded-2xl  py-3 pl-[28px] pr-[30px] bg-[#FF494A] w-[200px] ">
                        <p>View Portfolio</p>
                        <FaArrowRightLong className='text-white' />
                    </div>

                </div>


                <div className="  items-center flex justify-center  z-[-5]">
                    <img src={banner} alt="" />
                </div>
                <div className=" w-[25%] pt-[192px] flex flex-col gap-10 ">
                    <div className=" space-y-5 ">
                        <p className='font-rubik  font-normal   text-[16px] leading-[30px]' >About Me</p>
                        <h2 className='font-rubik  font-normal   text-[16px] leading-[30px]' >A personal <span className='text-[#FF494A]'>portfolio</span> is a collection of to
your work, that is achievements, and a
skills that <span className='text-[#FF494A]'>web design</span>  highlights in your</h2>
                    </div>
                    <div className="space-y-2.5 ">
                        <p className='font-rubik font-normal text-[16px]  leading-[30px] '> Find me on</p>
                        
<div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 ">
          <FaInstagram />
        </div>
        <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 ">
          <FaLinkedinIn />
        </div>
        <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 ">
          <FaTwitter />
        </div>
        <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 ">
        <FaFacebookF />
        </div>
      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner