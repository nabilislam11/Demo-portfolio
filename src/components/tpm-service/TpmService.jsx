import React from 'react'
import tpm1 from "../../assets/tpm1.svg"
const TpmService = () => {
    return (
        <div className='container px-3 py-[90px]  '>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                <div className="py-[41px]  mt-8 flex flex-col items-center justify-between text-center gap-7 rounded-[20px] border border-[#FF494A] ">
                    <img src={tpm1} alt="" />
                    <div className="space-y-2 ">
                        <h2 className='font-rajdhani font-bold  text-[24px] leading-[34px]'>Web Design</h2>
                        <p className='font-rubik  font-normal   text-[16px] leading-[26px]'>120 Projects</p>
                    </div>
                </div>
                <div className="py-[41px]  mt-8 flex flex-col items-center justify-between text-center gap-7 rounded-[20px] border border-[#FF494A] ">
                    <img src={tpm1} alt="" />
                    <div className="space-y-2 ">
                        <h2 className='font-rajdhani font-bold  text-[24px] leading-[34px]'>Web Design</h2>
                        <p className='font-rubik  font-normal   text-[16px] leading-[26px]'>120 Projects</p>
                    </div>
                </div>
                <div className="py-[41px]  mt-8 flex flex-col items-center justify-between text-center gap-7 rounded-[20px] border border-[#FF494A] ">
                    <img src={tpm1} alt="" />
                    <div className="space-y-2 ">
                        <h2 className='font-rajdhani font-bold  text-[24px] leading-[34px]'>Web Design</h2>
                        <p className='font-rubik  font-normal   text-[16px] leading-[26px]'>120 Projects</p>
                    </div>
                </div>
                <div className="py-[41px]  mt-8 flex flex-col items-center justify-between text-center gap-7 rounded-[20px] border border-[#FF494A] ">
                    <img src={tpm1} alt="" />
                    <div className="space-y-2 ">
                        <h2 className='font-rajdhani font-bold  text-[24px] leading-[34px]'>Web Design</h2>
                        <p className='font-rubik  font-normal   text-[16px] leading-[26px]'>120 Projects</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TpmService
