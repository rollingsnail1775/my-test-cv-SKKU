
import React from 'react';
import { SKILLS, SOFT_SKILLS } from '../constants.ts';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-4xl mb-6">Capabilities</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Bridging clinical medicine, academic research, and modern digital tools to drive impact in public health.
            </p>
            <div className="space-y-8">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Languages</p>
                    {SKILLS.languages.map((lang, i) => (
                        <div key={i} className="mb-4">
                            <p className="text-sm font-semibold">{lang.name}</p>
                            <p className="text-xs text-gray-400">{lang.level}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">Data & Research Tools</p>
                <div className="space-y-10">
                    <div>
                        <p className="text-xs font-bold text-black uppercase tracking-widest mb-4">R Programming</p>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.dataAnalysis.map((s, i) => (
                                <span key={i} className="text-xs border border-gray-100 px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-default">{s}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-black uppercase tracking-widest mb-4">Metricwire & AI</p>
                        <div className="flex flex-wrap gap-2">
                            {[...SKILLS.researchTools, ...SKILLS.aiPrompt].map((s, i) => (
                                <span key={i} className="text-xs border border-gray-100 px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-default">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">Communication Style</p>
                <div className="space-y-6">
                    {SOFT_SKILLS.map((skill, i) => (
                        <div key={i} className="flex items-center space-x-4">
                            <div className="w-10 h-[1px] bg-black"></div>
                            <span className="text-sm font-medium italic">{skill}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-xs text-gray-400 leading-relaxed">
                        "상대방에 맞춰 격식 있고 정중한 표현을 선호하며, 문제의 근본 원인(Root Cause) 파악을 중시하는 학구적 태도를 견지합니다."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
