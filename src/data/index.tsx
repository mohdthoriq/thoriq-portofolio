import { Cpu, Database, Layout } from 'lucide-react';
import type { Project, Experience, CompanyExperience, SkillCategory } from '../types';


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hotel Multazam",
    description: "An online hotel reservation and room booking system featuring real-time room availability tracking, room type management, and secure payment processing.",
    image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1793239620/portfolio/image1.png',
    tags: ["Node.js", "React.js"],
    link: "https://hotel-multazam.vercel.app"
  },
  {
    id: 2,
    title: 'scm manajemen',
    description: 'A comprehensive Supply Chain Management (SCM) system designed for warehouse efficiency, featuring inventory flow tracking, inbound/outbound logistics logs, and automated stock reporting.',
    image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1793239621/portfolio/image2.png',
    tags: ["Next.js"],
    link: "https://scm-manajemen.vercel.app"
  },
  {
    id: 3,
    title: 'Shop-cart',
    description: 'A responsive Point of Sale (POS) and e-commerce web platform equipped with an interactive shopping cart, instant transaction calculations, and seamless product catalog management.',
    image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1793239623/portfolio/image3.png',
    tags: ["react.js"],
    link: "https://shop-cart-ten-sable.vercel.app"
  },
  {
    id: 4,
    title: 'Finup',
    description: 'An interactive financial management dashboard that provides insightful visualizations of spending patterns, user expense trend analytics, and structured cash flow summaries.',
    image: 'https://res.cloudinary.com/djls97ux0/image/upload/v1794294707/dashboard-finup_kjygfs.webp',
    tags: ["Next.js"],
    link: "https://financiallevelup.vercel.app"
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
    link: "https://pondokit.com",
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


