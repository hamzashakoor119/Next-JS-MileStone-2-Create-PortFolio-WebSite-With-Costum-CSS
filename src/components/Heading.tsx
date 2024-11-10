import React from 'react';

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className='text-center text-3xl sm:text-4xl md:text-5xl pb-4 sm:pb-6'>
      <p className='border-b-4 border-blue-500 inline-block pb-2'>{title}</p>
    </div>
  );
};

export default Heading;
