import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div
      id='projects'
      className='flex flex-col items-center md:scroll-mt-20 md:mt-16'
    >
      <h1 className='text-4xl mb-8'>Projects</h1>
      <div className='grid md:grid-cols-2'>
        <Project
          src={'/disney-clone-screenshot.png'}
          title={'Disney Clone'}
          description={
            'Fully responsive recreation of Disney+ using Firebase, Google Authenitcation and Styled Components.'
          }
          href={'https://disney-clone-remake.vercel.app'}
          gitHub={'https://github.com/Aschrock11/Disney-Clone-Remake'}
        />
        <Project
          src={'/airbnb-clone-screenshot.png'}
          title={'Airbnb Clone'}
          description={
            'Recreated Airbnb with full responsiveness using Tailwind and Mapbox technology.'
          }
          href={'https://airbnb-clone-rouge-chi.vercel.app/'}
          gitHub={'https://github.com/Aschrock11/Airbnb-clone'}
        />
        <Project
          src={'/currentfurnish-screenshot.png'}
          title={'Current Furnish'}
          description={
            'Responsive e-commerce website powered by Tailwind CSS, featuring a seamless checkout experience, sleek design and effortless navigation.'
          }
          href={'https://ecommerce-site-omega-five.vercel.app/'}
          gitHub={'https://github.com/Aschrock11/ecommerce-site'}
        />
        <Project
          src={'/car-rental-screenshot.png'}
          title={'Rent-a-Ride'}
          description={
            'Single-page car rental website, using TypeScript and Sass. Discover a responsive and visually appealing platform designed for user experience.'
          }
          href={'https://car-rental-ten-nu.vercel.app/'}
          gitHub={'https://github.com/Aschrock11/car-rental'}
        />
      </div>
    </div>
  );
};

export default Projects;
