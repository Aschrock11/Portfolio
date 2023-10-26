import Image from 'next/image';

const Landing = () => {
  return (
    <div className='flex flex-col items-center md:pb-24'>
      <h1 className='flex justify-center text-4xl text-center'>
        Hello! My name is Adam Schrock
      </h1>
      <p className='flex justify-center text-lg p-4'>
        A Front-End Web Developer
      </p>
      <Image
        className='p-4'
        src={'/istockphoto-1335941248-612x612.jpeg'}
        width={500}
        height={500}
        alt='image'
      />
      <div className='flex justify-center gap-4'>
        <img
          className='w-10 h-10 dark:hidden'
          src='/github-mark/github-mark.svg'
        />
        <img
          className='w-10 h-10 hidden dark:inline-flex'
          src='/github-mark/github-mark-white.svg'
          alt=''
        />
        <img className='w-10 h-10' src='/Linkedin-logos/Li-in-Bug.png' alt='' />
      </div>
      <svg
        className='w-16 h-16 mt-8 md:mt-12 z-0 animate-bounce'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    </div>
  );
};

export default Landing;
