import React from 'react'

const SkillArea = () => {
    return (
        <div className='container  '>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 ">
                <div className="mt-7.5 flex flex-col gap-7.5 items-center ">
                    <h1 className='font-bold font-rajdhani text-[32px] leading-[42px] '>Design Skill </h1>
                    <div className="">
                        <div className="flex items-center justify-between">
                            <p className='font-normal  font-rubik text-[14px] leading-[17.5px] '>PHOTOSHOT</p>
                            <p className='font-normal  font-rubik text-[14px] leading-[24.5px] '>100%</p>
                        </div>
                        <div className="w-full h-[1.5px] bg-[#F4F4F4] rounded-[10px] overflow-hidden  ">
                            <div className="bg-red-500 w-full h-full transform-all duration-1000  ease-out "></div>
                        </div>
                     

                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default SkillArea