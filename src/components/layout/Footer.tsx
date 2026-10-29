import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import logo from '../../assets/logo.png';

export default function Footer() {
  const SOCIAL_LINKS = [
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/muhammad-thoriq-7744b1377',
      hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10',
    },
    {
      name: 'Github',
      icon: FaGithub,
      href: 'https://github.com/mohdthoriq',
      hoverColor: 'hover:text-white hover:border-white/40 hover:bg-white/10',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/mohd_thoriq/',
      hoverColor: 'hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10',
    },
  ];

  return (
    <footer id="contact" className="relative pt-28 pb-10 px-6 border-t border-white/10 overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Main Col: Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <Card className="w-11 h-11 p-2 bg-slate-900 border-white/10 rounded-xl flex items-center justify-center shadow-inner">
                <img src={logo} alt="logo" className="w-full h-full object-contain" />
              </Card>
              <Badge variant="secondary" className="text-xs font-semibold px-3 py-1 bg-white/5 border-white/10 text-slate-300">
                Open for Collaboration
              </Badge>
            </div>

            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight text-slate-100 mb-6">
              LET'S BUILD SOMETHING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                GREAT
              </span>{' '}
              TOGETHER.
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
              I'm always open to collaboration, new projects, or just chatting about technology. Don't hesitate to say hello!
            </p>

            <Button
              className="gap-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 font-medium px-6 py-2.5"
              onClick={() => {
                window.location.href = 'mailto:mohdthoriq24@gmail.com';
              }}
            >
              <HiOutlineMail className="w-5 h-5" />
              <span>Say Hello via Email</span>
            </Button>
          </div>

          {/* Right Col: Navigation & Contact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Quick Navigation Card */}
            <Card className="bg-slate-900/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  Navigation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2 flex flex-col space-y-1">
                {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    size="sm"
                    className="justify-start px-2 h-9 text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors gap-2 text-sm font-medium"
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                    <span>{item}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Contact & Social Card */}
            <Card className="bg-slate-900/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2 space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="p-1.5 bg-white/5 border-white/10 text-cyan-400 rounded-md">
                    <HiOutlineLocationMarker className="w-4 h-4" />
                  </Badge>
                  <span className="text-slate-300 text-xs sm:text-sm">Jakarta, Indonesia</span>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="p-1.5 bg-white/5 border-white/10 text-cyan-400 rounded-md">
                    <HiOutlineMail className="w-4 h-4" />
                  </Badge>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-300 hover:text-cyan-400 text-xs sm:text-sm truncate font-normal"
                    onClick={() => {
                      window.location.href = 'mailto:mohdthoriq24@gmail.com';
                    }}
                  >
                    mohdthoriq24@gmail.com
                  </Button>
                </div>

                {/* Social Icons using Shadcn Buttons + react-icons */}
                <div className="pt-4">
                  <Separator className="mb-4" />
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500 mb-2 font-medium">
                    Socials
                  </span>
                  <div className="flex gap-2">
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={social.name}
                          variant="outline"
                          size="icon"
                          aria-label={social.name}
                          className={`rounded-xl border-white/10 bg-slate-800/80 text-slate-400 transition-all duration-300 ${social.hoverColor}`}
                          onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')}
                        >
                          <Icon className="w-4 h-4" />
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <Separator className="mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <Badge variant="secondary" className="bg-transparent border-none text-slate-500 font-normal">
            © {new Date().getFullYear()} MUHAMMAD THORIQ — ALL RIGHTS RESERVED
          </Badge>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Built with React & Vite</span>
            <Separator orientation="vertical" className="h-3" />
            <span className="text-cyan-400/80">Tailwind CSS & Shadcn UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
