import { Cpu, Database, Layout } from 'lucide-react';
import type { Project, Experience, CompanyExperience, SkillCategory } from '../types';
import gambar1 from "../../src/assets/image/image1.png";
// import gambar2 from "../../public/image/image2.png";
// import gambar3 from "../../public/image/image3.png";


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "SimakWeb.be",
    description: "Sistem manajemen sekolah dan siswa. Memiliki fitur pelacakan kehadiran, profil siswa, dan sistem pengumpulan tugas.",
    image: gambar1,
    tags: ["Node.js", "TypeScript", "Prisma ORM"],
    link: "https://github.com/Rumah-IT/simakweb.be"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ["Node.js", "TypeScript", "Prisma ORM", "RSC Architecture"]
  },
  {
    title: "Infrastructure & Tools",
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    skills: ["Git", "ADB Debugging", "PostgreSQL"]
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-blue-400" />,
    skills: ["React", "Tailwind CSS", "Vite"]
  }
];

export const EXPERIENCES: Experience[] = [];

export const COMPANY_EXPERIENCES: CompanyExperience[] = [
  {
    company: "Pondok IT",
    jobs: [
      {
        role: "Mentor",
        type: "On-site · Contract",
        period: "July 2026 — Present",
        duration: "11 mos",
        location: "Bantul Regency, Yogyakarta, Indonesia",
        description: [
          "Guiding students in learning web development from the basics to developing real-world projects."
        ]
      }
    ]
  }
];

