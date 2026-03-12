import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoCheckmarkCircle } from 'react-icons/io5'

const PricePlan = () => {
    return (
        <div className=' container py-[120.5px] px-[15px] '>
            <div className="flex flex-col gap-5">

                <div className="flex flex-col gap-1.5 text-center ">

                    <p className='font-rubik font-medium text-[16px] leading-7 text-[#FF494A]'>My Price plan</p>
                    <p className='font-rajdhani  font-bold  text-[48px] leading-[48px] text-[#141414]'>My Price plan</p>
                    <h2 className='font-rajdhani font-bold text-[48/px] leading-[60px] text-[#141414]'>Enhancing Collaboration
                        between Remote</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    <div className="mt-[30px] p-[38px]  rounded-[20px] bg-[#F4F4F4] flex flex-col gap-0.5 ">
                        <p className='font-bold  font-rajdhani text-[18px] leading-[27px] text-[#141414]'>Starter</p>
                        <h1 className='font-bold  font-rajdhani text-[48px] leading-[60px] text-[#141414]'>$ 5.00</h1>
                        <p className='font-bold  font-rajdhani text-[18px] leading-[27px] text-[#141414] pt-[3px] pb-[26px] '>Per Month</p>
                        <div className="flex flex-col  gap-[17px]  pt-[43px] pb-[38px] ">
                            <div className=" flex items-center gap-2.5 py-[2px]  ">
                                <IoCheckmarkCircle className='text-red-500 ' />
                                <p className='font-normal  font-rubik  text-[16px] leading-[24px] text-[#5D6570]'>5 Social Media Account</p>
                            </div>
                            <div className=" flex gap-2.5 py-[2px]  ">
                                <IoCheckmarkCircle className='text-red-500  ' />
                                <p className='font-normal  font-rubik  text-[16px] leading-[24px] text-[#5D6570]'>5 Social Media Account</p>
                            </div>
                            <div className=" flex items-center gap-2.5 py-[2px]  ">
                                <IoCheckmarkCircle className='text-red-500  ' />
                                <p className='font-normal  font-rubik  text-[16px] leading-[24px] text-[#5D6570]'>5 Social Media Account</p>
                            </div>
                        </div>
                       
                            {/* <button className=' font-medium font-rubik  flex justify-center   items-center gap-1.5 text-[14px] leading-[47px] border border-[#D9DDE0] rounded-full text-[#141414]  px-[12px]'>Get Started <span><IoMdArrowRoundForward /></span></button> */}
                            <div className="">
                                <button className='px-6.25  flex items-center gap-1.5 border border-[#D9DDE0] leading-12 rounded-full '>Get Started <IoMdArrowRoundForward /> </button>
                            </div>
                            


                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricePlan