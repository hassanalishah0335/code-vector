"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_kph37is', 'template_b3u57he', form.current, {
                publicKey: 'n47DjWdZJYwy9gZVW',
            })
            .then(
                () => {
                    alert('Email Send!');
                    form.current.reset();
                },
                (error) => {
                    alert('Unable to Send the Email', error.text);
                },
            );
    };

    return (
        <div className="px-[10%] py-[5%]" id="contact">
            <h1 className="text-5xl font-bold">Inquire Now<span className='text-7xl text-gray-500'>.</span></h1>
            <p className="text-xl font-semibold">Need to get in touch with us? Either fill out the form with your inquiry or contact on us on our email. We will surely love to assist you in resolving your problems.</p>
            <form ref={form} className='flex flex-col mt-5 gap-5' onSubmit={sendEmail}>
                <div className="flex flex-wrap justify-between gap-5 ">
                    <div className="flex flex-col w-96 ">
                    <label className='text-xl'>Name</label>
                    <input type="text" name="user_name" className='border border-gray-300 w-full h-10' placeholder=' E.g Anne Hathaway' required />
                    </div>
                    <div className="flex flex-col w-96 ">
                    <label className='text-xl'>Email</label>
                    <input type="email" name="user_email" className='border border-gray-300 w-full h-10' placeholder=' E.g annehathaway@gamil.com' required />
                    </div>
                    <div className="flex flex-col w-96 ">
                    <label className='text-xl'>Phone Number</label>
                    <input type="tel" name="user_phone" className='border border-gray-300 w-full h-10' placeholder=' E.g +44-7763-476849' required />
                    </div>
                </div>
                <div className="flex flex-wrap gap-5">
                    <div className="w-[49%]">
                    <label className='text-xl' for="cars">Service Needed</label>
                    <select name="cars" className='border border-gray-300 w-full h-10' required>
                        <option value="">Select Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">Mobile Development</option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="SEO">SEO</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Graphic Designing">Graphic Designing</option>
                    </select>
                    </div>
                    <div className="w-[49%]">
                    <label className='text-xl' for="cars">Budget</label>
                    <select name="car" className='border border-gray-300 w-full h-10' required>
                        <option value="">Select Budget</option>
                        <option value="less then $1,000">less then $1,000</option>
                        <option value="$1,000-$5,000">$1,000-$5,000</option>
                        <option value="$5,000-$10,000">$5,000-$10,000</option>
                        <option value="$10,000-$20,000">$10,000-$20,000</option>
                        <option value="above $20,000">above $20,000</option>
                    </select>
                    </div>
                </div>
                <div className="flex flex-col w-full items-start">
                <label className='text-xl'>Message</label>
                <textarea name="message" className='border border-gray-300 w-full h-40' placeholder='Type your Message here...' required />
                <input type="submit" className='bg-black text-gray-300 p-3 hover:opacity-70 active:opacity-50 cursor-pointer my-5 font-semibold w-20 text-xl' value="Send" />
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
