import { motion } from 'motion/react';
import { SKILLS } from '../../data';

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-black relative overflow-hidden scroll-mt-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight !text-blue-500">
            My Technical Stack
          </h2>
          <div className="h-[1px] bg-zinc-800 flex-grow ml-4 max-w-xs" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-zinc-900/40 border border-white/5 p-10 rounded-[2.5rem] hover:bg-zinc-900/60 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600/10 group-hover:scale-110 transition-all duration-500">
                <div className="group-hover:text-blue-500 transition-colors">
                  {cat.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-1.5 bg-white/5 border border-white/5 text-sm font-medium rounded-full text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
