import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;

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
    <footer id="contact" className="relative pt-24 pb-10 px-6 border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 items-start">
          {/* Left Col: Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="text-xs font-semibold px-3 py-1 bg-white/5 border-white/10 text-slate-300">
                {t.collab}
              </Badge>
            </div>

            <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-tight text-slate-100 mb-5">
              {t.headline1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                {t.headline2}
              </span>{' '}
              {t.headline3}
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
              {t.description}
            </p>

            <Button
              className="gap-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 font-medium px-6 py-2.5 cursor-pointer"
              onClick={() => {
                window.location.href = 'mailto:mohdthoriq24@gmail.com';
              }}
            >
              <HiOutlineMail className="w-5 h-5" />
              <span>{t.sayHello}</span>
            </Button>
          </div>

          {/* Right Col: Contact & Social Card */}
          <div className="lg:col-span-5">
            <Card className="bg-slate-900/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all">
              <CardHeader className="p-6 pb-3">
                <CardTitle className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                  {t.getInTouch}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2 space-y-4 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="p-2 bg-white/5 border-white/10 text-cyan-400 rounded-lg">
                    <HiOutlineLocationMarker className="w-4 h-4" />
                  </Badge>
                  <a
                    href="https://maps.google.com/?q=Bantul,+Yogyakarta,+Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-cyan-400 text-sm transition-colors inline-flex items-center gap-2 group/loc cursor-pointer"
                    title="Buka Google Maps"
                  >
                    <span>{t.location}</span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      GMT+7
                    </span>
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="p-2 bg-white/5 border-white/10 text-cyan-400 rounded-lg">
                    <HiOutlineMail className="w-4 h-4" />
                  </Badge>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-slate-300 hover:text-cyan-400 text-sm truncate font-normal cursor-pointer"
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
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500 mb-3 font-medium">
                    {t.socials}
                  </span>
                  <div className="flex gap-2.5">
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={social.name}
                          variant="outline"
                          size="icon"
                          aria-label={social.name}
                          className={`rounded-xl border-white/10 bg-slate-800/80 text-slate-400 transition-all duration-300 cursor-pointer ${social.hoverColor}`}
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
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-slate-500 font-medium">
          <Badge variant="secondary" className="bg-transparent border-none text-slate-500 font-normal">
            © {new Date().getFullYear()} MUHAMMAD THORIQ — {t.rights}
          </Badge>
        </div>
      </div>
    </footer>
  );
}
