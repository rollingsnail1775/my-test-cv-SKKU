
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
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
      
      {/* Floating CTA for Contact - Emulating the "Get Template" button in original design */}
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
