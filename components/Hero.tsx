
import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-8xl leading-tight mb-6 animate-fade-in">
            {PROFILE.name}
          </h1>
          <p className="text-gray-400 font-serif text-xl md:text-3xl italic">
            {PROFILE.titles.join(' & ')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-20">
          <div className="lg:col-span-3">
             <div className="space-y-8">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">Biography</p>
                    <p className="text-sm leading-relaxed text-gray-600">
                        {PROFILE.biography}
                    </p>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">Contact</p>
                    <p className="text-sm font-medium">{PROFILE.location}</p>
                    <p className="text-sm text-gray-500">{PROFILE.email}</p>
                    <p className="text-sm text-gray-500">{PROFILE.phone}</p>
                </div>
             </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group">
                <div className="w-64 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-[100px] border-8 border-white shadow-2xl relative z-10">
                    <img 
                        src="https://picsum.photos/seed/doctor/600/800" 
                        alt="Hyeonjin Cho" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gray-100 rounded-full -z-10 blur-2xl opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gray-200 rounded-full -z-10 blur-3xl opacity-30"></div>
            </div>
          </div>

          <div className="lg:col-span-3">
             <div className="grid grid-cols-1 gap-12 text-center lg:text-right">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Status</p>
                    <p className="font-serif text-5xl font-bold">MD</p>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Affiliation</p>
                    <p className="font-serif text-3xl font-bold leading-tight">Samsung Medical Center</p>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Research Focus</p>
                    <p className="font-serif text-2xl font-bold text-gray-700 italic">Digital Health</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
