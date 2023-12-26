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
    <div
      id='about'
      className='lg:flex md:items-center md: scroll-mt-2 md:gap-8 md:h-screen'
    >
      <div className='flex flex-col items-center md:flex-1 p-4'>
        <h1 className='text-4xl'>About Me</h1>
        <p className='text-center md:text-left md:text-2xl md:leading-8 max-w-[500px] '>
          I am a Front End Developer Based in Central Ohio. I Work with HTML,
          CSS, SASS, Javascript, React.JS, and most recently picked up
          Tailwindcss! I really enjoy learning new front-end technologies and
          making projects come to life!
        </p>
        <p className='text-center mt-4 md:text-left md:text-2xl max-w-[500px]'>
          I also enjoy travel, tennis, and gaming in my freetime!
        </p>
      </div>
      <div className='flex flex-col text-center'>
        <h1 className='text-4xl md:text-6xl mb-8'>Skills</h1>
        <div className='flex justify-evenly'>
          <div className='grid grid-cols-4 sm:gap-10 md:gap-20'>
            {srcImages.map((image) => (
              <Image
                className='hover:scale-150 transition-all'
                src={image}
                alt={image}
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
