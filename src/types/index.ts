import { Localized } from '../i18n/types';

export type ProjectCategory = 'Mobile' | 'Web' | 'Desktop' | 'Web & Mobile';

export interface ProjectRepo {
  label: string;
  url: string;
  role?: Localized<string>;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: Localized<string>;
  category: ProjectCategory;
  contextTag: Localized<string>;
  image: string;
  description: Localized<string>;
  technologies: {
    name: string;
    logoSlug: string;
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
  title: Localized<string>;
  description?: Localized<string>;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  title: Localized<string>;
  companyOrOrg: string;
  location: Localized<string>;
  period: Localized<string>;
  type: 'experience' | 'education' | 'certification' | 'association';
  badge?: Localized<string>;
  highlights: Localized<string[]>;
}

export interface ProfileData {
  name: string;
  role: Localized<string>;
  subRole: string;
  tagline: Localized<string>;
  bio: Localized<string>;
  bioParagraph1: Localized<string>;
  bioParagraph2: Localized<string>;
  email: string;
  phone: string;
  displayPhone: string;
  location: Localized<string>;
  availability: {
    status: Localized<string>;
    period: Localized<string>;
    target: Localized<string>;
    replyTime: Localized<string>;
  };
  socials: {
    github: string;
    repositories: string;
    linkedin: string;
    email: string;
  };
  cvPath: {
    fr: string;
    en: string;
  };
  hasEnglishCV: boolean;
  photoPath: string;
  avatarPath: string;
  quickFacts: {
    location: Localized<string>;
    education: Localized<string>;
    languages: Localized<string>;
    search: Localized<string>;
  };
  values: {
    title: Localized<string>;
    description: Localized<string>;
    icon: string;
  }[];
  stats: {
    projectsCount: number;
    mobileAppsCount: number;
    technologiesCount: string;
    internshipsCount: number;
  };
}
