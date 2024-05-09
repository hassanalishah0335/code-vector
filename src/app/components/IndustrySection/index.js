import React from 'react'
import IndustryCard from "../IndustryCard";
import { Industry } from '@/app/constants';
import SoftwareCard from '../SoftwareCard';
import { SoftwareDetails } from '@/app/constants';


const index = () => {
  return (
    <div className=" bg-white" id="industries">
      <div className=' bg-gray-300  rounded-3xl p-5 mx-[5%] drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]'>
        <div className="font-bold text-xl ">Industries</div>
        <div className="">Cooperate with competent and knowledgeable IT experts in web and mobile software engineering. As a trusted tech and business partner, we apply the most advanced technologies, frameworks, and components to build software notable for both its solid and effective back-end with intuitive UI/UX.</div>
      </div>
      <div className="mx-[5%] my-[2%] grid lg:grid-cols-3 sm:grid-cols-2">
        {Industry.map((items,key) => { return (<IndustryCard title={items.title} text={items.text} key={key} />) })}
      </div>
      <div className="mx-[5%] flex flex-wrap justify-center gap-4">
        <div className=' bg-gray-300 rounded-2xl m-5 p-5 w-[21rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]'>
          <div className="font-bold text-xl mb-2 ">E-Commerce</div>
          <div className="">We help eCommerce companies build and grow their online businesses with our custom software solutions. We develop software for online stores and marketplaces, payment processing and order management, and customer relationship management and marketing automation. Our solutions help our clients increase sales and streamline their operations</div>
        </div>
        <div className=' bg-gray-300 rounded-2xl m-5 p-5 w-[21rem] drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]'>
          <div className="font-bold text-xl mb-2 ">Real Estate</div>
          <div className="">We help real estate companies streamline their operations and grow their businesses with our custom software solutions. We develop software for property listing and search, lead generation and CRM, and transaction management and closing. Our solutions help our clients save time and money, improve their customer service, and close more deals.</div>
        </div>
      </div>
      <div className='bg-gray-400 px-[10%] py-[5%] '>
        <h1 className="italic text-4xl font-bold">Enterprise Software Solutions for Accelerated Business Growth</h1>
        <div className="grid lg:grid-cols-3 sd:grid-cols-2 gap-4">
      {
        SoftwareDetails.map((items ,key) =>{
          return(
          <SoftwareCard 
          key = {key}
          t0 = {items.t0}
          t1 = {items.t1}
          t2 = {items.t2}
          t3 = {items.t3}
          t4 = {items.t4}
          t5 = {items.t5}
          t6 = {items.t6}
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
