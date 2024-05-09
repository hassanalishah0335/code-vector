"use client"
import React, { useState } from 'react'
import { Front, Back, popular, Mobile, DB } from '@/app/constants'

const TechNav = () => {
  const [array, setarray] = useState(popular)
  return (
    <div className="bg-white px-[10%] py-[5%] lg:min-h-[45rem] " id='technologies'>
      <div className="text-3xl font-bold my-2">CodeVector&apos;s set of technologies for software development</div>
      <div className="text-xl ">Partner with our skilled and experienced IT experts in web and mobile software engineering. As a reliable technology and business partner, we use the latest technologies, frameworks, and components to create software with robust and efficient back-ends and intuitive user interfaces and user experiences.</div>
        <div className="flex flex-wrap gap-5 justify-start font-semibold mt-10 pb-5 border-b-2 border-gray-400">
            <button className=" cursor-pointer border-gray-500 pr-5 hover:opacity-85 active:opacity-100 opacity-70" onClick={()=> setarray(popular)} >Popular</button>
            <button className=" cursor-pointer border-l-2 border-gray-500 px-5 hover:opacity-85 active:opacity-100 opacity-70" onClick={() => setarray(Mobile)}>Mobile Development</button>
            <button className=" cursor-pointer border-l-2 border-gray-500 px-5 hover:opacity-85 active:opacity-100 opacity-70" onClick={() => setarray(Front)}>Front-End</button>
            <button className=" cursor-pointer border-l-2 border-gray-500 px-5 hover:opacity-85 active:opacity-100 opacity-70" onClick={() => setarray(Back)}>Back-End</button>
            <button className=" cursor-pointer border-l-2 border-gray-500 px-5 hover:opacity-85 active:opacity-100 opacity-70" onClick={() => setarray(DB)}>Database</button>
        </div>
        <div className='flex flex-wrap gap-5 mt-5'>
            {array.map((items,index) => {
                return (
                    <div key={index} className=" w-36 h-40 border border-gray-300 rounded-2xl hover:shadow-xl flex flex-col items-center justify-center">
                        <img className=' ' src={items.src} alt="" />
                        <h1 className="mt-5">{items.title}</h1>
                    </div>
                )
            })}
        </div>
        </div>
      
  )
}

export default TechNav
