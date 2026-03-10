import React from 'react'
import service from "../../assets/service.png"
const LatestService = () => {
    return (
        <div className=' container px-[15px] pt-[120px] '>
            <div className="flex flex-col gap-8">
                <div className="text-center  flex flex-col items-center justify-between  gap-1  ">
                    <p className='font-rubik  font-medium  text-[16px] leading-[28px] text-[#FF494A] '>Latest Service</p>
                    <h1 className='font-rajdhani font-bold text-[48px] leading-[60px] text-[#141414] '>Inspiring The World One Project</h1>
                    <p className='w-[50%] font-rubik  font-normal text-[16px] leading-[26px] text-[#5D6570] '>Business consulting consultants provide expert advice and guida businesses to help
                        them improve their performance, efficiency, and organizational</p>
                </div>
                <div className="flex justify-between items-center ">
                    <div className=" w-[50%] mt-[32px]  flex flex-col  justify-between items-center gap-5 ">

                        <div className="  py-[34px] px-[38px] bg-[#F4F4F4] rounded-[20px]  flex flex-col gap-5.5 ">
                            <div className="flex items-center  gap-3.5 ">
                                <p>01.</p>
                                <p className='font-bold font-rajdhani text-[24px] leading-[30px]  '>A Portfolio of Creativity</p>
                            </div>
                            <p className='font-normal  font-rubik  text-[16px] leading-[26px] '>Business consulting consultants provide expert advice and guida the a
                                businesses to help theme their performance efficiency</p>
                        </div>
                        <div className="  py-[34px] px-[38px] bg-[#F4F4F4] rounded-[20px]  flex flex-col gap-5.5 ">
                            <div className="flex items-center  gap-3.5 ">
                                <p>01.</p>
                                <p className='font-bold font-rajdhani text-[24px] leading-[30px]  '>A Portfolio of Creativity</p>
                            </div>
                            <p className='font-normal  font-rubik  text-[16px] leading-[26px] '>Business consulting consultants provide expert advice and guida the a
                                businesses to help theme their performance efficiency</p>
                        </div>
                        <div className="  py-[34px] px-[38px] bg-[#F4F4F4] rounded-[20px]  flex flex-col gap-5.5 ">
                            <div className="flex items-center  gap-3.5 ">
                                <p>01.</p>
                                <p className='font-bold font-rajdhani text-[24px] leading-[30px]  '>A Portfolio of Creativity</p>
                            </div>
                            <p className='font-normal  font-rubik  text-[16px] leading-[26px] '>Business consulting consultants provide expert advice and guida the a
                                businesses to help theme their performance efficiency</p>
                        </div>

                    </div>
                    <div className=" w-[50%] mt-[32px] pl-[85px]  ">
                        <img src={service} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LatestService
