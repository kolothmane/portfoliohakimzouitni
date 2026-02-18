
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold tracking-tight text-slate-900">
          HZ<span className="text-blue-600">.</span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600 uppercase tracking-widest">
          <a href="#experiences" className="hover:text-blue-600 transition-colors">Expériences</a>
          <a href="#competences" className="hover:text-blue-600 transition-colors">Compétences</a>
          <a href="#formation" className="hover:text-blue-600 transition-colors">Formation</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          Discutons
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
