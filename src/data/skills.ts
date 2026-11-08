import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: {
      fr: 'Langages de programmation',
      en: 'Programming Languages',
    },
    description: {
      fr: 'Langages compilés, interprétés et typés pour le web, le mobile et les systèmes.',
      en: 'Compiled, interpreted and strongly-typed languages for web, mobile and system engineering.',
    },
    skills: [
      { name: 'HTML5', slug: 'html5' },
      { name: 'CSS3', slug: 'css3' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Python', slug: 'python' },
      { name: 'Java', slug: 'java' },
      { name: 'PHP', slug: 'php' },
      { name: 'Go', slug: 'go' },
      { name: 'Dart', slug: 'dart' },
      { name: 'Kotlin', slug: 'kotlin' },
      { name: 'C', slug: 'c' },
    ],
  },
  {
    title: {
      fr: 'Frameworks & Bibliothèques',
      en: 'Frameworks & Libraries',
    },
    description: {
      fr: 'Architectures modernes pour interfaces réactives, applications mobiles et API robustes.',
      en: 'Modern architectures for reactive user interfaces, mobile applications and resilient APIs.',
    },
    skills: [
      { name: 'Flutter', slug: 'flutter' },
      { name: 'Symfony', slug: 'symfony', invertDark: true },
      { name: 'Django REST', slug: 'django', invertDark: true },
      { name: 'Next.js', slug: 'nextjs', invertDark: true },
      { name: 'Angular', slug: 'angular' },
      { name: 'Flask', slug: 'flask', invertDark: true },
      { name: 'JavaFX', slug: 'javafx' },
      { name: 'JEE', slug: 'jee' },
      { name: 'WordPress', slug: 'wordpress' },
      { name: 'Bootstrap', slug: 'bootstrap' },
    ],
  },
  {
    title: {
      fr: 'Bases de données & ORM',
      en: 'Databases & ORMs',
    },
    description: {
      fr: 'Modélisation relationnelle et NoSQL, persistance et requêtes optimisées.',
      en: 'Relational and NoSQL modeling, persistence layers and query optimization.',
    },
    skills: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Oracle Database', slug: 'oracle' },
      { name: 'SQLite', slug: 'sqlite' },
    ],
  },
  {
    title: {
      fr: 'Outils, Temps réel & Méthodologies',
      en: 'Tools, Real-time & Methodologies',
    },
    description: {
      fr: 'Protocoles de communication, authentification, versioning et pratiques agiles.',
      en: 'Communication protocols, authentication, version control and agile practices.',
    },
    skills: [
      { name: 'Firebase', slug: 'firebase' },
      { name: 'WebSockets', slug: 'websocket' },
      { name: 'JWT', slug: 'jwt' },
      { name: 'Mercure Hub', slug: 'mercure' },
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github', invertDark: true },
      { name: 'Agile / Scrum', slug: 'scrum' },
      { name: 'Adobe Illustrator', slug: 'illustrator' },
    ],
  },
  {
    title: {
      fr: 'Réseaux & Design UI/UX',
      en: 'Networking & UI/UX Design',
    },
    description: {
      fr: 'Fondations réseaux, protocoles de communication et conception centrée utilisateur.',
      en: 'Networking fundamentals, communication protocols and human-centered design.',
    },
    skills: [
      { name: 'Cisco Networking', slug: 'cisco' },
      { name: 'UX/UI Design', slug: 'uxui' },
      { name: 'Figma', slug: 'figma' },
    ],
  },
];
