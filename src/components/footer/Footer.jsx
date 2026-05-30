import React from 'react'
import logo from '../../assets/logo.png'
import logodark from '../../assets/logodark.png'
import { HiOutlineMail } from 'react-icons/hi'
const Footer = () => {
    return (
        <div className=' bg-[#F4F4F4]  dark:bg-[#141414]'>
            <div className="container px-[15px] md:pt-[90px] md:pb-[120px] ">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-[30%] pt-7.5 flex flex-col  gap-5.5 ">
                        <div>
                            <img src={logo} alt="logo" className="block dark:hidden" />
                            <img src={logodark} alt="logo-dark" className="hidden dark:block" />
                        </div>
                        <h2 className=' md:pb-[18px] font-normal font-rajdhani text-[20px] md:text-[50px] leading-5 md:leading-[60px] ' ><span className='font-bold font-rajdhani text-[20px] md:text-[50px]  leading-5 md:leading-[60px]  text-[#141414]  dark:text-white '>Get Ready </span>To
                            Create Great</h2>
                        <div className="flex items-center justify-between pb-[10px] md:pb-[20px] border-b-1 border-[#D9DDE0]  dark:border-b-1 border-[#FFFFFF]/8   ">
                            <input className=' border-b-1 border-[#5D6570] text-[#5D6570] dark:text-[#FFFFFF] outline-none' type="email" placeholder='Email Adress' />
                            <HiOutlineMail className='size-4 text-[#FFFFFF]  ' />
                        </div>

                    </div>
                    <div className="md:w-[20%] pt-2.5 md:pt-7.5 md:pl-[95px] md:pr-[15px] md:pb-[18px] flex flex-col gap-[40px] ">
                        <h2 className='font-bold font-rajdhani text-[24px] leading-[30px] text-[#141414] dark:text-[#FFFFFF] '>Quick Link</h2>
                        <ul className=' flex  flex-col gap-2 '>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">About Me</a></li>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">Service</a></li>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">Contact Us</a></li>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">Blog Post</a></li>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">Pricing</a></li>
                        </ul>

                    </div>
                    <div className="md:w-[20%] md:px-[15px] pt-7.5 flex flex-col  gap-5 md:gap-[40px] ">
                        <h1 className='font-rajdhani font-bold text-[24px] leading-7.5 text-[#141414] dark:text-[#FFFFFF] '>Contact</h1>
                        <div className=" flex flex-col gap-5.5">
                            <div className=" flex gap-2.5  items-center">
                                <div className="p-2.5 rounded-full border border-[#D9DDE0] flex items-center justify-between  dark:border dark:border-[#FFFFFF]/8 ">
                                    <HiOutlineMail className='text-[#141414] dark:text-[#FFFFFF]' />
                                </div>
                                <p className='font-rubik font-normal text-[20px] te leading-7.5 text-[#141414] dark:text-[#FFFFFF]'>nafiz125@gmail.com</p>
                            </div>
                            <div className=" flex gap-2.5  items-center">
                                <div className="p-2.5 rounded-full border border-[#D9DDE0] flex items-center justify-between dark:border dark:border-[#FFFFFF]/8">
                                    <HiOutlineMail className='text-[#141414] dark:text-[#FFFFFF]' />
                                </div>
                                <p className='font-rubik font-normal text-[20px] leading-7.5 text-[#141414] dark:text-[#FFFFFF]'>nafiz125@gmail.com</p>
                            </div>
                            <div className=" flex gap-2.5  items-center">
                                <div className="p-2.5 rounded-full border border-[#D9DDE0] flex items-center justify-between dark:border dark:border-[#FFFFFF]/8">
                                    <HiOutlineMail className='text-[#141414] dark:text-[#FFFFFF]' />
                                </div>
                                <p className='font-rubik font-normal text-[20px] leading-7.5 text-[#141414] dark:text-[#FFFFFF]'>nafiz125@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container mt-[19px] px-3.5 py-[28px] border-t border-[#D9DDE0] ">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 ">
                    <div className="flex items-center gap-1.5">
                        <h1 className='font-normal font-rubik text-[14px] leading-7 text-[#5D6570] dark:text-[#9F9F9F]'>© InversWeb 2026  </h1>
                        <p className='font-normal font-rubik text-[14px] leading-7 text-[#5D6570] dark:text-[#9F9F9F] '>|</p>
                        <p className='font-normal font-rubik text-[14px] leading-7 text-[#5D6570]  dark:text-[#9F9F9F]'>All Rights Reserved</p>
                    </div>
                    <div className=" flex items-center text-[#141414] dark:text-[#FFFFFF]">
                        <p className='font-normal font-rubik text-[14px] leading-7 text-[#141414] dark:text-[#fffff] ' >Trams & Condition</p>
                        <p className='font-normal font-rubik text-[14px] leading-7 text-[#141414] dark:text-[#fffff]'>Privacy Policy</p>
                        <p className='font-normal font-rubik text-[14px] leading-7 text-[#141414] dark:text-[#fffff]'>Contact Us</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
