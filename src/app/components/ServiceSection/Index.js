import React from 'react'
import { myCards } from "../../constants/index.js";
import ServiceCard from "../ServiceCard";

const ServiceSection = () => {
  return (
    <div className= " bg-white grid lg:grid-cols-3 sm:grid-cols-2 pl-[10%] pr-[3%] py-[5%]" id="services">
      {
        myCards.map((item,index) => {
          return (
            <>
            <ServiceCard
              key={index}
              src={item.src}
              title={item.title}
              text={item.text}
              url={item.url}
            />
            </>
          )
        })

      }
    </div>
 )
}

export default ServiceSection
