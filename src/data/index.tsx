import { Cpu, Database, Layout } from 'lucide-react';
import type { Project, Experience, SkillCategory } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "SI Amanah",
    description: "Platform fundraising dan donasi terintegrasi dengan sistem pembayaran Midtrans, fitur pembuatan kampanye, dan manajemen penarikan dana.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000",
    tags: ["Node.js", "TypeScript", "Prisma ORM", "Zod"],
    link: "#"
  },
  {
    id: 2,
    title: "The Master Tailor",
    description: "Platform e-commerce custom untuk gudang seragam. Mendukung manajemen varian produk kompleks untuk seragam sekolah dan pramuka.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["TypeScript", "REST API", "Database Design"],
    link: "#"
  },
  {
    id: 3,
    title: "SimakWeb.be",
    description: "Sistem manajemen sekolah dan siswa. Memiliki fitur pelacakan kehadiran, profil siswa, dan sistem pengumpulan tugas.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    tags: ["Backend Architecture", "Node.js", "Render API"],
    link: "#"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    skills: ["Node.js", "TypeScript", "Prisma ORM", "Zod", "RESTful API", "RSC Architecture"]
  },
  {
    title: "Infrastructure & Tools",
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
    skills: ["Render Cloud", "Git", "ADB Debugging", "PostgreSQL"]
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-blue-400" />,
    skills: ["React", "Tailwind CSS", "Framer Motion", "Vite"]
  }
];

export const EXPERIENCES: Experience[] = [
  // {
  //   id: 1,
  //   period: "2025 - Present",
  //   company: "Thoriq.dev",
  //   role: "Freelance Fullstack Developer",
  //   description: "Leading the development of microservices architecture, optimizing PostgreSQL queries, and implementing real-time data processing."
  // },
  // {
  //   id: 2,
  //   period: "2024 - 2025",
  //   company: "Universitas Sultan Ageng Tirtayasa",
  //   role: "Freelance Fullstack Developer",
  //   description: "Developed various web applications using React and Node.js, managed cloud deployments on AWS, and mentored junior developers."
  // }
];
