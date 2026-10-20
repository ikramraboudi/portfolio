import { ProfileData } from '../types';

export const profile: ProfileData = {
  name: 'Ikram Raboudi',
  role: 'Développeuse Web & Mobile',
  subRole: 'Flutter · Symfony · Go',
  tagline:
    "Étudiante en 3e année de Licence DSI à l'ISET Kélibia, je conçois des applications web et mobiles complètes, de l'interface à l'API.",
  bio: "Étudiante en 3e année de Licence en Technologies de l'Informatique (Développement des Systèmes d'Information) à l'ISET Kélibia, je suis passionnée par le développement web et mobile. Je maîtrise Flutter, Symfony, PHP, Java et Python, et j'ai conçu des applications web et mobiles complètes. Je recherche un stage PFE de février à mai 2027 pour contribuer à des projets innovants au sein d'une équipe agile.",
  email: 'ikramraboudi8@gmail.com',
  phone: '+21655872196',
  displayPhone: '+216 55 872 196',
  location: 'Nabeul, Tunisie',
  availability: {
    status: 'Disponible pour un stage PFE',
    period: 'Février → Mai 2027',
    target: 'Développement Web & Mobile (Flutter, Symfony, Go) · Tunisie (ouvert aux opportunités)',
    replyTime: 'Je réponds sous 24 h',
  },
  socials: {
    github: 'https://github.com/ikramraboudi',
    repositories: 'https://github.com/ikramraboudi?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/ikram-raboudi-796803332/',
    email: 'mailto:ikramraboudi8@gmail.com',
  },
  cvPath: 'assets/docs/CV_Ikram_Raboudi_PFE.pdf',
  photoPath: 'assets/ikram.png',
  quickFacts: {
    location: 'Nabeul, Tunisie',
    education: 'ISET Kélibia — Licence DSI (2024 – présent)',
    languages: 'Arabe (maternelle), Français, Anglais, Chinois',
    search: 'Stage PFE (fév. → mai 2027)',
  },
  values: [
    {
      title: "Travail d'équipe",
      description: "Collaboration active, partage de connaissances et esprit d'entraide.",
      icon: 'Users',
    },
    {
      title: 'Communication',
      description: 'Écoute attentive, clarté dans les échanges et restitution synthétique.',
      icon: 'MessageSquare',
    },
    {
      title: 'Gestion de projet',
      description: 'Méthodologie Agile/Scrum, respect des délais et rigueur opérationnelle.',
      icon: 'CheckSquare',
    },
    {
      title: 'Créativité & Rigueur',
      description: 'Sens du détail UI/UX, sens esthétique et gestion optimisée des priorités.',
      icon: 'Sparkles',
    },
  ],
  stats: {
    projectsCount: 6,
    mobileAppsCount: 4,
    technologiesCount: '20+',
    internshipsCount: 2,
  },
};
