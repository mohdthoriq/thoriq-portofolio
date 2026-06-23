import { motion } from 'motion/react';
import image from '../../assets/port1.jpeg';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center scroll-mt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block italic">Software Developer</span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter leading-tight">
              HI, I'M <span className="text-blue-600">Muhammad Thoriq.</span> <br />
              <span className="text-zinc-500 text-3xl md:text-4xl">I Create Digital Solutions with Passion.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-lg max-w-2xl mb-12 leading-relaxed">
              I am a programmer who is currently active in creating and continuously exploring the vast world of technology. 
              Focused on digital development, I believe that every line of code is a step towards meaningful innovation.
            </p>
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
  );
}
