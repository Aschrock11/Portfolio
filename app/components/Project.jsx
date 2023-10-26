import Image from 'next/image';
import React from 'react';

const Project = ({ src, title, skills, description, href }) => {
  return (
    <div className='flex flex-col items-center text-center border border-solid p-4 bg-slate-100 dark:bg-black'>
      <a href={href}>
        <Image
          className='pt-4 cursor-pointer'
          src={src}
          height={500}
          width={550}
          alt='image'
        />
      </a>

      <h2 className='text-2xl p-4'>{title}</h2>
      <div>{skills}</div>
      <div className='flex flex-col items-center '>
        <p className='w-4/5 pb-4'>{description}</p>
        <div className='flex gap-2 justify-center'>
          <a href={href}>
            <button className='border border-solid border-black rounded-lg p-2 hover:bg-slate-200'>
              Live Demo
            </button>
          </a>
          <a href={href}>
            <button className='border border-solid border-black rounded-lg p-2 hover:bg-slate-200'>
              Source
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
