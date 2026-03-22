import React from 'react'
import logo from "../../assets/logo.png"
import logodark from "../../assets/logodark.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import ThemeToggle from '../themetoggle/ThemeToggle'
const DesktopNavbar = () => {
    return (
        <div>
            <div className="bg-[#F4F4F4] shadow-[0_7px_18px_0_rgba(24,16,16,0.08)] dark:bg-[#141414] text-black dark:text-white transition-colors duration-300">
                <div className='container flex justify-between items-center py-2.5 px-3'>

                    {/* Logo Section */}
                    <div>
                        <div>
                            <img src={logo} alt="logo" className="block dark:hidden" />
                            <img src={logodark} alt="logo-dark" className="hidden dark:block" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul className='flex justify-between items-center gap-4'>
                            <li className='py-2.5 px-1'>
                                <a className='!text-black dark:!text-white hover:!text-gray-500 dark:hover:!text-gray-300 transition-colors duration-200' href="/Home">Home</a>
                            </li>
                            <li className='py-3 px-1'>
                                <a className='!text-black dark:!text-white hover:!text-gray-500 dark:hover:!text-gray-300 transition-colors duration-200' href="/About">About</a>
                            </li>
                            <li className='py-2.5 px-1'>
                                <a className='!text-black dark:!text-white hover:!text-gray-500 dark:hover:!text-gray-300 transition-colors duration-200' href="/Services">Services</a>
                            </li>
                            <li className='py-2.5 px-1'>
                                <a className='!text-black dark:!text-white hover:!text-gray-500 dark:hover:!text-gray-300 transition-colors duration-200' href="/Blog">Blog</a>
                            </li>
                            <li className='py-2.5 px-1'>
                                <a className='!text-black dark:!text-white hover:!text-gray-500 dark:hover:!text-gray-300 transition-colors duration-200' href="/Project">Project</a>
                            </li>
                            <li className='py-2.5 px-1'>
                                <a className='!text-black dark:!text-white hover:!text-gray-500 dark:hover:!text-gray-300 transition-colors duration-200' href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Icons & Theme Toggle */}
                    <div className="flex justify-between items-center gap-6">
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/10 dark:bg-white/10 cursor-pointer transition-colors hover:bg-black/20 dark:hover:bg-white/20">
                                <FaInstagram />
                            </div>
                            <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/10 dark:bg-white/10 cursor-pointer transition-colors hover:bg-black/20 dark:hover:bg-white/20">
                                <FaLinkedinIn />
                            </div>
                            <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/10 dark:bg-white/10 cursor-pointer transition-colors hover:bg-black/20 dark:hover:bg-white/20">
                                <FaTwitter />
                            </div>
                            <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/10 dark:bg-white/10 cursor-pointer transition-colors hover:bg-black/20 dark:hover:bg-white/20">
                                <FaFacebookF />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DesktopNavbar
