import React from 'react';
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-accent w-[260px] sm:w-[300px] md:w-[350px] mx-auto'>
      <div>
        <Image
          className='w-full h-auto object-cover'
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className='p-4 space-y-2 sm:space-y-4'>
        <div className='text-2xl sm:text-3xl md:text-4xl font-extralight'>{title}</div>
        <div className='text-sm sm:text-base'>{desc}</div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((el) => (
            <div className='px-2 py-1 bg-accent-light text-xs sm:text-sm rounded' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
