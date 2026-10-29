import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import photo from '../../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <Card
      className={`fixed top-0 left-0 right-0 z-50 rounded-none border-x-0 border-t-0 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl py-2'
          : 'bg-transparent border-b-transparent shadow-none py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand / Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <Card className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md">
            <img src={photo} alt="logo" className="w-full h-full object-contain" />
          </Card>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-slate-100">
              Muhammad Thoriq
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation using Shadcn Buttons within a Pill Card */}
        <Card className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border-white/10 shadow-lg">
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              size="sm"
              className="text-xs font-semibold rounded-full px-4 h-8 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </Button>
          ))}
        </Card>

        {/* CTA Contact Button on Desktop */}
        <div className="hidden md:flex items-center gap-2">

          <Button
            size="sm"
            className="rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-4 h-8 shadow-md shadow-blue-500/20"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Hamburger Toggle using Shadcn Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl border-white/10 bg-slate-900/80 text-slate-300"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiOutlineX className="w-5 h-5 text-slate-200" />
            ) : (
              <HiOutlineMenuAlt3 className="w-5 h-5 text-slate-200" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu using Shadcn Card & Buttons */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 pt-3 pb-4"
          >
            <Card className="p-3 bg-slate-900/95 backdrop-blur-xl border-white/10 shadow-2xl flex flex-col gap-1 rounded-2xl">
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full justify-start text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-xl h-10 px-3"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </Button>
              ))}
              <div className="pt-2 border-t border-white/5 mt-1">
                <Button
                  className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold h-10"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
