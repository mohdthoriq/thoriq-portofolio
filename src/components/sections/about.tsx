import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Award, Code2, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const photo = 'https://res.cloudinary.com/djls97ux0/image/upload/v1793240070/portfolio/foto-personal.png';

export default function About() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].about;

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            {t.title}
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs ml-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo with Card framing & Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative aspect-square w-full max-w-[260px] sm:max-w-[300px] group">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full group-hover:bg-blue-600/30 transition-all pointer-events-none" />

              {/* Photo Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-2xl bg-slate-900/60">
                <img
                  src={photo}
                  alt="Muhammad Thoriq"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-blue-400 font-bold text-base leading-none">
                    {t.experienceCard.years}
                  </div>
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold mt-1">
                    Experience
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p className="text-slate-400">{t.p2}</p>
            </div>

            {/* Feature Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Card className="p-4 bg-slate-900/50 backdrop-blur-sm border-white/10 hover:border-blue-500/30 transition-all">
                <CardContent className="p-0 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100">
                      {t.experienceCard.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {t.experienceCard.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 bg-slate-900/50 backdrop-blur-sm border-white/10 hover:border-blue-500/30 transition-all">
                <CardContent className="p-0 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-100">
                      {t.skillsCard.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {t.skillsCard.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
