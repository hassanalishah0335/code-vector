"use client"
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className="bg-black px-[10%] sm:py-[5%] py-[10%]">
            <h1 className=" text-4xl font-bold text-white">Our Achievements</h1>
            <div className="border-b-2 w-[100%] my-5" style={{ borderImage: 'linear-gradient(to right, #ffffff, #c000ff) 1' }}></div>
            <p className='pb-10 text-gray-300'>Our services enhance your online presence and user engagement through Web Development, Mobile Development, UI/UX Design, SEO, Digital Marketing, and Graphic Designing. We create robust websites, high-performance apps, seamless user experiences, improved search engine rankings, data-driven marketing campaigns, and captivating visuals, all tailored to your business goals.</p>

            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className=' grid lg:grid-cols-4  grid-cols-2 gap-5 ' id="about">
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
        </div>
    );
};

export default Counter;
