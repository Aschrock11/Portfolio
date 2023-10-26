import Image from 'next/image';
import React from 'react';

const Project = ({ src, title, skills, description, href }) => {
  return (
    <div className='flex flex-col items-center text-center border border-solid p-8 bg-slate-100 dark:bg-black'>
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
            <button className='flex items-center border border-solid dark:border-white border-black rounded-lg p-2 hover:bg-slate-200 transition-colors'>
              <svg
                className='mr-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>
              Live Demo
            </button>
          </a>
          <a href={href}>
            <button className='flex items-center border border-solid dark:border-white border-black rounded-lg p-2 hover:bg-slate-200 transition-colors'>
              <svg
                className='mr-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z'
                />
              </svg>
              Source
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
