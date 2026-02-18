
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import Assistant from './components/Assistant';
import { EDUCATION } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <ExperienceSection />
      
      <SkillsSection />

      <section id="formation" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Formation</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                <span className="absolute top-8 right-8 text-slate-300 font-bold">{edu.period}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                <p className="text-blue-600 font-bold mb-4">{edu.school}</p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {edu.location}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Filière</span>
                  <p className="text-slate-600 font-medium">{edu.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-950 text-white py-20 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12">Travaillons ensemble sur vos projets.</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">Email</p>
              <a href="mailto:hakim@zouitni.fr" className="text-lg font-bold hover:text-blue-400 transition-colors">hakim@zouitni.fr</a>
            </div>
            
            <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">Téléphone</p>
              <a href="tel:+33780339668" className="text-lg font-bold hover:text-blue-400 transition-colors">+33 7 80 33 96 68</a>
            </div>
            
            <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">LinkedIn</p>
              <a href="https://linkedin.com/in/hakim.zouitni" target="_blank" className="text-lg font-bold hover:text-blue-400 transition-colors">in/hakim.zouitni</a>
            </div>
          </div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Hakim Zouitni. Tous droits réservés.
          </p>
        </div>
      </footer>

      <Assistant />
    </div>
  );
};

export default App;
