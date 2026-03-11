import React from 'react'
import expert from "../../assets/expert.png"
const Expeiences = () => {
    return (
        <div className=' container pt-[43px] px-[15px] '>
            <div className="flex  justify-between mt-[30px]">
                <div className="w-[50%]  ">
                    <div className=" pr-[15px]">
                        <img src={expert} alt="" />
                    </div>

                </div>
                <div className="w-[50%] mt-[15px] ml-[15px] ">
                    <div className="flex flex-col justify-between gap-8 pl-[40px] pr-[138px] ">
                        <div className="">
                            <h2 className='font-bold font-rajdhani text-3xl text-[#141414] leading-[11px] ' >Experiences </h2>
                        </div>
                        <div className="flex flex-col">
                          <p className='font-rubik font-medium text-[16px] leading-[28px] text-[#FF494A]'>experiences</p>
                            <h2 className='font-rajdhani font-bold  text-[24px] leading-[30px] text-[#141414]'>Fatima Asrafy</h2>
                            <h3 className='font-rajdhani font-medium text-[18px] leading-[27px] text-[#141414] pt-[6px] '>UI/UX Designer</h3>
                              <p className='font-rubik font-normal  text-[16px] leading-[30px] text-[#5D6570] pt-[16px] '>Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum desi dolore eu fugiat nulla pariatu Duis aute irure</p>
                        </div>
                             <div className="flex flex-col pt-[18px]">
                          <p className='font-rubik font-medium text-[16px] leading-[28px] text-[#FF494A]'>experiences</p>
                            <h2 className='font-rajdhani font-bold  text-[24px] leading-[30px] text-[#141414]'>Fatima Asrafy</h2>
                            <h3 className='font-rajdhani font-medium text-[18px] leading-[27px] text-[#141414] pt-[6px] '>UI/UX Designer</h3>
                              <p className='font-rubik font-normal  text-[16px] leading-[30px] text-[#5D6570] pt-[16px] '>Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum desi dolore eu fugiat nulla pariatu Duis aute irure</p>
                        </div>
                      
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Expeiences
