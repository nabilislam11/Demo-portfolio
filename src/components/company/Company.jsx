import React from 'react'
import company1 from "../../assets/company1.svg"
import company2 from "../../assets/company2.svg"
import company3 from "../../assets/company3.svg"
import company4 from "../../assets/company4.svg"
const Company = () => {
  return (
    <div className=' container mt-[120px]'>
        <div className="grid grid-cols-2 lg:grid-cols-4 ">
            <div className=" py-[46.5px] px-[68.12px] border border-[#9F9F9F]">
                <img src={company1} alt="" />
            </div>
              <div className=" py-[46.5px] px-[68.12px] border border-[#9F9F9F]">
                <img src={company2} alt="" />
            </div>
              <div className=" py-[46.5px] px-[68.12px] border border-[#9F9F9F]">
                <img src={company3} alt="" />
            </div>
              <div className=" py-[46.5px] px-[68.12px] border border-[#9F9F9F]">
                <img src={company4} alt="" />
            </div>
             <div className=" py-[46.5px] px-[68.12px] border border-[#9F9F9F]">
                <img src={company1} alt="" />
            </div>
              <div className=" py-[46.5px] px-[68.12px] border border-[#9F9F9F]">
                <img src={company2} alt="" />
            </div>
              <div className=" py-[46.5px] px-[68.12px] border border-[#9F9F9F]">
                <img src={company3} alt="" />
            </div>
              <div className=" py-[46.5px] px-[68.12px] border border-[#9F9F9F]">
                <img src={company4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Company