
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-xs rounded-sm">HC</div>
            <span className="font-serif font-bold text-lg tracking-tight">Hyeonjin Cho</span>
        </div>
        
        <div className="hidden md:flex space-x-10 text-xs font-semibold uppercase tracking-widest text-gray-500">
          <a href="#home" className="hover:text-black transition-colors">Home</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#research" className="hover:text-black transition-colors">Research</a>
          <a href="#projects" className="hover:text-black transition-colors">Projects</a>
          <a href="#contact" className="hover:text-black transition-colors border-b-2 border-black pb-1">Get in Touch</a>
        </div>
        
        <div className="flex space-x-4">
            <a href="mailto:guswls1775@skku.edu" className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
