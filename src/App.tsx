import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
