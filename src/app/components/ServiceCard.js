"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const ServiceCard = (props) => {
  const router = useRouter();
  
  return (

    <button class="flex flex-col items-start w-80 my-5 hover:shadow-2xl rounded-xl transition duration-400 hover:scale-105" onClick={()=> router.push(props.url)}>
      <div className="overflow-hidden rounded-xl"><img class=" object-cover  w-80 h-40" src={props.src} alt='' /></div>
      {props.title ? <p class="text-2xl font-semibold mt-5  px-1 text-start">{props.title}</p> : ""}
      <p class="text-gray-500 mt-4 px-1 pb-5 text-start">{props.text}</p>
    </button>
  )
}

export default ServiceCard
