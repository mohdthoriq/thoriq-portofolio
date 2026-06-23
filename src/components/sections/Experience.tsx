import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_EXPERIENCES } from '../../data';
import { MapPin, Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const activeCompany = COMPANY_EXPERIENCES[activeTab];

  return (
    <section id="experience" className="py-28 px-6 bg-black scroll-mt-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          {/* <span className="font-mono text-xl md:text-2xl text-cyan-400 font-bold">02.</span> */}
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            My Experiences
          </h2>
          <div className="h-[1px] bg-zinc-800 flex-grow ml-4 max-w-xs" />
        </div>

        {/* Tab & Details Grid */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 min-h-[400px]">
          {/* Left: Sidebar Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 border-zinc-800 md:border-l border-zinc-800/80 md:w-64 shrink-0 pb-2 md:pb-0 scrollbar-none">
            {COMPANY_EXPERIENCES.map((exp, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(idx)}
                  className={`relative text-left px-5 py-4 text-sm font-medium transition-all duration-300 whitespace-nowrap md:whitespace-normal outline-none focus:outline-none ${
                    isActive 
                      ? 'text-cyan-400 bg-cyan-950/10' 
                      : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30'
                  }`}
                >
                  {/* Sliding selection bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 bottom-0 md:bottom-auto md:top-0 h-[2px] md:h-full w-full md:w-[3px] bg-cyan-400"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="font-mono">{exp.company}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Experience Details Timeline */}
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12 pl-2 relative"
              >
                {/* Timeline connector line */}
                {activeCompany.jobs.length > 1 && (
                  <div className="absolute left-[7px] top-6 bottom-6 w-[2px] bg-zinc-800 pointer-events-none" />
                )}

                {activeCompany.jobs.map((job, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Circle timeline bullet */}
                    <div className="absolute left-0 top-1.5 w-[16px] h-[16px] rounded-full border-2 border-cyan-400 bg-black group-hover:bg-cyan-400 transition-colors duration-300 z-10 flex items-center justify-center">
                      <div className="w-[6px] h-[6px] rounded-full bg-black group-hover:bg-black transition-colors" />
                    </div>

                    {/* Job content */}
                    <div>
                      {/* Role & Company Header */}
                      <h3 className="text-xl md:text-2xl font-bold text-white flex flex-wrap items-center gap-1.5 leading-tight">
                        <span>{job.role}</span>
                        <span className="text-cyan-400 font-semibold">@ {activeCompany.company}</span>
                      </h3>

                      {/* Job Metadata */}
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs md:text-sm text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                          {job.type}
                        </span>
                        
                        <span className="text-zinc-600 hidden md:inline">•</span>

                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                          <span className="text-zinc-300">{job.period}</span>
                          {job.duration && (
                            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded text-[11px]">
                              {job.duration}
                            </span>
                          )}
                        </span>
                      </div>

                      {/* Location Info */}
                      <div className="mt-1.5 flex items-center gap-1 text-xs text-zinc-500">
                        <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                        <span>{job.location}</span>
                      </div>

                      {/* Description Bullet Points */}
                      <ul className="mt-5 space-y-3">
                        {job.description.map((desc, dIdx) => (
                          <li key={dIdx} className="text-zinc-400 text-sm md:text-base leading-relaxed flex items-start gap-2.5">
                            <span className="text-cyan-400 mt-1.5 select-none text-[8px] shrink-0">▪</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
