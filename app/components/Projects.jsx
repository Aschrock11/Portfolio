import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-6xl'>Projects</h1>
      <div className='grid md:grid-cols-2'>
        <Project
          src={'/disney-clone-screenshot.png'}
          title={'Disney Clone'}
          description={
            'Fully responsive recreation of Disney+ using Firebase, Google Authenitcation and Styled Components'
          }
          href={'https://disney-clone-remake.vercel.app'}
        />
        <Project
          src={'/airbnb-clone-screenshot.png'}
          title={'Air BnB Clone'}
          description={''}
          href={'https://airbnb-clone-rouge-chi.vercel.app/'}
        />
        <Project
          src={'/currentfurnish-screenshot.png'}
          title={'Current Furnish'}
          description={''}
          href={'https://ecommerce-site-omega-five.vercel.app/'}
        />
        <Project
          src={'/car-rental-screenshot.png'}
          title={'Disney Clone'}
          description={''}
          href={'https://car-rental-ten-nu.vercel.app/'}
        />
      </div>
    </div>
  );
};

export default Projects;
