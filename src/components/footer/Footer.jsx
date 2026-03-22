import React from 'react'
import logo from '../../assets/logo.png'
import logodark from '../../assets/logodark.png'
import { HiOutlineMail } from 'react-icons/hi'
const Footer = () => {
    return (
        <div className=' bg-[#F4F4F4]  dark:bg-[#141414]'>
            <div className="container px-[15px] pt-[90px] pb-[120px] ">
                <div className="flex justify-between">
                    <div className="w-[30%] pt-7.5 flex flex-col gap-5.5 ">
                        <div>
                            <img src={logo} alt="logo" className="block dark:hidden" />
                            <img src={logodark} alt="logo-dark" className="hidden dark:block" />
                        </div>
                        <h2 className=' pb-[18px] font-normal font-rajdhani text-[50px] leading-[60px] ' ><span className='font-bold font-rajdhani text-[50px]  leading-[60px]  text-[#141414]  dark:text-white '>Get Ready </span>To
                            Create Great</h2>
                        <div className="flex items-center justify-between  pb-[20px] border-b-1 border-[#D9DDE0]  dark:border-b-1 border-[#FFFFFF]/8   ">
                            <input className=' text-[#5D6570] dark:text-[#FFFFFF] outline-none' type="email" placeholder='Email Adress' />
                            <HiOutlineMail className='size-4 text-[#FFFFFF]  ' />
                        </div>

                    </div>
                    <div className="w-[20%] pt-7.5 pl-[95px] pr-[15px] pb-[18px] flex flex-col gap-[40px] ">
                        <h2 className='font-bold font-rajdhani text-[24px] leading-[30px] text-[#141414] dark:text-[#FFFFFF] '>Quick Link</h2>
                        <ul className=' flex  flex-col gap-2 '>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">About Me</a></li>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">Service</a></li>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">Contact Us</a></li>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">Blog Post</a></li>
                            <li className='font-normal font-rubik text-[16px] leading-[30px] '><a className='!text-[#141414] dark:!text-[#FFFFFF]' href="">Pricing</a></li>
                        </ul>

                    </div>
                    <div className="w-[20%] px-[15px] pt-7.5 flex flex-col  gap-[40px] ">
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
                <div className="flex items-center justify-between ">
                    <h1 className='text-[#141414] dark:text-[#FFFFFF]'>© InversWeb 2026 | All Rights Reserved</h1>
                    <div className=" flex items-center text-[#141414] dark:text-[#FFFFFF]">
                        <p >Trams & Condition</p>
                        <p>Privacy Policy</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
