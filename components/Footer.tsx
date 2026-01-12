
import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-12 tracking-tighter">Let's work together.</h2>
        <a href={`mailto:${PROFILE.email}`} className="text-2xl md:text-4xl font-light underline underline-offset-8 hover:text-gray-400 transition-colors">
            {PROFILE.email}
        </a>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-500 font-medium">
            <div className="text-left">
                <p className="uppercase tracking-widest text-xs mb-4 text-gray-400">Location</p>
                <p>Seoul / Changwon, KR</p>
            </div>
            <div>
                <p className="uppercase tracking-widest text-xs mb-4 text-gray-400">Phone</p>
                <p>{PROFILE.phone}</p>
            </div>
            <div className="text-right">
                <p className="uppercase tracking-widest text-xs mb-4 text-gray-400">Social</p>
                <div className="flex justify-end space-x-6">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Google Scholar</a>
                </div>
            </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gray-600">
            <p>© {new Date().getFullYear()} HYEONJIN CHO. ALL RIGHTS RESERVED.</p>
            <p className="mt-4 md:mt-0 italic">Designed for Impact in Digital Health</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
