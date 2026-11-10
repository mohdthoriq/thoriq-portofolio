import { motion } from 'motion/react';
import { ArrowRight, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <section id="hero" className="min-h-[85vh] pt-32 pb-20 px-6 flex flex-col justify-center scroll-mt-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start justify-start w-full"
        >
          {/* Role Badge */}
          <Badge
            variant="default"
            className="mb-6 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-500/10 text-blue-400 border-blue-500/20"
          >
            {t.role}
          </Badge>

          {/* Headline */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-tight leading-tight text-slate-100 w-full">
            {t.greeting} <span className="text-blue-500">Muhammad Thoriq.</span> <br />
            <span className="text-slate-400 text-xl sm:text-2xl md:text-3xl font-semibold">
              {t.tagline}
            </span>
          </h1>

          {/* Short Narrative */}
          <p className="w-full text-slate-400 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
            {t.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            <Button
              size="lg"
              className="gap-2 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 rounded-xl font-medium cursor-pointer px-6"
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>{t.viewWork}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white/10 hover:bg-white/5 text-slate-300 rounded-xl font-medium cursor-pointer px-6"
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <User className="w-4 h-4 text-cyan-400" />
              <span>{t.exploreAbout}</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
