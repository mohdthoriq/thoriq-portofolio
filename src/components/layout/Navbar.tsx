import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import photo from '../../assets/logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const { language, setLanguage } = useLanguage();

  React.useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hindari perlakuan aneh saat rubber-banding / bounce di mobile
      if (currentScrollY < 0) return;

      // Status scrolled untuk latar belakang navbar
      setIsScrolled(currentScrollY > 20);

      // Selalu munculkan navbar saat di puncak halaman
      if (currentScrollY <= 20) {
        setIsVisible(true);
        prevScrollY = currentScrollY;
        return;
      }

      const diff = currentScrollY - prevScrollY;

      // Tampilkan navbar segera jika scroll ke atas minimal 4px
      if (diff < -4) {
        setIsVisible(true);
        prevScrollY = currentScrollY;
      }
      // Sembunyikan navbar jika scroll ke bawah minimal 8px
      else if (diff > 8) {
        setIsVisible(false);
        prevScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll saat sidebar mobile terbuka
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: language === 'ID' ? 'Tentang' : 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: language === 'ID' ? 'Pengalaman' : 'Experience', href: '#experience' },
    { label: language === 'ID' ? 'Proyek' : 'Projects', href: '#projects' },
    { label: language === 'ID' ? 'Kontak' : 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isVisible || mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
            className="flex items-center gap-3 transition-opacity hover:opacity-90 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-md">
              <img src={photo} alt="Muhammad Thoriq Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-100">
                Muhammad Thoriq
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="hover:text-slate-100 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher Toggle (Pill style) */}
            <div className="flex items-center p-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setLanguage('ID')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'ID'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage('EN')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'EN'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Glowing Resume Button with animated border beam */}
            <div className="relative rounded-xl p-[1.5px] overflow-hidden group/btn">
              {/* Static border base */}
              <div
                className="absolute inset-0 rounded-xl border border-blue-500/30"
                aria-hidden="true"
              />

              {/* Animated blue/cyan gradient border beam */}
              <div
                className="absolute -inset-[200%] animate-[spin_4s_linear_infinite] motion-reduce:hidden bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_280deg,#3b82f6_320deg,#06b6d4_340deg,transparent_360deg)] opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              <a
                href="/CV - Muhammad Thoriq.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="default"
                  size="sm"
                  className="relative rounded-[11px] bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs gap-1.5 px-4 py-2 cursor-pointer shadow-md shadow-blue-500/25"
                >
                  <HiOutlineDocumentText className="size-4" />
                  <span>Resume</span>
                </Button>
              </a>
            </div>
          </nav>

          {/* Mobile Right Controls: Language Toggle + Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-2">
            <div className="flex items-center p-0.5 rounded-full bg-slate-900/80 border border-white/10">
              <button
                type="button"
                onClick={() => setLanguage('ID')}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-full transition-all duration-200 ${
                  language === 'ID' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage('EN')}
                className={`px-2 py-0.5 text-[11px] font-bold rounded-full transition-all duration-200 ${
                  language === 'EN' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 focus:outline-hidden cursor-pointer"
              aria-label="Buka menu"
            >
              <HiOutlineMenuAlt3 className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Right Drawer / Sidebar untuk Mobile Screen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop overlay gelap dengan efek blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Sidebar drawer konten dari sisi kanan */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className="relative w-[78%] max-w-sm h-full bg-slate-950/95 border-l border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col justify-between p-6 z-10"
            >
              {/* Header Sidebar: Logo + Close Button */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-md">
                      <img src={photo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-bold text-sm text-slate-100">
                      Muhammad Thoriq
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                    aria-label="Tutup menu"
                  >
                    <HiOutlineX className="size-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-1.5 pt-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Actions: Language Switcher & Resume CTA Button */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                {/* Switcher Bahasa di dalam sidebar */}
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs text-slate-400 font-medium">
                    {language === 'ID' ? 'Pilih Bahasa' : 'Language'}
                  </span>
                  <div className="flex items-center p-0.5 rounded-full bg-slate-900 border border-white/10">
                    <button
                      type="button"
                      onClick={() => setLanguage('ID')}
                      className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                        language === 'ID' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      ID
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage('EN')}
                      className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                        language === 'EN' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                {/* Resume Download/Open CTA */}
                <a
                  href="/CV - Muhammad Thoriq.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button
                    className="w-full rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white justify-center gap-2 py-3 cursor-pointer shadow-lg shadow-blue-500/25"
                  >
                    <HiOutlineDocumentText className="size-4" />
                    <span>Resume</span>
                  </Button>
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
