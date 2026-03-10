import React from 'react'
import expert from "../../assets/expert.png"
const Expeiences = () => {
    return (
        <div className=' container pt-[43px] px-[15px] '>
            <div className="flex items-center justify-between">
                <div className="mt-[30px] ">
                    <div className=" pr-[15px]">
                        <img src={expert} alt="" />
                    </div>

                </div>
                <div className="mt-[30px] ml-[15px] ">
                    <div className="flex flex-col gap-8 pl-[40px] pr-[138px] ">
                        <div className="">
                            <h2 className='font-bold font-rajdhani text-3xl text-[#141414] leading-11 ' >Experiences </h2>
                        </div>
                        <div className="flex flex-col  items-center">
                            <q className=' font-rubik font-medium text-[16px] leading-[28px] text-[#FF494A] '>experience</q>
                            <h2>Fatima Asrafy</h2>
                            <h3>UI/UX Designer</h3>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Expeiences
