import React, { useState } from "react";
import ThemeToggle from "../themetoggle/ThemeToggle";
import { VscThreeBars } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import logodark from "../../assets/logodark.png";

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden overflow-x-hidden">
            {/* Navbar */}
            <div className="bg-[#F4F4F4] dark:bg-[#141414] shadow-[0_7px_18px_0_rgba(24,16,16,0.08)] transition-colors duration-300">

                <div className="container mx-auto px-3 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="logo"
                            className="block dark:hidden w-[120px] h-auto"
                        />

                        <img
                            src={logodark}
                            alt="logo-dark"
                            className="hidden dark:block w-[120px] h-auto"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">

                        <ThemeToggle />

                        <button
                            onClick={() => setOpen(true)}
                            className="p-2 rounded-full bg-[#FF494A] text-white text-[20px]"
                        >
                            <VscThreeBars />
                        </button>

                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-full bg-[#F4F4F4] dark:bg-[#141414] z-50 transition-all duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >

                {/* Top */}
                <div className="container mx-auto px-3 py-3 flex items-center justify-between">

                    <div>
                        <img
                            src={logo}
                            alt="logo"
                            className="block dark:hidden w-[120px] h-auto"
                        />

                        <img
                            src={logodark}
                            alt="logo-dark"
                            className="hidden dark:block w-[120px] h-auto"
                        />
                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="p-2 rounded-full bg-[#FF494A] text-white text-[18px]"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col items-center justify-center h-[80vh]">

                    <ul className="flex flex-col gap-8 text-center">

                        <li>
                            <a
                                href="/Home"
                                className="text-black dark:text-white text-[20px] font-medium"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="/About"
                                className="text-black dark:text-white text-[20px] font-medium"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="/Services"
                                className="text-black dark:text-white text-[20px] font-medium"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                href="/Blog"
                                className="text-black dark:text-white text-[20px] font-medium"
                            >
                                Blog
                            </a>
                        </li>

                        <li>
                            <a
                                href="/Project"
                                className="text-black dark:text-white text-[20px] font-medium"
                            >
                                Project
                            </a>
                        </li>

                        <li>
                            <a
                                href="/Contact"
                                className="text-black dark:text-white text-[20px] font-medium"
                            >
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;