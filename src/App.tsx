import React, { useEffect } from 'react';
import './style/App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ReactGA from 'react-ga';

export const App: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize('UA-134670953-1');
    console.log();
    debugger;
  }, []);
  return (
    <div className='App'>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
