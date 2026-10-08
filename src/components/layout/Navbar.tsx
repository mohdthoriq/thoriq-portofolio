import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import photo from "../../assets/logo.png";

const logo = photo;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled
          ? 'glass-nav py-3 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-bold text-xl overflow-hidden p-1 shadow-md">
            <img src={logo} alt="logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-100 hidden sm:block">Muhammad Thoriq</span>
        </motion.div>

        <div className="glass-panel px-6 py-2 rounded-full hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

