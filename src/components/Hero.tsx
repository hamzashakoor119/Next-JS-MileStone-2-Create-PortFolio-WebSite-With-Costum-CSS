import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id='hero'
      className='min-h-screen bg-no-repeat bg-[url("/portfolio-pic.png")] bg-right lg:bg-[85%] bg-cover shadow shadow-white'
      style={{ backgroundSize: '35%', backgroundPosition: 'right 100px top 100px' }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)] px-4 sm:px-8 items-center'>
        
        {/* Left Column: Text */}
        <div className='flex flex-col justify-center lg:items-start text-center lg:text-left'>
          <p className='font-serif text-[20px] sm:text-[25px]'>
            Hi, I AM <span className='text-sky-400'>Hamza Shakoor</span>
          </p>
          <p className='text-sky-400 font-bold text-[30px] sm:text-[40px] md:text-[50px]'>
            Web Developer.
          </p>
          <p className='text-sky-400 font-bold text-[30px] sm:text-[40px] md:text-[50px]'>
            Software Engineer.
          </p>
          <br />
          <p className='w-full lg:w-[80%] xl:w-[60%] text-sm sm:text-base font-serif'>
            Hello! I am a Full Stack Web Developer, Software and Generative AI Engineer, and Data Analyst. I am passionate about
            creating innovative solutions and seeking an environment where I can showcase my talent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
