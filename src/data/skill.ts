import type { IconType } from 'react-icons';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiPrisma, SiExpress } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";

export interface SkillItem {
  nama: string;
  icon: IconType;
}

export const DATA_SKILLS: SkillItem[] = [
  { nama: "js", icon: FaJs },
  { nama: "tailwind", icon: SiTailwindcss },
  { nama: "typescript", icon: SiTypescript },
  { nama: "react", icon: FaReact },
  { nama: "reactnative", icon: TbBrandReactNative },
  { nama: "nodejs", icon: FaNodeJs },
  { nama: "nextjs", icon: SiNextdotjs },
  { nama: "postgresql", icon: BiLogoPostgresql},
  { nama: "prisma", icon: SiPrisma},
  { nama: "expressjs", icon: SiExpress}
];

