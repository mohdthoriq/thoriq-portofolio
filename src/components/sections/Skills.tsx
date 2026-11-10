import { motion } from 'motion/react';
import { DATA_SKILLS } from '../../data/skill';
import { Card, CardContent } from '../ui/card';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const SKILL_LABELS: Record<string, string> = {
  html: 'HTML5',
  css: 'CSS3',
  js: 'JavaScript',
  tailwind: 'TailwindCSS',
  typescript: 'TypeScript',
  react: 'React',
  reactnative: 'React Native',
  nodejs: 'Node.js',
  nextjs: 'Next.js',
};

export default function Skills() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].skills;

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            {t.title}
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs ml-2" />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
          {t.description}
        </p>

        {/* Skills Pills: fit content, compact, font-mono styled like reference */}
        <div className="flex flex-wrap items-center gap-3">
          {DATA_SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            const displayName = SKILL_LABELS[skill.nama] || skill.nama;
            return (
              <motion.div
                key={skill.nama}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.25 }}
                whileHover={{ y: -2, scale: 1.03 }}
              >
                <Card className="rounded-xl border border-blue-500/20 bg-slate-900/60 backdrop-blur-md hover:border-cyan-400/50 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-200 group cursor-default">
                  <CardContent className="px-4 py-2.5 flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-slate-300 group-hover:text-cyan-200 transition-colors whitespace-nowrap">
                      {displayName}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
