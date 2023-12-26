import Image from 'next/image';
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center' id='contact'>
      <h1 className='text-center text-4xl  md:mb-8'>Contact me</h1>
      <div className='flex md:gap-12 justify-center'>
        <ContactForm />
        <div className='hidden md:flex'>
          <Image
            className='h-[400px]'
            src={'/laptop-office.jpg'}
            width={600}
            height={500}
            alt={'laptop on desk image'}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
