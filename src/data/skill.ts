import type { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

export interface SkillItem {
  nama: string;
  icon: IconType;
}

export const DATA_SKILLS: SkillItem[] = [
  { nama: "html", icon: FaHtml5 },
  { nama: "css", icon: FaCss3Alt, },
  { nama: "js", icon: FaJs },
  { nama: "tailwind", icon: SiTailwindcss },
  { nama: "typescript", icon: SiTypescript },
  { nama: "react", icon: FaReact },
  { nama: "reactnative", icon: TbBrandReactNative },
  { nama: "nodejs", icon: FaNodeJs },
  { nama: "nextjs", icon: SiNextdotjs },
];

