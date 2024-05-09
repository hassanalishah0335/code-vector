"use client"
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)}  onExit={()=> setCounterOn(false)}>
            <div className='bg-black grid lg:grid-cols-4 md:grid-cols-2 pl-[10%] pr-[2%] py-24 ' id = "about">
                <div className="">
                    <h1 className="text-gray-200 text-6xl font-bold">
                        {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}+
                    </h1>
                    <p className="text-gray-200 font-semibold">Projects Completed</p>
                </div>
                <div className="">
                    <h1 className="text-gray-200 text-6xl font-bold">
                        {counterOn && <CountUp start={0} end={82} duration={2} delay={0} />}
                    </h1>
                    <p className="text-gray-200 font-semibold">Happy clients</p>
                </div>
                <div className="">
                    <h1 className="text-gray-200 text-6xl font-bold">
                        {counterOn && <CountUp start={0} end={25} duration={2} delay={0} />}+
                    </h1>
                    <p className="text-gray-200 font-semibold">Team Members</p>
                </div>
                <div className="">
                    <h1 className="text-gray-200 text-6xl font-bold">
                        {counterOn && <CountUp start={0} end={250} duration={2} delay={0} />}+
                    </h1>
                    <p className="text-gray-200 font-semibold">Cups of Tea</p>
                </div>
            </div>

        </ScrollTrigger>
    );
};

export default Counter;
