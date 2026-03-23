import React, { useState } from 'react'
import ThemeToggle from '../themetoggle/ThemeToggle'
import { VscThreeBars } from 'react-icons/vsc'
import { FaTimes } from 'react-icons/fa';
import logo from "../../assets/logo.png"
import logodark from "../../assets/logodark.png"
const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="md:hidden bg-[#F4F4F4] shadow-[0_7px_18px_0_rgba(24,16,16,0.08)] dark:bg-[#141414] text-black dark:text-white transition-colors duration-300">
                <div className=' flex justify-between items-center  px-3'>

                    {/* Logo Section */}
                    <div>
                        <div>
                            <img src={logo} alt="logo" className="block dark:hidden" />
                            <img src={logodark} alt="logo-dark" className="hidden dark:block" />
                        </div>
                    </div>

                    <div className=" flex justify-between items-center gap-5">

                        <ThemeToggle></ThemeToggle>


                        <button className='p-[8px] rounded-full  bg-[#FF494A] text-white  ' onClick={() => setOpen(true)}>
                            <VscThreeBars />
                        </button>
                    </div>
                    {/* Menu */}
                    {
                        open && (


                            <div className="fixed inset-0 bg-[#F4F4F4] dark:bg-[#141414] z-50 flex flex-col">

                                {/* Top */}
                                <div className="flex justify-between items-center px-3">
                                    <div>
                                        <img src={logo} className="block dark:hidden" />
                                        <img src={logodark} className="hidden dark:block" />
                                    </div>

                                    <button className=' p-[8px] rounded-full bg-[#FF494A] text-white' onClick={() => setOpen(false)}>
                                        <FaTimes />
                                    </button>
                                </div>

                                {/* Menu Center */}
                                <div className="flex-1 flex items-center justify-center">
                                    <ul className='flex flex-col gap-6 text-center'>
                                        <li><a className='!text-black dark:!text-white' href="/Home">Home</a></li>
                                        <li><a className='!text-black dark:!text-white' href="/About">About</a></li>
                                        <li><a className='!text-black dark:!text-white' href="/Services">Services</a></li>
                                        <li><a className='!text-black dark:!text-white' href="/Blog">Blog</a></li>
                                        <li><a className='!text-black dark:!text-white' href="/Project">Project</a></li>
                                        <li><a className='!text-black dark:!text-white' href="/Contact">Contact</a></li>
                                    </ul>
                                </div>

                            </div>
                        )
                    }

                </div>
            </div>
        </div >
    )
}

export default MobileNavbar
