import React from 'react'
import IndustryCard from "../IndustryCard";
import { Industry } from '@/app/constants';
import SoftwareCard from '../SoftwareCard';
import { SoftwareDetails } from '@/app/constants';


const index = () => {
  return (
    <div className=" bg-white " id="industries">
      <div className="m-[10%]">
        <h1 className=" text-4xl font-bold text-black">Industries</h1>
        <div className="border-b-2 w-[100%] my-5" style={{ borderImage: 'linear-gradient(to right, #000000, #c000ff) 1' }}></div>
        <p className='pb-10 text-black'>Cooperate with competent and knowledgeable IT experts in web and mobile software engineering. As a trusted tech and business partner, we apply the most advanced technologies, frameworks, and components to build software notable for both its solid and effective back-end with intuitive UI/UX.</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2">
          {Industry.map((items, key) => { return (<IndustryCard title={items.title} text={items.text} key={key} />) })}
        </div>
      </div>
      <div className='px-[10%] sm:py-[5%] py-[10%]  relative overflow-hidden'>
        <video className="absolute top-0 left-0 w-full h-full object-cover " autoPlay muted loop >
          <source src="/resource/videos/video-1.mp4" type="video/mp4" />
        </video>
        <h1 className="italic text-4xl font-bold text-gray-300 sticky z-[1]">Enterprise Software Solutions for Accelerated Business Growth</h1>
        <div className="border-b-2 w-[100%] my-5 sticky z-[1]" style={{ borderImage: 'linear-gradient(to right, #FFFFFF, #c000ff) 1' }}></div>
        <div className="flex gap-10 mt-10 whitespace-nowrap sticky  z-[1] overflow-x-auto">
          {
            SoftwareDetails.map((items, key) => {
              return (
                <SoftwareCard
                  key={key}
                  t0={items.t0}
                  t1={items.t1}
                  t2={items.t2}
                  t3={items.t3}
                  t4={items.t4}
                  t5={items.t5}
                  t6={items.t6}
                />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default index
