import React from 'react'
import banner from "../../assets/banner.png"
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
const Banner = () => {
    return (
        <div className="container px-3 relative dark:bg-[#141414] ">

            <div className="flex justify-between items-start pb-[88px]">
                <div className=" w-[25%] pt-[192px] space-y-5">
                    <div className=" ">
                        <p className='font-rajdhani font-bold  text-[28px] leading-[38px] text-black dark:text-white ' >Hello i’m</p>
                        <h2 className='font-rajdhani font-bold  text-[90px] leading-[103.5px] text-black dark:text-white' >Brooklyn
                            Simmons</h2>
                    </div>
                    <div className="flex items-center rounded-[500px] pl-[28px] pr-[30px] bg-[#FF494A] w-[200px] gap-1.5  ">
                        <p className='font-rubik  font-medium   text-[16px] leading-[60px] text-white'>View Portfolio</p>
                        <FaArrowRightLong className='text-white' />
                    </div>

                </div>
                <div className="    items-center flex justify-center  z-[10]">
                    <img src={banner} alt="" />
                </div>
                <div className=" w-[25%] pt-[192px] flex flex-col gap-10 ">
                    <div className=" space-y-5 ">
                        <p className='font-rubik  font-normal   text-[16px] leading-[30px]  text-black dark:text-white ' >About Me</p>
                        <h2 className='font-rubik  font-normal   text-[16px] leading-[30px] text-black dark:text-white' >A personal <span className='text-[#FF494A]'>portfolio</span> is a collection of to
                            your work, that is achievements, and a
                            skills that <span className='text-[#FF494A]'>web design</span>  highlights in your</h2>
                    </div>
                    <div className="space-y-2.5 ">
                        <p className='font-rubik font-normal text-[16px]  leading-[30px] text-black dark:text-white'> Find me on</p>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 dark:bg-white/10  text-black dark:text-white ">
                                <FaInstagram />
                            </div>
                            <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 dark:bg-white/10  text-black dark:text-white ">
                                <FaLinkedinIn />
                            </div>
                            <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 dark:bg-white/10  text-black dark:text-white  ">
                                <FaTwitter />
                            </div>
                            <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 dark:bg-white/10  text-black dark:text-white">
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" " >
                <h2 className=' z-[1]  absolute top-[580px] left-30 text-transparent opacity-60  select-none font-rajdhani font-bold text-[212.9px] leading-[244.8px] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:black] dark:[-webkit-text-stroke-color:white]    '>WEB DESIGN</h2>
                <h2 className=' z-[50]  absolute top-170 left-70  font-rajdhani font-bold text-[150px] leading-[172.5px] [-webkit-text-stroke-width:3px] [-webkit-text-stroke-color:#FF494A]  text-transparent translate-y-6    '>WEB DESIGN</h2>
            </div>
        </div>
    )
}

export default Banner