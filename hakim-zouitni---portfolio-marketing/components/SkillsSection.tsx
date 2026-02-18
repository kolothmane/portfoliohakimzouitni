
import React from 'react';
import { SKILLS, LANGUAGES, INTERESTS } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="competences" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Expertise <span className="text-blue-600">&</span> Compétences</h2>
            <div className="grid gap-6">
              {SKILLS.map((cat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-semibold rounded-xl border border-slate-100 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-8xl pointer-events-none">Langues</div>
              <h3 className="text-2xl font-bold mb-8">Maîtrise Linguistique</h3>
              <div className="space-y-6">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <div>
                      <div className="text-lg font-bold">{lang.name}</div>
                      <div className="text-slate-400 text-sm">{lang.level}</div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(dot => (
                        <div key={dot} className={`w-3 h-3 rounded-full ${dot <= (idx === 2 ? 4 : 5) ? 'bg-blue-500' : 'bg-slate-700'}`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Centres d'Intérêt</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {INTERESTS.map((interest, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:scale-105 transition-transform cursor-pointer">
                    <span className="text-3xl mb-3">{interest.icon}</span>
                    <span className="text-sm font-bold text-slate-700">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
