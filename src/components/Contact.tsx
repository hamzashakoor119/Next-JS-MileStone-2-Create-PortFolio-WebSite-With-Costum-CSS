import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { BsTelephoneOutbound } from 'react-icons/bs';
import Link from 'next/link';

const Contect = () => {
  return (
    <div id='contact' className='pt-16 sm:pt-24 lg:pt-32 container px-4 sm:px-8'>
      <div className='grid gap-10 lg:grid-cols-2'>
        {/* Contact Information */}
        <div className='space-y-6 sm:space-y-8'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl'>Get In Touch</h2>
          <p className='text-gray-400 text-base sm:text-lg pt-2'>
            You can reach out to me for expertise in web development, including front-end, back-end,
            and full-stack solutions. I also offer services for software development, utilizing
            cutting-edge technologies to build efficient and innovative solutions.
          </p>
          <div className='flex gap-3 items-center text-white cursor-pointer'>
            <IoIosMail size={25} /> hamzashakoor119@gmail.com
          </div>
          <div className='flex gap-3 items-center text-white cursor-pointer'>
            <BsTelephoneOutbound size={25} /> +923052334794
          </div>
        </div>

        {/* Contact Form */}
        <div className='space-y-6 sm:space-y-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              id='name'
              placeholder='Type Your Full Name'
              className='h-[40px] bg-transparent pl-2 border border-accent rounded-md'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email :</label>
            <input
              type='text'
              id='email'
              placeholder='Type Your Phone No'
              className='h-[40px] bg-transparent pl-2 border border-accent rounded-md'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='msg'>Message :</label>
            <textarea
              placeholder='Type Msg For Me'
              className='bg-transparent pl-2 border border-accent rounded-md'
              id='msg'
              rows={6}
            ></textarea>
          </div>
          <button className='relative transition-transform duration-200 hover:-translate-y-0.5 bg-blue-500 hover:bg-blue-800 text-white w-[70px] sm:w-[90px] rounded font-serif py-1'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contect;
