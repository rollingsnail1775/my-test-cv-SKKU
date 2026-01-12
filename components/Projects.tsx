
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <h2 className="font-serif text-5xl tracking-tight">Major Projects & Experience</h2>
            <p className="text-gray-400 text-sm max-w-xs uppercase tracking-widest leading-loose">
                Professional activities ranging from academic research to business strategy.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group cursor-default">
              <div className="overflow-hidden aspect-video bg-gray-100 mb-8 rounded-lg relative">
                <img 
                    src={`https://picsum.photos/seed/${project.title}/800/600`} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm text-[10px] font-bold uppercase tracking-wider">
                    {project.period}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed italic">"{project.description}"</p>
                <div className="pt-2 flex flex-wrap gap-2">
                    {project.role && <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium uppercase">{project.role}</span>}
                    {project.scale && <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium uppercase">{project.scale}</span>}
                    {project.status && <span className="text-[10px] bg-black text-white px-2 py-1 rounded font-medium uppercase">{project.status}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
