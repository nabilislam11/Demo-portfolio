import React from 'react'
import { CiBank } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'

const MySkill = () => {
  return (
    <div className=' pt-[120px] px-[7.5px] '>
        <div className="flex flex-col gap-14.5 ">

        <div className="flex flex-col gap-1.5 ">
            <p className='font-rubik font-medium text-[16px] leading-[28px] text-[#FF494A]'>My Skill</p>
            <h2 className='font-rajdhani  font-bold  text-[48px] leading-[60px] text-[#141414]'>Elevated Designs Personalized
the best Experiences</h2>
        </div>
       <div className=""> 
         <div className=" bg-[#FF4A57] flex flex-col rounded-[20px] px-[20px] ">
            <div className="pt-[42px] pb-[32px] flex justify-between items-center gap-[132px] ">
                <div className="p-4 rounded-full border-2 border border-[#141414] ">
                    <CiBank />
                </div>
                <div className="w-[25%] ">
                    <h2 className='font-rajdhani font-bold text-[32px] leading-[42px] text-[#141414]'>Ui/visual Design</h2>
                    <p className='font-rajdhani font-normal text-[18px] leading-[27px] text-[#141414]'>21 Done</p>
                </div>
                <div className="w-[40%] ">
                    <p className='font-rubik font-medium text-[16px] leading-[30px] text-[#141414]'>My work is driven by the belief that thoughtful design and
strategic planning can empower brands strategic planning
can empower brands</p>
                </div>
                <div className="w-[10%] flex items-center gap-2 ">
                    <p>Read More </p>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
         <div className="  flex flex-col rounded-[20px] px-[20px] ">
            <div className="pt-[42px] pb-[32px] flex justify-between items-center gap-[132px] ">
                <div className="p-4 rounded-full border-2 border border-[#141414] ">
                    <CiBank className='text-[#2A2D31] ' />
                </div>
                <div className="w-[25%] ">
                    <h2 className='font-rajdhani font-bold text-[32px] leading-[42px] text-[#141414]'>Ui/visual Design</h2>
                    <p className='font-rajdhani font-normal text-[18px] leading-[27px] text-[#141414]'>21 Done</p>
                </div>
                <div className="w-[40%] ">
                    <p className='font-rubik font-medium text-[16px] leading-[30px] text-[#5D6570]'>My work is driven by the belief that thoughtful design and
strategic planning can empower brands strategic planning
can empower brands</p>
                </div>
                <div className="w-[10%] flex items-center gap-2 ">
                    <p>Read More </p>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
        <div className="  flex flex-col rounded-[20px] px-[20px] ">
            <div className="pt-[42px] pb-[32px] flex justify-between items-center gap-[132px] ">
                <div className="p-4 rounded-full border-2 border border-[#141414] ">
                    <CiBank className='text-[#2A2D31] ' />
                </div>
                <div className="w-[25%] ">
                    <h2 className='font-rajdhani font-bold text-[32px] leading-[42px] text-[#141414]'>Ui/visual Design</h2>
                    <p className='font-rajdhani font-normal text-[18px] leading-[27px] text-[#141414]'>21 Done</p>
                </div>
                <div className="w-[40%] ">
                    <p className='font-rubik font-medium text-[16px] leading-[30px] text-[#5D6570]'>My work is driven by the belief that thoughtful design and
strategic planning can empower brands strategic planning
can empower brands</p>
                </div>
                <div className="w-[10%] flex items-center gap-2 ">
                    <p>Read More </p>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
       </div>
        </div>
    </div>
  )
}

export default MySkill