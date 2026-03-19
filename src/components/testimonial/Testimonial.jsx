import React, { useRef } from 'react'
import testimonial from "../../assets/testimonial.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
const Testimonial = () => {
    const testimonalArray = [
        {
            icon: testimonial,
            details: `A personal portfolio is a curated collection of an individual's
                                professional work, showcasing their skilA personal portfolio is a
                                curated collection of an individual's professional work,
                                showcasing their skills `,
            h2: "Cameron Williamson",
            title: "Ui/Ux Designer"

        },
        {
            icon: testimonial,
            details: `A personal portfolio is a curated collection of an individual's
                                professional work, showcasing their skilA personal portfolio is a
                                curated collection of an individual's professional work,
                                showcasing their skills `,
            h2: "Cameron Williamson",
            title: "Ui/Ux Designer"

        },
        {
            icon: testimonial,
            details: `A personal portfolio is a curated collection of an individual's
                                professional work, showcasing their skilA personal portfolio is a
                                curated collection of an individual's professional work,
                                showcasing their skills `,
            h2: "Cameron Williamson",
            title: "Ui/Ux Designer"

        },
        {
            icon: testimonial,
            details: `A personal portfolio is a curated collection of an individual's
                                professional work, showcasing their skilA personal portfolio is a
                                curated collection of an individual's professional work,
                                showcasing their skills `,
            h2: "Cameron Williamson",
            title: "Ui/Ux Designer"

        },
        {
            icon: testimonial,
            details: `A personal portfolio is a curated collection of an individual's
                                professional work, showcasing their skilA personal portfolio is a
                                curated collection of an individual's professional work,
                                showcasing their skills `,
            h2: "Cameron Williamson",
            title: "Ui/Ux Designer"

        },
    ]
    const sliderRef = useRef(null)
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='container  px-[15px] '>
            <div className=" text-center space-y-1.5">
                <p className='font-medium font-rubik text-[16px] leading-[26px] text-[#FF494A]'>Our Testimonial</p>
                <h2 className='font-bold  font-rajdhani text-[48px] leading-[60px] text-[#141414] dark:text-white w-[484px] mx-auto  '>Enhancing Collaboration
                    between Remote</h2>
            </div>
            <div className="flex gap-4 relative">
                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#FF494A] hover:text-white transition-all  absolute top-60  left-[-100px]"
                >
                    <IoMdArrowDropleft size={30} />

                </button>
                <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#FF494A] hover:text-white transition-all  absolute top-60  right-[-100px] "
                >
                    <IoMdArrowDropright size={30} />
                </button>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className=" mt-[30px]  p-[38px] bg-[#F4F4F4] rounded-[20px] flex flex-col ">
                    <div className="">
                        <img src={testimonial} alt="" />
                    </div>
                    <p className='font-normal font-rubik text-[18px] leading-[30px] text-[#5D6570] pt-[43px] pb-[32px]'>A personal portfolio is a curated collection of an individual's
                        professional work, showcasing their skilA personal portfolio is a
                        curated collection of an individual's professional work,
                        showcasing their skills,</p>
                    <div className="flex flex-col gap-3">
                        <p className='font-bold  font-rajdhani text-[18px] leading-[20px] text-[#141414]'>Cameron Williamson</p>
                        <p className='font-normal font-rubik text-[14px] leading-[22.4px] text-[#5D6570]'>Ui/Ux Designer</p>
                    </div>
                </div>
            </div> */}
            <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                    {
                        testimonalArray.map((item) => (
                            <div className='outline-none px-3 '>
                                <div className=" mt-[30px] p-[38px] bg-[#F4F4F4] dark:bg-[#141414] rounded-[20px] flex flex-col ">
                                    <div className="">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <p className='font-normal font-rubik text-[18px] leading-[30px] text-[#5D6570] pt-[43px] pb-[32px] dark:text-[#9F9F9F]'>{item.details}</p>
                                    <div className="flex flex-col gap-3">
                                        <p className='font-bold  font-rajdhani text-[18px] leading-[20px] text-[#141414] dark:text-white'>{item.h2}</p>
                                        <p className='font-normal font-rubik text-[14px] leading-[22.4px] text-[#5D6570] dark:text-[#9F9F9F]'>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </Slider>
            </div>


        </div>
    )
}

export default Testimonial
