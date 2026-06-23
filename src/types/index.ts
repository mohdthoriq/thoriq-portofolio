export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id?: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface JobRole {
  role: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  description: string[];
}

export interface CompanyExperience {
  company: string;
  jobs: JobRole[];
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

