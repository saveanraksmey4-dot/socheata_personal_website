import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Resume />
              <Contact />
            </>
          } />
          <Route path="/about" element={<div className="pt-24"><About /></div>} />
          <Route path="/resume" element={<div className="pt-24"><Resume /></div>} />
          <Route path="/contact" element={<div className="pt-24"><Contact /></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
