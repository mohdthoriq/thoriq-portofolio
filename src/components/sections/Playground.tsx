import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, Sparkles, Copy, Check, RefreshCw, Play, Terminal } from 'lucide-react';

export default function Playground() {
  const [activeTab, setActiveTab] = useState<'particles' | 'glass' | 'terminal'>('particles');

  return (
    <section id="playground" className="py-28 px-6 bg-zinc-950/40 border-t border-zinc-900 scroll-mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xl md:text-2xl text-blue-500 font-bold">03.</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Hasil Coba-Coba <span className="text-zinc-500 text-2xl font-normal">(Lab Playground)</span>
          </h2>
          <div className="h-[1px] bg-zinc-800 flex-grow ml-4 max-w-xs" />
        </div>

        {/* Introduction */}
        <p className="text-zinc-400 max-w-2xl text-sm md:text-base mb-10 leading-relaxed">
          Seksi ini adalah taman bermain eksperimental untuk mencoba konsep interaktif di frontend. 
          Silakan coba widget interaktif di bawah ini untuk melihat hasil eksperimen saya secara langsung!
        </p>

        {/* Playground Tab Controls */}
        <div className="flex gap-2 p-1.5 bg-zinc-900/80 border border-white/5 rounded-2xl mb-8 w-fit">
          <button
            onClick={() => setActiveTab('particles')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'particles'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Particle Physics</span>
          </button>
          
          <button
            onClick={() => setActiveTab('glass')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'glass'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Glassmorphism Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'terminal'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Code Simulator</span>
          </button>
        </div>

        {/* Tab Canvas/Display Area */}
        <div className="bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden min-h-[480px] flex flex-col">
          <AnimatePresence mode="wait">
            {activeTab === 'particles' && <ParticleSandbox />}
            {activeTab === 'glass' && <GlassGenerator />}
            {activeTab === 'terminal' && <TerminalSimulator />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   WIDGET 1: PARTICLE PHYSICS SANDBOX
   ========================================== */
function ParticleSandbox() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState<number>(1.5);
  const [color, setColor] = useState<string>('#00b4d8');
  const [density, setDensity] = useState<number>(80);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];
    let mouse = { x: null as number | null, y: null as number | null, radius: 120 };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      baseColor: string;

      constructor(x: number, y: number, baseColor: string) {
        this.x = x;
        this.y = y;
        this.directionX = (Math.random() - 0.5) * speed;
        this.directionY = (Math.random() - 0.5) * speed;
        this.size = Math.random() * 4 + 1.5;
        this.baseColor = baseColor;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.baseColor;
        ctx.shadowColor = this.baseColor;
        ctx.shadowBlur = 4;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Mouse collision interaction
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Push particles away
            this.x -= (dx / distance) * force * 5;
            this.y -= (dy / distance) * force * 5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < density; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y, color));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      // Connect close particles with lines
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 75) {
            opacityValue = 1 - distance / 75;
            ctx.strokeStyle = `rgba(${hexToRgb(color)}, ${opacityValue * 0.25})`;
            ctx.shadowBlur = 0;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Helper hex to rgb
    const hexToRgb = (hex: string) => {
      let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 180, 216';
    };

    // Responsive Canvas Resize
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      canvas.width = containerRef.current.clientWidth;
      canvas.height = 400;
      init();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [speed, color, density]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 md:p-8 flex flex-col md:grid md:grid-cols-4 gap-8 flex-grow"
    >
      {/* Simulation Screen */}
      <div ref={containerRef} className="md:col-span-3 bg-black/60 rounded-2xl relative overflow-hidden border border-white/5 min-h-[300px]">
        <canvas ref={canvasRef} className="block w-full h-[400px] cursor-crosshair" />
        <div className="absolute bottom-4 left-4 bg-zinc-900/95 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-zinc-400 pointer-events-none select-none">
          💡 Dekatkan mouse ke partikel untuk memberi daya tolak magnetik.
        </div>
      </div>

      {/* Controllers */}
      <div className="flex flex-col gap-6 justify-center bg-zinc-900/30 border border-white/5 p-6 rounded-2xl">
        <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Sliders className="w-4 h-4 text-blue-500" /> Options
        </h4>

        {/* Speed */}
        <div>
          <label className="text-xs text-zinc-400 flex justify-between mb-1.5 font-mono">
            <span>Velocity</span>
            <span className="text-blue-400 font-bold">{speed}x</span>
          </label>
          <input 
            type="range" 
            min="0.5" 
            max="4" 
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        {/* Density */}
        <div>
          <label className="text-xs text-zinc-400 flex justify-between mb-1.5 font-mono">
            <span>Density</span>
            <span className="text-blue-400 font-bold">{density} dot</span>
          </label>
          <input 
            type="range" 
            min="30" 
            max="150" 
            step="5"
            value={density}
            onChange={(e) => setDensity(parseInt(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        {/* Colors */}
        <div>
          <label className="text-xs text-zinc-400 block mb-2 font-mono">Color Theme</label>
          <div className="flex gap-2">
            {[
              { hex: '#00b4d8', name: 'Cyan' },
              { hex: '#10b981', name: 'Emerald' },
              { hex: '#8b5cf6', name: 'Purple' },
              { hex: '#f43f5e', name: 'Rose' },
            ].map((theme) => (
              <button
                key={theme.hex}
                onClick={() => setColor(theme.hex)}
                style={{ backgroundColor: theme.hex }}
                title={theme.name}
                className={`w-7 h-7 rounded-full border-2 transition-all ${
                  color === theme.hex ? 'border-white scale-110 shadow-lg' : 'border-transparent hover:scale-105'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================
   WIDGET 2: GLASSMORPHISM CARD GENERATOR
   ========================================== */
function GlassGenerator() {
  const [blur, setBlur] = useState<number>(10);
  const [opacity, setOpacity] = useState<number>(15);
  const [color, setColor] = useState<string>('rgba(255,255,255');
  const [copied, setCopied] = useState<boolean>(false);

  const getStyleString = () => {
    const bgAlpha = opacity / 100;
    return `background: ${color}, ${bgAlpha});\nbackdrop-filter: blur(${blur}px);\n-webkit-backdrop-filter: blur(${blur}px);\nborder: 1px solid rgba(255, 255, 255, 0.15);\nborder-radius: 24px;`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getStyleString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 md:p-8 flex flex-col md:grid md:grid-cols-5 gap-8 flex-grow"
    >
      {/* Live Preview Area */}
      <div className="md:col-span-3 bg-[linear-gradient(135deg,_#1e1b4b_0%,_#3b0764_50%,_#030712_100%)] rounded-2xl relative flex items-center justify-center p-12 min-h-[300px] border border-white/5">
        {/* Dynamic floating light blobs inside the grid to show blur effect */}
        <div className="absolute top-[20%] left-[20%] w-24 h-24 bg-rose-500 rounded-full blur-xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-[20%] right-[20%] w-32 h-32 bg-blue-500 rounded-full blur-2xl pointer-events-none" />

        {/* The Glassmorphism Card */}
        <div
          style={{
            background: `${color}, ${opacity / 100})`,
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
          }}
          className="w-full max-w-sm p-6 text-white shadow-2xl relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs select-none">✨</div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-300">Glass UI Card</span>
          <h4 className="text-xl font-bold mt-2 mb-1 text-white">Interactive Glassmorphism</h4>
          <p className="text-xs text-zinc-200 leading-relaxed mb-6">
            Ubah slider di sebelah kanan untuk menyesuaikan intensitas efek blur dan tingkat transparansi secara real-time.
          </p>
          <div className="h-[2px] bg-white/10 w-full mb-4" />
          <span className="font-mono text-[10px] text-zinc-300">backdrop-filter: blur({blur}px)</span>
        </div>
      </div>

      {/* Adjustments & Code Output */}
      <div className="md:col-span-2 flex flex-col justify-between bg-zinc-900/30 border border-white/5 p-6 rounded-2xl">
        <div className="space-y-6">
          <h4 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-blue-500" /> CSS Parameters
          </h4>

          {/* Blur Range */}
          <div>
            <label className="text-xs text-zinc-400 flex justify-between mb-1.5 font-mono">
              <span>Blur Strength</span>
              <span className="text-blue-400 font-bold">{blur}px</span>
            </label>
            <input 
              type="range" 
              min="0" 
              max="24" 
              value={blur}
              onChange={(e) => setBlur(parseInt(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Opacity Range */}
          <div>
            <label className="text-xs text-zinc-400 flex justify-between mb-1.5 font-mono">
              <span>Background Opacity</span>
              <span className="text-blue-400 font-bold">{opacity}%</span>
            </label>
            <input 
              type="range" 
              min="2" 
              max="60" 
              value={opacity}
              onChange={(e) => setOpacity(parseInt(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Color choice */}
          <div>
            <label className="text-xs text-zinc-400 block mb-2 font-mono">Glass Color</label>
            <div className="flex gap-2">
              <button
                onClick={() => setColor('rgba(255,255,255')}
                className={`px-3 py-1 text-xs border rounded-md font-mono ${
                  color === 'rgba(255,255,255' ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-zinc-800 text-zinc-400'
                }`}
              >
                White Tint
              </button>
              <button
                onClick={() => setColor('rgba(15,23,42')}
                className={`px-3 py-1 text-xs border rounded-md font-mono ${
                  color === 'rgba(15,23,42' ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-zinc-800 text-zinc-400'
                }`}
              >
                Dark Slate
              </button>
            </div>
          </div>
        </div>

        {/* Copy CSS Box */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">CSS Output</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[11px] font-medium text-blue-400 hover:text-white bg-blue-600/10 border border-blue-500/20 px-2.5 py-1.5 rounded-lg transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>
          <pre className="bg-black/60 p-4 rounded-xl border border-white/5 text-[10.5px] font-mono text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed select-all">
            {getStyleString()}
          </pre>
        </div>
      </div>
    </motion.div>
  );
}

/* ==========================================
   WIDGET 3: RETRO CODE TERMINAL SIMULATOR
   ========================================== */
function TerminalSimulator() {
  const [terminalText, setTerminalText] = useState<string>('Press RUN to start simulator...');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const codeString = `// Inisialisasi developer profile...
const dev = {
  name: "Muhammad Thoriq",
  skills: ["React", "TypeScript", "Node.js"],
  passion: "Problem Solving",
  status: "Exploring tech wonders 🚀"
};

console.log("Analyzing project data...");
await delay(1000);

console.log("Compiling experimental logic...");
for (let i = 0; i <= 100; i += 25) {
  await delay(300);
  console.log(\`[BUILD] Progress: \${i}%\`);
}

console.log("SUCCESS! Playground logic ready to run.");
return dev;`;

  const runCode = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setTerminalText('');
    
    const lines = codeString.split('\n');
    let output = '';
    
    for (let i = 0; i < lines.length; i++) {
      output += lines[i] + '\n';
      setTerminalText(output);
      // Simulating character delay
      await new Promise((r) => setTimeout(r, 90 + Math.random() * 60));
    }
    
    setTerminalText((prev) => prev + '\n\n>>> Process exited with status: SUCCESS (0)\n');
    setIsRunning(false);
  };

  const handleReset = () => {
    setTerminalText('Press RUN to start simulator...');
    setIsRunning(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 md:p-8 flex flex-col flex-grow"
    >
      {/* Terminal Title Bar */}
      <div className="bg-zinc-900 border-t border-x border-white/10 px-4 py-3.5 rounded-t-2xl flex justify-between items-center select-none shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>
        <span className="text-[11px] font-mono text-zinc-500">thoriq@dev-terminal:~</span>
        <div className="w-12" /> {/* spacer */}
      </div>

      {/* Terminal Console Output */}
      <div className="bg-black/90 p-5 md:p-6 border border-white/10 rounded-b-2xl font-mono text-xs md:text-sm text-emerald-400 overflow-y-auto leading-relaxed flex-grow min-h-[300px] h-[340px] max-h-[360px] whitespace-pre-wrap select-text">
        {terminalText}
        {isRunning && <span className="animate-pulse">_</span>}
      </div>

      {/* Actions */}
      <div className="mt-5 flex gap-3 select-none">
        <button
          onClick={runCode}
          disabled={isRunning}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
            isRunning 
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              : 'bg-emerald-500 hover:bg-emerald-600 text-black shadow-lg shadow-emerald-500/20'
          }`}
        >
          <Play className="w-4 h-4" />
          <span>{isRunning ? 'Running...' : 'Run Terminal Code'}</span>
        </button>

        <button
          onClick={handleReset}
          disabled={isRunning}
          className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 px-5 py-3 rounded-xl text-sm font-semibold text-zinc-300 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>
    </motion.div>
  );
}
