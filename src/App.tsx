import { motion } from 'motion/react';
import Navbar from './components/layout/Navbar';
import SectionTitle from './components/ui/sectionTitle';
import { PROJECTS, SKILLS, EXPERIENCES } from './data';
import Footer from './components/layout/Footer';
import port1 from './assets/port1.jpeg'

const image = port1;

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      <Navbar />

      {/* Hero / About Section */}
      <section id="about" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center scroll-mt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block italic">Software Developer & System Analyst</span>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter leading-tight">
                HI, I'M <span className="text-blue-600">Muhammad Thoriq.</span> <br />
                <span className="text-zinc-500 text-3xl md:text-4xl">I Create Digital Solutions with Passion.</span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-lg max-w-2xl mb-12 leading-relaxed">
                I am a programmer who is currently active in creating and continuously exploring the vast world of technology. 
                Focused on digital development, I believe that every line of code is a step towards meaningful innovation.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center">
                  VIEW MY PROJECTS
                </a>
                <a href="#contact" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
                  GET IN TOUCH
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto group"
            >
              {/* Decorative background for photo */}
              <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full group-hover:bg-blue-600/30 transition-all" />
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <img 
                  src={image} 
                  alt="Thoriq" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-xl"
              >
                <div className="text-blue-500 font-bold text-xl">1+ Years</div>
                <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Experience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-black relative overflow-hidden scroll-mt-24">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle subtitle="Capabilities">My Technical Stack</SectionTitle>
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

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-black scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Journey">Work Experience</SectionTitle>
          <div className="space-y-12">
            {EXPERIENCES.length > 0 ? EXPERIENCES.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-4 md:gap-12 pb-12 border-b border-white/5 last:border-0"
              >
                <div className="md:w-1/4">
                  <div className="text-blue-500 font-bold">{exp.period}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <div className="text-xl text-zinc-300 mb-4">{exp.company}</div>
                  <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            )) : (
              <div className="text-zinc-500 italic">Experience details coming soon...</div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-900/30 border-t border-zinc-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Showcase">Featured Work</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.length > 0? PROJECTS.map((project, i) => (
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
                      className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                    >
                      VIEW PROJECT
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 text-[10px] font-bold uppercase tracking-widest rounded-full text-zinc-400 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h3>
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

      <Footer />
    </div>
  );
}
