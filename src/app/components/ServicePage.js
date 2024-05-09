import React from 'react'
import { TiTick } from "react-icons/ti";

const ServicePage = (props) => {
  return (
    <div className="">
      <div className='px-[10%] py-[10%] bg-black  '>
        <h2 className='text-5xl italic font-semibold text-gray-300 '>{props.title}<span className='text-6xl text-gray-500'>.</span></h2>
        <p className='text-xl  my-4 text-gray-300'>{props.text}</p>
      </div>
      <div className="pl-[10%] py-10 flex flex-wrap items-center bg-gray-300">
        <div className="sm:w-[30%] sm:hidden"><img className=" object-cover w-full  rounded-l-full " src="/resource/images/s1.jpeg" alt='' /></div>
        <div className=' py-[1%] sm:w-[70%] '>
          <h2 className='text-4xl font-semibold '>{props.p1t1}<span className='text-5xl text-gray-500'>.</span></h2>
          <p className='text-xl my-4'>{props.p1t2}</p>
          <p className="text-xl">{props.p1p1}</p>
          <div className="pl-[5%] py-[2%]">
            <p className="flex items-center"><TiTick size="25px" />{props.p1p2}</p>
            <p className="flex items-center"><TiTick size="25px" />{props.p1p3}</p>
            <p className="flex items-center"><TiTick size="25px" />{props.p1p4}</p>
          </div>
        </div>
        <div className="sm:w-[30%] sm:block hidden"><img className=" object-cover w-full  rounded-l-full " src="/resource/images/s1.jpeg" alt='' /></div>
      </div>

      <div className=" pl-[10%] my-10 flex flex-wrap items-center">
        <div className="sm:w-[30%] sm:hidden"><img className=" object-cover w-full  rounded-l-full " src="/resource/images/s2.jpeg" alt='' /></div>
        <div className=' py-[1%] sm:w-[70%] '>
        <h2 className='text-4xl font-semibold '>{props.p2t1}<span className='text-5xl text-gray-500'>.</span></h2>
          <p className='text-xl my-4'>{props.p2t2}</p>
          <p className="text-xl">{props.p2p1}</p>
          <div className="pl-[5%] py-[2%]">
            <p className="flex items-center"><TiTick size="25px" />{props.p2p2}</p>
            <p className="flex items-center"><TiTick size="25px" />{props.p2p3}</p>
            <p className="flex items-center"><TiTick size="25px" />{props.p2p4}</p>
          </div>
        </div>
        <div className="sm:w-[30%] sm:block hidden"><img className=" object-cover w-full  rounded-l-full " src="/resource/images/s2.jpeg" alt='' /></div>
      </div>


      <div className="pl-[10%] py-10 flex flex-wrap items-center bg-gray-300">
        <div className="sm:w-[30%] sm:hidden"><img className=" object-cover w-full  rounded-l-full " src="/resource/images/s3.jpeg" alt='' /></div>
        <div className=' py-[1%] sm:w-[70%] '>
        <h2 className='text-4xl font-semibold '>{props.p3t1}<span className='text-5xl text-gray-500'>.</span></h2>
          <p className='text-xl my-4'>{props.p3t2}</p>
          <p className="text-xl">{props.p3p1}</p>
          <div className="pl-[5%] py-[2%]">
            <p className="flex items-center"><TiTick size="25px" />{props.p3p2}</p>
            <p className="flex items-center"><TiTick size="25px" />{props.p3p3}</p>
            <p className="flex items-center"><TiTick size="25px" />{props.p3p4}</p>
          </div>
        </div>
        <div className="sm:w-[30%] sm:block hidden"><img className=" object-cover w-full  rounded-l-full " src="/resource/images/s3.jpeg" alt='' /></div>
      </div>

      <div className="pl-[10%] my-10 flex flex-wrap items-center">
        <div className="sm:w-[30%] sm:hidden"><img className=" object-cover w-full  rounded-l-full " src="/resource/images/s4.jpeg" alt='' /></div>
        <div className=' py-[1%] sm:w-[70%] '>
        <h2 className='text-4xl font-semibold '>{props.p4t1}<span className='text-5xl text-gray-500'>.</span></h2>
          <p className='text-xl my-4'>{props.p4t2}</p>
          <p className="text-xl">{props.p4p1}</p>
          <div className="pl-[5%] py-[2%]">
            <p className="flex items-center"><TiTick size="25px" />{props.p4p2}</p>
            <p className="flex items-center"><TiTick size="25px" />{props.p4p3}</p>
            <p className="flex items-center"><TiTick size="25px" />{props.p4p4}</p>
          </div>
        </div>
        <div className="sm:w-[30%] sm:block hidden"><img className=" object-cover w-full  rounded-l-full " src="/resource/images/s4.jpeg" alt='' /></div>
      </div>
    </div>
  )
}

export default ServicePage
