import { title } from 'process'
import React from 'react'

const IndustryCard = (props) => {
  return (
    <div className=' bg-gray-300 rounded-2xl m-5 p-5 w-[90%] drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]'>
        <div className="font-bold text-xl mb-2 ">{props.title}</div>
        <div className="">{props.text}</div>
    </div>
  )
}

export default IndustryCard
