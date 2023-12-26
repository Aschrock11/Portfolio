import Image from 'next/image';

const Landing = () => {
  return (
    <div
      id='home'
      className='flex flex-col items-center md:pb-24 scroll-mt-24 md:h-screen'
    >
      <h1 className='flex flex-col md:flex-row justify-center text-4xl text-center'>
        <span className='text-primary-color mr-4'>Hello!</span>
        My name is Adam Schrock
      </h1>
      <p className='flex justify-center text-lg p-4 dark:text-tertiary-color md:mb-4'>
        A Front-End Web Developer
      </p>
      <Image
        className='rounded-full'
        src={'/adamspixelme.jpg'}
        width={300}
        height={300}
        alt='image'
      />
      <div className='mt-8 flex justify-center gap-4'>
        <a href='https://github.com/Aschrock11'>
          <img
            className='w-10 h-10 dark:hidden'
            src='/github-mark/github-mark.svg'
          />
          <img
            className='w-10 h-10 hidden dark:inline-flex'
            src='/github-mark/github-mark-white.svg'
            alt=''
          />
        </a>
        <a href='https://www.linkedin.com/in/adam-s-05355b130'>
          <img
            className='w-10 h-10 dark:hidden'
            src='/linkedin.svg'
            alt='linkedin logo'
          />
          <img
            className='w-10 h-10 hidden dark:inline'
            src='/linkedin-white.svg'
            alt='linkedin logo'
          />
        </a>
      </div>
      <a href='#about'>
        <svg
          className='w-16 h-16 mt-6 md:mt-16 z-0 animate-bounce'
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
      </a>
    </div>
  );
};

export default Landing;
