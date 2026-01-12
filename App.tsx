
import React, { useEffect } from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Footer from './components/Footer.tsx';

function App() {
  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
      
      <a 
        href="mailto:guswls1775@skku.edu" 
        className="fixed bottom-8 right-8 z-50 bg-black text-white text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all hidden sm:block"
      >
        Send Inquiry →
      </a>
    </div>
  );
}

export default App;
