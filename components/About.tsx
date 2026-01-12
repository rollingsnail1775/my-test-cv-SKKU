
import React from 'react';
import { PROFILE, RESEARCH_INTERESTS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-100 pt-20 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-4xl mb-10 tracking-tight">Academic Profile</h2>
            <div className="space-y-6">
              {PROFILE.organizations.map((org: any, i) => {
                const innerContent = (
                  <>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{org.name}</p>
                    <p className="text-sm text-gray-500">{org.role}</p>
                  </>
                );

                return (
                  <div key={i} className="pb-6 border-b border-gray-50">
                    {org.url ? (
                      <a 
                        href={org.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block hover:opacity-60 transition-opacity"
                        title="Go to website"
                      >
                        {innerContent}
                      </a>
                    ) : (
                      innerContent
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 id="research" className="font-serif text-4xl mb-10 tracking-tight">Research Interests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {RESEARCH_INTERESTS.map((ri, i) => (
                <div key={i}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">{ri.category}</p>
                  <ul className="space-y-2">
                    {ri.items.map((item, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
