
import React from 'react';
import { EXPERIENCES } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experiences" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Expériences Professionnelles</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic">Des résultats quantifiables et une expertise sectorielle forte.</p>
        </div>

        <div className="grid gap-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="group relative grid md:grid-cols-[1fr,300px] gap-8 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all">
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-bold mt-1">
                      <span>{exp.company}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1.5 bg-white rounded-full text-xs font-bold text-slate-500 border border-slate-100 shadow-sm">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-[10px] mt-0.5">
                        {i + 1}
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.metrics && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Impact Clé</h4>
                  <div className="space-y-6">
                    {exp.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-sm font-semibold text-slate-500">{m.label}</span>
                          <span className="text-xl font-black text-blue-600">{m.value}</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="bg-blue-600 h-full rounded-full transition-all duration-1000" 
                            style={{ width: `${60 + i * 15}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
