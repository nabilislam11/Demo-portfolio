import React from 'react'

const SkillArea = () => {
    return (
        <div className='container px-[15px] pt-[90px] '>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 ">
                <div className=" mt-7.5 flex flex-col gap-7.5  ">
                    <h1 className='font-bold font-rajdhani text-[32px] leading-[42px] text-black  dark:text-white '>Design Skill </h1>
                    <div className=" flex flex-col gap-4 text-black dark:text-[#FFFFFF]   ">
                        <div className="flex items-center justify-between ">
                            <p className='font-normal  font-rubik text-[14px] leading-[17.5px] '>PHOTOSHOT</p>
                            <p className='font-normal  font-rubik text-[14px] leading-[24.5px] '>100%</p>
                        </div>
                        <div className="w-full h-1.5 bg-[#F4F4F4] rounded-[10px] overflow-hidden  ">
                            <div className="bg-red-500 w-full h-full transform-all duration-1000  ease-out "></div>
                        </div>


                    </div>
                    <div className=" flex flex-col gap-4 text-black dark:text-[#FFFFFF]  ">
                        <div className="flex items-center justify-between ">
                            <p className='font-normal  font-rubik text-[14px] leading-[17.5px] '>FIGMA</p>
                            <p className='font-normal  font-rubik text-[14px] leading-[24.5px] '>95%</p>
                        </div>
                        <div className="w-full h-1.5 bg-[#F4F4F4] rounded-[10px] overflow-hidden  ">
                            <div className="bg-red-500 w-[95%] h-full transform-all duration-1000  ease-out "></div>
                        </div>


                    </div>
                    <div className=" flex flex-col gap-4  text-black dark:text-[#FFFFFF] ">
                        <div className="flex items-center justify-between ">
                            <span className='font-normal  font-rubik text-[14px] leading-[17.5px] '>ADOBE XD</span>
                            <span className='font-normal  font-rubik text-[14px] leading-[24.5px] '>60%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F4F4F4] rounded-[10px] overflow-hidden  ">
                            <div className="bg-red-500 w-[60%] h-full transform-all duration-1000  ease-out "></div>
                        </div>


                    </div>
                    <div className=" flex flex-col gap-4 ">
                        <div className="flex items-center justify-between ">
                            <span className='font-normal  font-rubik text-[14px] leading-[17.5px] '>ADOBE ILLUSTRATOR</span>
                            <span className='font-normal  font-rubik text-[14px] leading-[24.5px] '>70%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F4F4F4] rounded-[10px] overflow-hidden  ">
                            <div className="bg-red-500 w-[70%] h-full transform-all duration-1000  ease-out "></div>
                        </div>


                    </div>
                </div>
                <div className=" mt-7.5 flex flex-col gap-7.5  ">
                    <h1 className='font-bold font-rajdhani text-[32px] leading-[42px] text-black dark:text-white '>Development Skill  </h1>
                    <div className=" flex flex-col gap-4 text-black dark:text-[#FFFFFF]  ">
                        <div className="flex items-center justify-between ">
                            <p className='font-normal  font-rubik text-[14px] leading-[17.5px] '>PHOTOSHOT</p>
                            <p className='font-normal  font-rubik text-[14px] leading-[24.5px] '>100%</p>
                        </div>
                        <div className="w-full h-1.5 bg-[#F4F4F4] rounded-[10px] overflow-hidden  ">
                            <div className="bg-red-500 w-full h-full transform-all duration-1000  ease-out "></div>
                        </div>


                    </div>
                    <div className=" flex flex-col gap-4 text-black dark:text-[#FFFFFF] ">
                        <div className="flex items-center justify-between ">
                            <p className='font-normal  font-rubik text-[14px] leading-[17.5px] '>FIGMA</p>
                            <p className='font-normal  font-rubik text-[14px] leading-[24.5px] '>95%</p>
                        </div>
                        <div className="w-full h-1.5 bg-[#F4F4F4] rounded-[10px] overflow-hidden  ">
                            <div className="bg-red-500 w-[95%] h-full transform-all duration-1000  ease-out "></div>
                        </div>


                    </div>
                    <div className=" flex flex-col gap-4 text-black dark:text-[#FFFFFF]  ">
                        <div className="flex items-center justify-between ">
                            <span className='font-normal  font-rubik text-[14px] leading-[17.5px] '>ADOBE XD</span>
                            <span className='font-normal  font-rubik text-[14px] leading-[24.5px] '>60%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F4F4F4] rounded-[10px] overflow-hidden  ">
                            <div className="bg-red-500 w-[60%] h-full transform-all duration-1000  ease-out "></div>
                        </div>


                    </div>
                    <div className=" flex flex-col gap-4  text-black dark:text-[#FFFFFF] ">
                        <div className="flex items-center justify-between ">
                            <span className='font-normal  font-rubik text-[14px] leading-[17.5px] '>ADOBE ILLUSTRATOR</span>
                            <span className='font-normal  font-rubik text-[14px] leading-[24.5px] '>70%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#F4F4F4] rounded-[10px] overflow-hidden  ">
                            <div className="bg-red-500 w-[70%] h-full transform-all duration-1000  ease-out "></div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillArea