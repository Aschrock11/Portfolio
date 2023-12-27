import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import { ThemeProvider } from './providers/theme-provider';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Adam Schrock',
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <div className='p-8 dark:bg-black'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
