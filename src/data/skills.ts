import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Langages de programmation',
    description: 'Langages compilés, interprétés et typés pour le web, le mobile et les systèmes.',
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
    title: 'Frameworks & Bibliothèques',
    description: 'Architectures modernes pour interfaces réactives, applications mobiles et API robustes.',
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
    title: 'Bases de données & ORM',
    description: 'Modélisation relationnelle et NoSQL, persistance et requêtes optimisées.',
    skills: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Oracle Database', slug: 'oracle' },
      { name: 'SQLite', slug: 'sqlite' },
    ],
  },
  {
    title: 'Outils, Temps réel & Méthodologies',
    description: 'Protocoles de communication, authentification, versioning et pratiques agiles.',
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
    title: 'Réseaux & Design UI/UX',
    description: 'Fondations réseaux, protocoles de communication et conception centrée utilisateur.',
    skills: [
      { name: 'Cisco Networking', slug: 'cisco' },
      { name: 'UX/UI Design', slug: 'uxui' },
      { name: 'Figma', slug: 'figma' },
    ],
  },
];
