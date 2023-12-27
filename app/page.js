import About from './components/About';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Projects from './components/Projects';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});
export default function Home({ Component, pageProps }) {
  return (
    <wrapper className={montserrat.className}>
      <main className='flex flex-col items-center w-full dark:bg-black '>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </main>
    </wrapper>
  );
}
