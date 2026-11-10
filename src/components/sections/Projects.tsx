import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';
import { TRANSLATIONS, PROJECTS_DATA } from '../../data/translations';

export default function Projects() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;
  const projects = PROJECTS_DATA[language];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">
            {t.title}
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs ml-2" />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed">
          {t.description}
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project, i) => (
              <motion.div
                key={`${language}-${project.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between overflow-hidden bg-slate-900/50 backdrop-blur-sm border-white/10 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
                  <div>
                    {/* Media Thumbnail with hover effect */}
                    <div className="relative aspect-video w-full overflow-hidden border-b border-white/5 bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="text-xs font-semibold gap-1.5 backdrop-blur-md bg-white/20 hover:bg-white/30 text-white cursor-pointer"
                          onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                        >
                          <span>{t.livePreview}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>

                    <CardHeader className="space-y-3 pb-3">
                      {/* Tags using shadcn Badge */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-[11px] font-medium">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <CardTitle className="text-xl group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-slate-400 line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="text-slate-500 italic col-span-full py-8 text-center">
              {t.detailsComingSoon}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
