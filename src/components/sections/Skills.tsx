import { motion } from 'motion/react';
import { DATA_SKILLS } from '../../data/skill';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            Skills & Technologies
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs ml-2" />
        </div>

        {/* Description */}
        <p className="text-lg text-slate-400 mb-12 max-w-2xl">
          Here are a few technologies I've been working with recently:
        </p>

        {/* Skills List with Shadcn Card */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {DATA_SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.nama}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.08 }}
              >
                <Icon className="w-8 h-8 text-cyan-300/80 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
