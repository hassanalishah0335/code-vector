import React from 'react'
import { myCards } from "../../constants/index.js";
import ServiceCard from "../ServiceCard";

const ServiceSection = () => {
  return (
    <div className="m-[10%]">
      <h1 className=" text-4xl font-bold text-black">Our Services</h1>
      <div className="border-b-2 w-[100%] my-5" style={{ borderImage: 'linear-gradient(to right, #000000, #c000ff) 1' }}></div>
      <p className='pb-10 text-black'>Our services enhance your online presence and user engagement through Web Development, Mobile Development, UI/UX Design, SEO, Digital Marketing, and Graphic Designing. We create robust websites, high-performance apps, seamless user experiences, improved search engine rankings, data-driven marketing campaigns, and captivating visuals, all tailored to your business goals.</p>
      <div className=" bg-white flex flex-wrap gap-10" id="services">
        {
          myCards.map((item, index) => {
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
    </div>
  )
}

export default ServiceSection
