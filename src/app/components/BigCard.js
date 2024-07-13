import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const BigCard = () => {
    return (
        <div className="" >
            <div className='px-[10%] py-[5%] bg-gray-300 italic '>
                <h2 className='text-5xl font-semibold '>Why CodeVector<span className='text-6xl text-gray-500'>?</span></h2>
                <p className='text-xl w-[70%] my-4'>Our goal is not only to meet your needs but to surpass them, leaving you delighted with the outcome. Your satisfaction is our priority, and we are committed to going above and beyond to achieve it.</p>

            </div>
            <div className=' bg-white pl-[10%] grid md:grid-cols-2 items-center'>
                <div className=" md:w-[50%] w-full flex justify-end md:hidden"><img className="object-cover w-full  rounded-l-full shadow-2xl" src="/resource/images/handshake.jpeg" alt='' /></div>
                <div className=" lg:w-[80%]">
                    <h2 className="text-4xl font-semibold">Unlock Your Business Potential with Our Software Development Expertise.</h2>
                    <p className='text-xl lg:w-[70%] my-4'>Fed up with off-the-shelf software solutions that don’t meet your needs? Are you in search of a software development company that can turn your concepts into reality?</p>
                    <p className='text-xl lg:w-[70%] my-4'>Your search ends here!</p>
                    <p className='text-xl lg:w-[70%] my-4'>Our team of seasoned software developers has honed their skills to perfection, utilizing an efficient development process to turn your software aspirations into reality.</p>
                </div>
                <div className="md:flex justify-end hidden"><img className="object-cover w-full  rounded-l-full shadow-2xl" src="/resource/images/handshake.jpeg" alt='' /></div>
            </div>
            <div className='px-[10%] py-[5%] bg-black text-gray-300 italic '>
                <h2 className='text-5xl font-semibold '>Our Goal<span className='text-6xl text-gray-500'>.</span></h2>
                <p className='text-xl w-[70%] my-4'>Our goal is not only to meet your needs but to surpass them, leaving you delighted with the outcome. Your satisfaction is our priority, and we are committed to going above and beyond to achieve it.</p>

            </div>
            {/* <div class="md:pr-[5%] md:flex md:flex-wrap items-center">
                <img class="rounded-r-full md:w-[35%] shadow-2xl" src="/resource/images/Hassan.jpg" alt="" />
                <div class="flex flex-wrap md:w-[60%] ml-[5%] my-[3%]">
                    <h2 class="text-5xl font-semibold relative ">Hassan Ali
                        <hr class="absolute bottom-0 w-full border-b-4 border-gray-500" />
                        <p className="absolute text-gray-400 text-xl">Cheif Executive Officer</p>
                    </h2>
                    <p class="text-xl my-8">&quot;In our vision, we see partnerships built on trust, collaboration, and a shared commitment to excellence. We listen intently to our clients, understanding their challenges and aspirations, and then harnessing the power of technology to turn their vision into reality&quot;</p>
                    <div className="flex">
                        <Link href="https://www.linkedin.com/in/hassanali726815/" target="_blank" className="hover:opacity-70 active:opacity-50 pr-2 ">
                            <FaLinkedin size={40} color='gray' />
                        </Link>
                        <Link href="https://www.facebook.com/rokingboy75" target="_blank" className="hover:opacity-70 active:opacity-50 px-2">
                            <FaFacebook size={40} color='gray' />
                        </Link>
                        <Link href="https://www.instagram.com/syed_hassan_33/" target="_blank" className="hover:opacity-70 active:opacity-50 px-2">
                            <FaInstagram size={40} color='gray' />
                        </Link>
                        <Link href="https://twitter.com/SyedHassan24681" target="_blank" className="hover:opacity-70 active:opacity-50 px-2">
                            <FaTwitter size={40} color='gray' />
                        </Link>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default BigCard
