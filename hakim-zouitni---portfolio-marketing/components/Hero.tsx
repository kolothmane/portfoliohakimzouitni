
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-indigo-100/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-blue-600 bg-blue-50 rounded-full">
            Disponible dès maintenant
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Hakim <span className="text-gradient">Zouitni</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Marketeur passionné par la donnée et l'optimisation stratégique. 
            Basé en Île-de-France, j'accompagne les entreprises dans la compréhension de leurs marchés.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#experiences" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">
              Voir mon parcours
            </a>
            <a href="https://linkedin.com/in/hakim.zouitni" target="_blank" className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 font-bold rounded-2xl hover:border-slate-300 transition-all flex items-center gap-2">
              LinkedIn
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-full aspect-square max-w-[450px] mx-auto bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative group">
            <img 
              src="https://i.imgur.com/Wfz3JaE.jpeg" 
              alt="Hakim Zouitni" 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
          </div>
          {/* Floating stats badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl glass-morphism border border-white/50 hidden md:block">
            <div className="text-3xl font-extrabold text-blue-600">5+</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Processus Automatisés</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
