import Image from 'next/image';
import About from './components/About';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full '>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
