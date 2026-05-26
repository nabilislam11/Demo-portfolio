import React from 'react'
import expert from "../../assets/expert.png"
const Expeiences = () => {
    return (
        <div className=' container pt-[20px] md:pt-[43px] px-[15px] '>
            <div className="flex flex-col md:flex-row  justify-between mt-[30px]">
                <div className="md:w-[50%]  ">
                    <div className=" md:pr-[15px]">
                        <img src={expert} alt="" />
                    </div>

                </div>
                <div className=" md:w-[50%] mt-[35px] md:mt-[15px] md:ml-[15px] ">
                    <div className="flex flex-col justify-between gap-8 md:pl-[40px] md:pr-[138px] ">
                        <div className="">
                            <h2 className='font-bold font-rajdhani text-3xl text-[#141414] leading-[11px] dark:text-white ' >Experiences </h2>
                        </div>
                        <div className="flex flex-col">
                            <p className='font-rubik font-medium text-[16px] leading-[28px] text-[#FF494A]'>experiences</p>
                            <h2 className='font-rajdhani font-bold  text-[24px] leading-[30px] text-[#141414] dark:text-[#FFFFFF] '>Fatima Asrafy</h2>
                            <h3 className='font-rajdhani font-medium text-[18px] leading-[27px] text-[#141414] dark:text-[#FFFFFF]  pt-[6px] '>UI/UX Designer</h3>
                            <p className='font-rubik font-normal  text-[16px] leading-[30px] text-[#5D6570] dark:text-[#9F9F9F] pt-[16px] '>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum desi dolore eu fugiat nulla pariatu Duis aute irure</p>
                        </div>
                        <div className="flex flex-col pt-[30px] md:pt-[18px]">
                            <p className='font-rubik font-medium text-[16px] leading-[28px] text-[#FF494A] dark:text-[#FFFFFF] '>experiences</p>
                            <h2 className='font-rajdhani font-bold  text-[24px] leading-[30px] text-[#141414] dark:text-[#FFFFFF] '>Fatima Asrafy</h2>
                            <h3 className='font-rajdhani font-medium text-[18px] leading-[27px] text-[#141414] dark:text-[#FFFFFF]  pt-[6px] '>UI/UX Designer</h3>
                            <p className='font-rubik font-normal  text-[16px] leading-[30px] text-[#5D6570] pt-[16px] dark:text-[#9F9F9F] '>Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum desi dolore eu fugiat nulla pariatu Duis aute irure</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Expeiences
