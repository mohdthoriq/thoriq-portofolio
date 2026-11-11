import * as React from 'react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { HiArrowRight, HiSparkles } from 'react-icons/hi2';
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
            </div>

            {/* Glowing CTA Button with animated border beam */}
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

              <Button
                variant="default"
                size="sm"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="relative rounded-[11px] bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs gap-2 px-4 py-2 cursor-pointer shadow-md shadow-blue-500/25"
              >
                <span>{language === 'ID' ? 'Hubungi Saya' : 'Contact Me'}</span>
                <HiArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </Button>
            </div>
          </nav>

          {/* Mobile Right Controls: Language Toggle + Menu Button */}
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 focus:outline-hidden cursor-pointer"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? <HiOutlineX className="size-6" /> : <HiOutlineMenuAlt3 className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Button
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="w-full rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white justify-center gap-2"
              >
                <HiSparkles className="size-4" />
                <span>{language === 'ID' ? 'Hubungi Saya' : 'Contact Me'}</span>
                <HiArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
