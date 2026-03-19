import React from 'react'
import blog from '../../assets/blog.png'
import { IoIosArrowForward } from 'react-icons/io'
import { IoPersonOutline } from 'react-icons/io5'
import { FaRegCalendarDays } from 'react-icons/fa6'

const Blog = () => {
    return (
        <div className=' container px-[15px] py-[120px] flex flex-col gap-5'>
            <div className=" text-center space-y-1.5">
                <p className='font-medium font-rubik text-[16px] leading-[28px] text-[#FF494A]'>Blog and news</p>
                <h2 className='font-bold  font-rajdhani text-[48px] leading-[60px] text-[#141414] dark:text-white w-[636px] mx-auto '>Elevating Personal Branding the
                    through Powerful Portfolios</h2>
            </div>
            <div className=" pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[17px] ">
                <div className=" rounded-[20px] border border-[#D9DDE0]">
                    <div className=" relative rounded-2xl">
                        <img className='rounded-[20px] w-full object-cover     ' src={blog} alt="" />
                        <div className=" absolute top-2.5 left-2.5 flex items-center py-1 px-3.5 rounded-2xl bg-[#F4F4F4] dark:bg-[#141414]  gap-2 ">

                            <div className=" flex items-center gap-1 text-black dark:text-white ">
                                <IoPersonOutline />
                                <p>Mesbah</p>
                            </div>
                            <div className=" flex items-center gap-1 text-black dark:text-white">
                                <FaRegCalendarDays />
                                <p>Mesbah</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-[30px] flex flex-col gap-7.5 ">
                        <p className='font-bold font-rajdhani text-[24px] leading-[30px] text-[#141414] dark:text-white'>Let’s bring your ideas to life!
                            Contact me, and let’s</p>
                        <div className=" flex items-center gap-1">
                            <p className='font-normal font-rubik text-[13px] leading-[27px] text-[#5D6570] dark:text-[#9F9F9F]'>Read More </p>
                            <IoIosArrowForward className='text-[#5D6570] ' />

                        </div>
                    </div>
                </div>
                <div className=" rounded-[20px] border border-[#D9DDE0]">
                    <div className=" relative rounded-2xl">
                        <img className='rounded-[20px] w-full object-cover' src={blog} alt="" />
                        <div className=" absolute top-2.5 left-2.5 flex items-center py-1 px-3.5 rounded-2xl bg-[#F4F4F4] dark:bg-[#141414] gap-2 ">

                            <div className=" flex items-center gap-1 dark:text-white">
                                <IoPersonOutline />
                                <p>Mesbah</p>
                            </div>
                            <div className=" flex items-center gap-1 dark:text-white">
                                <FaRegCalendarDays />
                                <p>Mesbah</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-[30px] flex flex-col gap-7.5 ">
                        <p className='font-bold font-rajdhani text-[24px] leading-[30px] text-[#141414] dark:text-white'>Let’s bring your ideas to life!
                            Contact me, and let’s</p>
                        <div className=" flex items-center gap-1">
                            <p className='font-normal font-rubik text-[13px] leading-[27px] text-[#5D6570] dark:text-[#9F9F9F]'>Read More </p>
                            <IoIosArrowForward className='text-[#5D6570] ' />

                        </div>
                    </div>
                </div>
                <div className=" rounded-[20px] border border-[#D9DDE0]">
                    <div className=" relative rounded-2xl">
                        <img className='rounded-[20px]  w-full object-cover    ' src={blog} alt="" />
                        <div className=" absolute top-2.5 left-2.5 flex items-center py-1 px-3.5 rounded-2xl bg-[#F4F4F4] dark:bg-[#141414]  gap-2 ">

                            <div className=" flex items-center gap-1 dark:text-white">
                                <IoPersonOutline />
                                <p>Mesbah</p>
                            </div>
                            <div className=" flex items-center gap-1 dark:text-white">
                                <FaRegCalendarDays />
                                <p>Mesbah</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-[30px] flex flex-col gap-7.5 ">
                        <p className='font-bold font-rajdhani text-[24px] leading-[30px] text-[#141414] dark:text-white'>Let’s bring your ideas to life!
                            Contact me, and let’s</p>
                        <div className=" flex items-center gap-1">
                            <p className='font-normal font-rubik text-[13px] leading-[27px] text-[#5D6570] dark:text-[#9F9F9F] text-black'>Read More </p>
                            <IoIosArrowForward className='text-[#5D6570] dark:text-[#9F9F9F] ' />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Blog
