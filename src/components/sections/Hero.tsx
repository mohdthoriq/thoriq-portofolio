import { motion } from 'motion/react';
import { ArrowRight, Code2, Award } from 'lucide-react';
import { Button } from '../ui/button';

const image = 'https://res.cloudinary.com/djls97ux0/image/upload/v1793240070/portfolio/foto-personal.png';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center scroll-mt-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-slate-100">
              HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Muhammad Thoriq.</span> <br />
              <span className="text-slate-400 text-3xl md:text-4xl font-semibold">I Create Digital Solutions with Passion.</span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
              I am a programmer who is currently active in creating and continuously exploring the vast world of technology. 
              Focused on digital development, I believe that every line of code is a step towards meaningful innovation.
            </p>

            {/* Action buttons using shadcn Button */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="gap-2 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 rounded-xl font-medium"
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-white/10 hover:bg-white/5 text-slate-300 rounded-xl font-medium"
                onClick={() => {
                  const element = document.getElementById('skills');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Explore Skills</span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:ml-auto group"
          >
            {/* Decorative background glow for photo */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[70px] rounded-full group-hover:bg-blue-600/30 transition-all pointer-events-none" />
            <div className="relative w-full h-full rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img 
                src={image} 
                alt="Thoriq" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>

            {/* Floating Experience Badge using Card styling */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 bg-slate-900/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-blue-400 font-bold text-lg sm:text-xl leading-none">1+ Years</div>
                <div className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-widest font-semibold mt-1">Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
