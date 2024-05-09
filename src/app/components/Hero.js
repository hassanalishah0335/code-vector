"use client"
import React from 'react'
import { useRouter } from 'next/navigation'



const Hero = (props) => {
    const router = useRouter();

    return (
        <div className='relative' id="home">
            <video className='w-full z-10' src="/resource/videos/video-2.mp4" alt='' autoPlay loop muted />
            <div className='absolute inset-0 flex flex-col ml-[5%] md:top-[30%] top-[40%] items-start'>
                <h1 className='text-gray-100  font-semibold w-[40%] text-base sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>{props.title}</h1>
                <div className="flex ">
                    <button className='bg-black opacity-75 md:w-36 md:h-12 lg:w-36 lg:h-12 xl:w-36 xl:h-12 sm:w-36 sm:h-12 w-28 h-8 mr-3 mt-3 italic font-semibold border-white border-[4px] rounded-full hover:opacity-90 active:opacity-100 text-white' onClick={()=> router.push("#contact")}>Get started</button>
                    <button className='bg-white opacity-75 md:w-36 md:h-12 lg:w-36 lg:h-12 xl:w-36 xl:h-12 sm:w-36 sm:h-12 w-28 h-8 m-2 mt-3 italic font-semibold border-white border-[4px] rounded-full hover:opacity-90 active:opacity-100' onClick={()=> router.push("#footer")}>Contact Us</button>
                </div>
            </div>
        </div>

    )
}

export default Hero
