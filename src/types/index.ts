export type ProjectCategory = 'Mobile' | 'Web' | 'Desktop' | 'Web & Mobile';

export interface ProjectRepo {
  label: string;
  url: string;
  role?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  contextTag: string; // e.g. "Stage After Code · Janvier 2026"
  image: string;
  description: string;
  technologies: {
    name: string;
    logoSlug: string; // matches /logos/<slug>.svg
  }[];
  githubUrl: string;
  additionalRepos?: ProjectRepo[];
}

export interface SkillItem {
  name: string;
  slug: string;
  invertDark?: boolean;
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  companyOrOrg: string;
  location: string;
  period: string;
  type: 'experience' | 'education' | 'certification' | 'association';
  badge?: string;
  highlights: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  subRole: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  displayPhone: string;
  location: string;
  availability: {
    status: string;
    period: string;
    target: string;
    replyTime: string;
  };
  socials: {
    github: string;
    repositories: string;
    linkedin: string;
    email: string;
  };
  cvPath: string;
  photoPath: string;
  quickFacts: {
    location: string;
    education: string;
    languages: string;
    search: string;
  };
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    projectsCount: number;
    mobileAppsCount: number;
    technologiesCount: string;
    internshipsCount: number;
  };
}
