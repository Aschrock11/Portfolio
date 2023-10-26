'use client';
import React, { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

function Header() {
  return (
    <div
      className={
        'flex justify-between z-10 sticky top-0 p-10 shadow-xl bg-white dark:bg-black'
      }
    >
      <div className='text-4xl dark:text-primary-color'>
        <a href='#home'>AS</a>
      </div>
      <div className='flex justify-evenly gap-4 items-center'>
        <div className='cursor-pointer'>
          <a href='#about'>About</a>
        </div>
        <div className='cursor-pointer'>
          <a href='#projects'>Projects</a>
        </div>
        <div className='cursor-pointer'>
          <a href='#contact'>Contact Me</a>
        </div>
        <div className='cursor-pointer'>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Header;
