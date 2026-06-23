import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
// import Playground from './components/sections/Playground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 selection:text-white scrollbar-hide">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[150px] rounded-full" />
      </div>

      <Navbar />

      <Hero />
      <Skills />
      <Experience />
      <Projects />
      {/* <Playground /> */}

      <Footer />
    </div>
  );
}

