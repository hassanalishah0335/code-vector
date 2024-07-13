"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';




const Hero = (props) => {

    return (

        <div className=" relative h-[100vh] overflow-hidden " id='Home'>
            <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay muted loop >
                <source src="/resource/videos/video-1.mp4" type="video/mp4" />
            </video>
            <div className='absolute inset-0 flex flex-col ml-[5%] sm:top-[30%] top-[40%] items-start'>
                <TypeAnimation sequence={["CodeVector Technologies", 1500, props.title, 2000, "Looking For A business Solution?", 2000, "Want to Develop A Web Or Software?", 2000]} wrapper="span" speed={20} repeat={Infinity} className='text-gray-100 font-semibold sm:w-[40%] text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:h-[50%] h-20' />
                <div className="flex">
                <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} className='bg-black opacity-60 flex justify-center items-center cursor-pointer text-xl md:w-40 md:h-16 sm:w-44 sm:h-20 w-40 h-14 mr-3 mt-3 italic font-semibold rounded-xl hover:opacity-90 active:opacity-100 text-white' >Get started</ScrollLink>
                <ScrollLink to="footer" spy={true} smooth={true} offset={-70} duration={500} className='bg-white opacity-60 flex justify-center items-center cursor-pointer text-xl md:w-40 md:h-16 sm:w-44 sm:h-20 w-40 h-14 mr-3 mt-3 italic font-semibold  rounded-xl hover:opacity-90 active:opacity-100 text-black' >Contact Us</ScrollLink>
                </div>
            </div>
        </div>

    )
}

export default Hero
