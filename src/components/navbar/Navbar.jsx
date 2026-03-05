import React from 'react'
import logo from "../../assets/logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TbListTree } from 'react-icons/tb'
import ThemeToggle from '../themetoggle/ThemeToggle'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2.5  bg-[#F4F4F4] shadow-[0,7,18,0,181010/8] '>
    <div className=""> 
    <div className="">
      <img src={logo} alt="" />
    </div>
    </div>
    <div className=""> 
      <ul className='flex justify-between items-center  text-black '>
        <li className='py-2.5 px-1 text-black '> <a href="Home">Home</a> </li>
         <li className='py-3 px-1 '> <a href="About">About</a> </li>
          <li className='py-2.5 px-1 '> <a href="Services ">Services </a> </li>
           <li className='py-2.5 px-1 '> <a href="Blog ">Blog </a> </li>
           <li className='py-2.5 px-1 '> <a href="Project ">Project </a> </li>
           <li className='py-2.5 px-1 '> <a href="Contact">Contact</a> </li>
      </ul>
    </div>
    <div className="flex justify-between items-center gap-6 ">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 ">
          <FaInstagram />
        </div>
        <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 ">
          <FaLinkedinIn />
        </div>
        <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 ">
          <FaTwitter />
        </div>
        <div className="flex items-center justify-center rounded-full p-[13px] bg-[#0A0A0A]/6 ">
        <FaFacebookF />
        </div>
      </div>
        <div className="   ">
          <ThemeToggle></ThemeToggle>
        </div>
      
      </div>    
    </div>
  )
}

export default Navbar