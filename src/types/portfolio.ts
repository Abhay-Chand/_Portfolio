export interface SkillCategory {
  label: string;
  color: string;
  skills: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  outcomes: string[];
  color: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  current: boolean;
  highlights: string[];
  tags: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  current: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  color: string;
}

export interface PipelineStep {
  id: string;
  label: string;
  sub: string;
  icon: string;
  color: string;
}

export interface NavigationSection {
  id: string;
  label: string;
  href: string;
}

export interface PortfolioContent {
  name: string;
  shortName: string;
  roles: string[];
  location: string;
  github: string;
  linkedin: string;
  bio: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: Project[];
  skillCategories: SkillCategory[];
  pipeline: PipelineStep[];
  certifications: Certification[];
}
