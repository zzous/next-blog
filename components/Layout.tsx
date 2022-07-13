import Header from './common/Header';
import Footer from './common/Footer';
import Nav from './common/Nav';

import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const handleResize = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div id='wrap'>
      <Header />
      <Nav />
      <div id='container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}