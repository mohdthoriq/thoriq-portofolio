import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${scrolled
        ? 'bg-black/60 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">T</div>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">Muhammad Thoriq</span>
        </motion.div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-2 rounded-full hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a
          href="contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all cursor-pointer"
        >
          LET'S TALK
        </motion.a>
      </div>
    </nav>
  );
}
