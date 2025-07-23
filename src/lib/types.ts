
import type { LucideIcon } from 'lucide-react';

// Manually defining the types as we are not using the AI flow for now.
export interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string[] | string;
  logoUrl?: string;
};

export interface Education {
    institution: string;
    degree: string;
    dates: string;
    description: string[] | string;
    logoUrl?: string;
};
  
export interface Project {
  name: string;
  description: string;
  link?: string;
  imageUrl?: string;
};

export interface Skill {
  name: string;
  icon: LucideIcon;
}
  
export interface ResumeData {
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
};
