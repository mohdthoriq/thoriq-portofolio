import { motion } from 'motion/react';
import { PROJECTS } from '../../data';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs ml-2" />
        </div>

        {/* Description */}
        <p className="text-lg text-slate-400 mb-12 max-w-2xl">
          Here are some of the projects and digital solutions I've created:
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.length > 0 ? PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-900/50 border border-white/10 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs hover:scale-105 transition-transform uppercase tracking-wider"
                  >
                    VIEW PROJECT
                  </a>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-[10px] font-bold uppercase tracking-widest rounded-full text-zinc-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          )) : (
            <div className="text-zinc-500 italic">Projects details coming soon...</div>
          )}
        </div>
      </div>
    </section>
  );
}

