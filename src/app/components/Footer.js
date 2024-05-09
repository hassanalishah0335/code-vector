import React from 'react'
import LastCard from './FooterCard';
import { LastCardData } from '../constants/index';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';

const index = () => {
    return (
            <div className="bg-black pl-[10%] pr-[2%] py-10 rounded-tl-3xl rounded-tr-3xl" id='footer' >
                <h1 className=" text-gray-300 font-bold text-xl mb-3">Contact Us</h1>
                <div class="border-b-2 border-white w-[95%] mb-10"></div>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mb-20 text-gray-300">
                    <div className="flex items-center">
                        <AiOutlineMail size={40} color='gray' />
                        <div className="flex flex-col ml-2">
                            <h1 className="font-bold">Email</h1>
                            <p className="">codevectortechnologies@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <BsTelephone size={40} color='gray' />
                        <div className="flex flex-col ml-2">
                            <h1 className="">Phone</h1>
                            <p className="">+923-700-183-868</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <BsTelephone size={40} color='gray' />
                        <div className="flex flex-col ml-2">
                            <h1 className="">Phone</h1>
                            <p className="">+447-763-476-849</p>
                        </div>
                    </div>
                </div>

                <div class="border-b-2 border-white w-[95%]"></div>
                <div className=' grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mb-20'>
                    {LastCardData.map((items,key) => {
                        return (
                            <LastCard
                                key={key}
                                t1={items.t1}
                                t2={items.t2}
                                t3={items.t3}
                                t4={items.t4}
                                t5={items.t5}
                                t6={items.t6}
                                t7={items.t7}
                                t8={items.t8}
                                t9={items.t9}
                                reff={items.reff}

                            />
                        )
                    })}
                </div>
                <div className="grid grid-cols-2  pr-12">
                    <img class="w-[50%]" src="/resource/images/codevector.png" alt='' />
                    <div>
                        <div className="text-gray-300  lg:text-6xl md:text-4xl text-xl text-end">Get In Touch{String.fromCharCode(8599)}</div>
                        <div className="text-white lg:text-lg md:text-base text-sm text-end">codevectortechnologies@gmail.com</div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 pr-12 pb-10">
                    <div className="text-white pt-3">2024 CodeVector Technologies. All Rights Recived</div>
                    <div className="flex flex-row md:justify-end justify-start md:pt-0 pt-5">
                        <Link href="https://www.linkedin.com/in/codevector-technologies-311583308/" target="_blank" className="hover:opacity-70 active:opacity-50 md:px-2 pr-2 ">
                            <FaLinkedin size={40} color='gray' />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61559385179760" target="_blank" className="hover:opacity-70 active:opacity-50 px-2">
                            <FaFacebook size={40} color='gray' />
                        </Link>
                        <Link href="https://www.instagram.com/codevectortechnologies/" target="_blank" className="hover:opacity-70 active:opacity-50 px-2">
                            <FaInstagram size={40} color='gray' />
                        </Link>
                        <Link href="https://twitter.com/CodeVectorTech" target="_blank" className="hover:opacity-70 active:opacity-50 px-2">
                            <FaTwitter size={40} color='gray' />
                        </Link>
                    </div>
                </div>

            </div>
    )
}

export default index
