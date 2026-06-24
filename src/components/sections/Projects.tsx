import { motion } from 'motion/react';
import { PROJECTS } from '../../data';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-900/30 border-t border-zinc-800 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight !text-blue-500">
            Featured Work
          </h2>
          <div className="h-[1px] bg-zinc-800 flex-grow ml-4 max-w-xs" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.length > 0 ? PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-900/50 border border-white/10 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
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
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
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
