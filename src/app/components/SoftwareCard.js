import React from 'react'
import { TiTick } from "react-icons/ti";
const SoftwareCard = (props) => {
  return (

    
      <div className="flex flex-col bg-black opacity-80  p-2 rounded-3xl shadow-2xl ">
        <h2 className="text-2xl font-semibold my-5 text-white ">{props.t0}</h2>
        <div className="flex items-center text-xl my-3 italic text-gray-300 px-1">{props.t1 ? <TiTick color='bg-black' /> : ""} <p className="">{props.t1}</p></div>
        <div className="flex items-center text-xl my-3 italic text-gray-300 px-1">{props.t2 ? <TiTick color='bg-black' /> : ""} <p className="">{props.t2}</p></div>
        <div className="flex items-center text-xl my-3 italic text-gray-300 px-1">{props.t3 ? <TiTick color='bg-black' /> : ""} <p className="">{props.t3}</p></div>
        <div className="flex items-center text-xl my-3 italic text-gray-300 px-1">{props.t4 ? <TiTick color='bg-black' /> : ""} <p className="">{props.t4}</p></div>
        <div className="flex items-center text-xl my-3 italic text-gray-300 px-1">{props.t5 ? <TiTick color='bg-black' /> : ""} <p className="">{props.t5}</p></div>
        <div className="flex items-center text-xl my-3 italic text-gray-300 px-1">{props.t6 ? <TiTick color='bg-black' /> : ""} <p className="">{props.t6}</p> </div>
      </div>

  )
}

export default SoftwareCard
