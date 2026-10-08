import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Seamless Ambient Background Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-[-10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] bg-indigo-600/10 blur-[160px] rounded-full" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}


