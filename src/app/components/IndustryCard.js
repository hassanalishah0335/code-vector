import { title } from 'process'
import React from 'react'

const IndustryCard = (props) => {
  return (
    <div className=' bg-gray-300 shadow-2xl rounded-2xl my-5 p-5 w-[90%] '>
        <div className="font-bold text-xl mb-2 ">{props.title}</div>
        <div className="">{props.text}</div>
    </div>
  )
}

export default IndustryCard
