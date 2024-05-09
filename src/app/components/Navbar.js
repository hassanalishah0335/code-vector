"use client"
import Link from 'next/link';
import { NAV_LINKS } from "../constants";
import React, { useState } from 'react'
import { FiX, FiMenu } from "react-icons/fi";


const Navbar = ({ section }) => {
    const [click, setclick] = useState(false)

    function toggleMenu() {
        setclick(!click);
    }

    return (
        <>
            <navbar className= "h-14 bg-black opacity-90 flex justify-between items-center  rounded-full mt-5 mx-[5%] drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] z-[2] fixed w-[90%]" >
                <div>
                    <Link href='/pages/Landing' className=  "pl-2 pt-1 hover:opacity-70 active:opacity-50 inline-block"><img className="w-40 rounded-full"
                        src="/resource/images/codevector.png" alt=""/></Link>
                </div>
                <ul className={click ? "flex flex-col bg-black  w-full  absolute top-[60px] left-[3px] rounded-xl" :"lg:flex items-center justify-center mr-10 hidden"}>
                    {NAV_LINKS.map((link,key) => (<Link key={key} className="md: py-2 md: justify-center mx-2 hover:opacity-70 active:opacity-50 cursor-pointer text-gray-400 " href={link.href} >{link.label}</Link>))}
                </ul>
                
                <div className= "lg:hidden">
                    <button onClick={toggleMenu} className=" mr-5 hover:opacity-70 active:opacity-50 cursor-pointer">{click ? <FiX className=' text-gray-400 text-3xl' /> : <FiMenu className=' text-gray-400 text-3xl' /> }</button>
                </div>
                
            </navbar>

        </>
    )
}

export default Navbar
