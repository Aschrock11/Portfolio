import Image from 'next/image';
import React from 'react';

const About = () => {
  const srcImages = [
    'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    'https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21.svg',
    'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
    'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg',
    '/next-js-icon-seeklogo.com.svg',
  ];
  return (
    <div className='md:flex md:gap-16 md:h-[700px] md:items-center'>
      <div className='flex flex-col items-center md:w-[600px]'>
        <h1 className='text-6xl md:mb-8'>About</h1>
        <p className='md:text-left md:text-2xl md:leading-8  '>
          I am a Front End Developer Based in Central Ohio.I Work with HTML,
          CSS, SASS, Javascript, React.JS, and most recently picked up
          Tailwindcss! I really enjoy learning new front-end technologies and
          making projects come to life!
        </p>
        <p className='mt-4 md:text-left md:text-2xl'>
          I also enjoy longboarding, Brazilian Jiu-Jitsu and gaming in my
          freetime!
        </p>
      </div>
      <div className='flex flex-col text-center p-4 md:p-0 md:w-[600px]'>
        <h1 className='text-6xl md:mb-8'>Skills</h1>
        <div className='flex justify-evenly'>
          <div className='grid grid-cols-4 gap-12 md:gap-16 md:h-60'>
            {srcImages.map((image) => (
              <Image
                src={image}
                alt={'image'}
                key={image}
                width={75}
                height={75}
                style={{ objectFit: 'contain' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
