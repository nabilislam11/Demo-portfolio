import React from 'react'
import service from "../../assets/service.png"
const LatestService = () => {
    return (
        <div className=' container px-3 '>
            <div className="flex flex-col gap-8">
                <div className="text-center  flex flex-col items-center justify-between  gap-1  ">
                    <p className='font-rubik  font-medium  text-[16px] leading-[28px] text-[#FF494A] '>Latest Service</p>
                    <h1 className='font-rajdhani font-bold text-[48px] leading-[60px] text-[#141414] '>Inspiring The World One Project</h1>
                    <p className='w-[50%] font-rubik  font-normal text-[16px] leading-[26px] text-[#5D6570] '>Business consulting consultants provide expert advice and guida businesses to help
                        them improve their performance, efficiency, and organizational</p>
                </div>
                <div className="flex justify-between items-center ">
                    <div className=" mt-[30px] "></div>
                    <div className=" mt-[30px] ">
                        <img src={service} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LatestService
