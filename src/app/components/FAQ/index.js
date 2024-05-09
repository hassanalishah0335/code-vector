import React from "react";
import Accordion from "../Accordion";
import { Questions } from "@/app/constants";

const FAQ = () => {
  return (
    <div className=" bg-gray-300 md:pr-[5%]  grid md:grid-cols-2 items-center"> 
      <img className=" rounded-r-full w-[90%] shadow-2xl" src="/resource/images/FAQ.jpeg" alt="" />
      <div className="flex flex-wrap px-[5%] py-10 ">
        { Questions.map((items,key) => { return(
          <Accordion
          title={items.question}
          answer={items.answer}
          key={key}
        />
        )})
        
      }
      </div>
    </div>
  );
};

export default FAQ;
