import github from "../../assets/social/github.png";
import linkedin from "../../assets/social/social.png";
import instagram from "../../assets/social/instagram.png";
import logo from "../../assets/logo.png"


export default function Footer() {
  const SOCIAL_LINKS = [
    { name: 'LinkedIn', icon: linkedin, href: 'https://www.linkedin.com/in/muhammad-thoriq-7744b1377' },
    { name: 'Github', icon: github, href: 'https://github.com/mohdthoriq' },
    { name: 'Instagram', icon: instagram, href: 'https://www.instagram.com/mohd_thoriq/' }
  ];

  return (
    <footer id="contact" className="relative pt-32 pb-6 px-6 border-t border-zinc-800 overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center font-bold text-xl"><img src={logo} alt="logo" /></div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tighter leading-tight">
              LET'S BUILD SOMETHING <br />
              <span className="italic text-blue-500">GREAT</span> TOGETHER.
            </h2>
            <p className="text-zinc-400 text-lg max-w-md mb-8 py-2">
              Saya selalu terbuka untuk kolaborasi menarik, proyek baru, atau sekadar berbincang tentang teknologi. Jangan ragu untuk menyapa!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-4 text-sm font-medium text-zinc-500">
                <li>Jakarta, Indonesia</li>
                <li><a href="mailto:[EMAIL_ADDRESS]" className="hover:text-white transition-colors">mohdthoriq335@gmail.com</a></li>
                <li className="flex gap-4 pt-4">
                  {SOCIAL_LINKS.map(social => (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                      <img src={social.icon} alt={social.name} className="w-4 h-4 invert opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} MUHAMMAD THORIQ — ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">
            <span>Inspired by Excellence</span>
            <span>Built with React & Framer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
