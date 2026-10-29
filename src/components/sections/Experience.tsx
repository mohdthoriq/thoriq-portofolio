import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_EXPERIENCES } from '../../data';
import { MapPin, Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCompany = COMPANY_EXPERIENCES[activeTab];

  return (
    <section id="experience" className="py-28 px-6 scroll-mt-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            My Experiences
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs ml-2" />
        </div>

        <p className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed">
          Riwayat perjalanan profesional, pengajaran, dan pengalaman kerja saya:
        </p>

        {/* Tab & Details Grid */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 min-h-[380px]">
          {/* Left: Company Sidebar Navigation using Buttons */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 border-white/10 md:w-60 shrink-0 gap-2 pb-3 md:pb-0 scrollbar-none">
            {COMPANY_EXPERIENCES.map((exp, idx) => {
              const isActive = idx === activeTab;
              return (
                <Button
                  key={exp.company}
                  variant={isActive ? 'default' : 'ghost'}
                  onClick={() => setActiveTab(idx)}
                  className={`relative justify-start h-12 px-4 text-left transition-all rounded-xl font-medium ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Building2 className={`w-4 h-4 mr-2.5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                  <span>{exp.company}</span>
                </Button>
              );
            })}
          </div>

          {/* Right: Experience Details using shadcn Card */}
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {activeCompany?.jobs.map((job, idx) => (
                  <Card key={idx} className="bg-slate-900/50 backdrop-blur-sm border-white/10 hover:border-blue-500/30 transition-all duration-300">
                    <CardHeader className="space-y-3 pb-4">
                      {/* Job Title and Company */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-xl md:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
                          <span>{job.role}</span>
                          <span className="text-blue-400 font-semibold text-lg">
                            @ {activeCompany.company}
                          </span>
                        </CardTitle>

                        {job.duration && (
                          <Badge variant="default" className="w-fit bg-emerald-500/15 text-emerald-400 border-emerald-500/30">
                            {job.duration}
                          </Badge>
                        )}
                      </div>

                      {/* Job Metadata Chips */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
                        <Badge variant="secondary" className="gap-1.5 py-1 px-2.5 text-xs">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.type}</span>
                        </Badge>

                        <Badge variant="secondary" className="gap-1.5 py-1 px-2.5 text-xs">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-slate-200">{job.period}</span>
                        </Badge>

                        <Badge variant="secondary" className="gap-1.5 py-1 px-2.5 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.location}</span>
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-2">
                      <ul className="space-y-3">
                        {job.description.map((desc, dIdx) => (
                          <li key={dIdx} className="text-slate-300 text-sm md:text-base leading-relaxed flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
