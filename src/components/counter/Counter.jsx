import React from 'react'

const Counter = () => {
    return (
        <div className='container px-3 pb-[120px] '>
            <div className="flex justify-between items-center  ">
                <div className=" w-[50%] bg-[#F4F4F4] dark:bg-[#141414] pt-[36px] px-[52px] pb-[51px] rounded-[20px] space-y-3 ">
                    <div className="flex items-center ">
                        <h2 className='pl-[21px] font-inter  font-bold  text-[167px] leading-[187.5px] text-[#FF494A] '> 25 </h2>
                        <div className=" py-[39px] pr-[51px] pl-[44px] ">
                            <h2 className='font-rajdhani font-bold  text-[48.1px] leading-[62.6px]  text-black dark:text-white'> Years Of
                                experience </h2>
                        </div>
                    </div>
                    <p className='font-rubik  font-normal text-[16px] leading-[26px] text-black dark:text-[#FFFFFF]'>Business consulting consultants provide expert advice and guida the
                        a businesses to help theme their performance efficiency</p>
                </div>
                <div className="w-[50%] grid grid-cols-1 md:grid-cols-2 gap-8  mt-[32px]  ml-[17px]  ">
                    <div className="py-[35px] px-[17px]  border border-b-[#FF494A] border-t-[#141414] border-l-[#141414] border-r-[#FF494A] bg-[#F4F4F4] dark:bg-[#141414] shadow-[2px_2px_0px_0px_#FF494A] space-y-1  rounded-[20px]  text-center flex flex-col justify-between items-center ">
                        <div className="flex  ">
                            <p className='font-rajdhani  font-bold  text-[48px] leading-[60px] text-black dark:text-white'> 10</p>
                            <p className='font-rajdhani  font-bold  text-[48px] leading-[60px] text-black dark:text-[#9F9F9F]'> K+</p>

                        </div>
                        <p className='font-rubik  font-normal text-[16px] leading-[30px] text-[#5D6570] '>Our Natural Products</p>

                    </div>
                    <div className="py-[30px] px-[15px] bg-[#F4F4F4]  space-y-1  rounded-[20px]  text-center flex flex-col  justify-between items-center   border border-b-[#FF494A] border-t-[#F4F4F4] border-l-[#F4F4F4] border-r-[#FF494A] bg-[#F4F4F4] shadow-[2px_2px_0px_0px_#FF494A] bg-[#F4F4F4]">
                        <div className="flex ">
                            <p className='font-rajdhani  font-bold  text-[48px] leading-[60px]'> 20</p>
                            <p className='font-rajdhani  font-bold  text-[48px] leading-[60px]'> K+</p>

                        </div>
                        <p className='font-rubik  font-normal text-[16px] leading-[30px] text-[#5D6570] '>Our Project Complete</p>

                    </div>
                    <div className="py-[30px] px-[15px] bg-[#F4F4F4]  space-y-1  rounded-[20px]  text-center flex flex-col  justify-between items-center   border border-b-[#FF494A]  border-t-[#141414] border-l-[#141414] border-r-[#FF494A] bg-[#F4F4F4] dark:bg-[#141414] shadow-[2px_2px_0px_0px_#FF494A] bg-[#F4F4F4] ">
                        <div className="flex ">
                            <p className='font-rajdhani  font-bold  text-[48px] leading-[60px] text-black dark:text-white'> 10</p>
                            <p className='font-rajdhani  font-bold  text-[48px] leading-[60px]'> K+</p>

                        </div>
                        <p className='font-rubik  font-normal text-[16px] leading-[30px] text-[#5D6570] '>Our Natural Products</p>

                    </div>
                    <div className="py-[30px] px-[15px] bg-[#F4F4F4]  space-y-1  rounded-[20px]  text-center flex flex-col  justify-between items-center  border border-b-[#FF494A] border-t-[#F4F4F4] border-l-[#F4F4F4] border-r-[#FF494A] bg-[#F4F4F4] shadow-[2px_2px_0px_0px_#FF494A] bg-[#F4F4F4] ">
                        <div className="flex ">
                            <p className='font-rajdhani  font-bold  text-[48px] leading-[60px]'> 20</p>
                            <p className='font-rajdhani  font-bold  text-[48px] leading-[60px]'> K+</p>

                        </div>
                        <p className='font-rubik  font-normal text-[16px] leading-[30px] text-[#5D6570] '>Our Project Complete</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
