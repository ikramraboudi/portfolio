import { Localized } from '../i18n/types';

export interface AskOption {
  id: string;
  label: Localized<string>;
  question: Localized<string>;
  answer: Localized<string>;
  actionButton?: {
    label: Localized<string>;
    href: string;
  };
}

export const askOptions: AskOption[] = [
  {
    id: 'formation',
    label: {
      fr: '🎓 Formation',
      en: '🎓 Education',
    },
    question: {
      fr: 'Quelle est ta formation actuelle ?',
      en: 'What is your current education?',
    },
    answer: {
      fr: "Étudiante en 3e année de Licence DSI (Développement des Systèmes d'Information) à l'ISET Kélibia, depuis 2024.",
      en: 'Third-year Bachelor student in Information Systems Development (DSI) at ISET Kélibia, since 2024.',
    },
  },
  {
    id: 'technologies',
    label: {
      fr: '🛠️ Technologies',
      en: '🛠️ Technologies',
    },
    question: {
      fr: 'Quelles sont tes technologies de prédilection ?',
      en: 'What are your preferred technologies?',
    },
    answer: {
      fr: 'Flutter, Symfony et Go en priorité ; aussi PHP, Java, Python et JavaScript. Bases de données : PostgreSQL, MySQL, MongoDB, SQLite.',
      en: 'Flutter, Symfony and Go as core stack; along with PHP, Java, Python and JavaScript. Databases: PostgreSQL, MySQL, MongoDB, SQLite.',
    },
  },
  {
    id: 'projets',
    label: {
      fr: '🚀 Projets',
      en: '🚀 Projects',
    },
    question: {
      fr: 'Quels projets as-tu développés ?',
      en: 'What projects have you built?',
    },
    answer: {
      fr: '6 projets : Klitchi, Covo, StageLink, plateforme coranique, Système RH et QuizMaster.',
      en: '6 projects: Klitchi, Covo, StageLink, Quranic platform, Smart HR System and QuizMaster.',
    },
    actionButton: {
      label: {
        fr: 'Voir les projets',
        en: 'View projects',
      },
      href: '#projets',
    },
  },
  {
    id: 'creativite',
    label: {
      fr: '🎨 Créativité',
      en: '🎨 Creativity',
    },
    question: {
      fr: 'Quelles sont tes compétences créatives ?',
      en: 'What are your creative skills?',
    },
    answer: {
      fr: "Responsable Marketing du Club T'SCAI : affiches d'événements et communication digitale. J'utilise aussi Adobe Illustrator et j'ai suivi une formation UX/UI.",
      en: "Head of Marketing at Club T'SCAI: event poster design and digital marketing. I also use Adobe Illustrator and completed a UX/UI design course.",
    },
  },
  {
    id: 'disponibilite',
    label: {
      fr: '📅 Disponibilité',
      en: '📅 Availability',
    },
    question: {
      fr: 'Quand es-tu disponible pour ton stage PFE ?',
      en: 'When are you available for your PFE internship?',
    },
    answer: {
      fr: 'Je cherche un stage PFE de février à mai 2027.',
      en: 'I am looking for a PFE internship from February to May 2027.',
    },
    actionButton: {
      label: {
        fr: 'Me contacter',
        en: 'Contact me',
      },
      href: '#contact',
    },
  },
  {
    id: 'contact',
    label: {
      fr: '💌 Contact',
      en: '💌 Contact',
    },
    question: {
      fr: 'Comment puis-je te contacter rapidement ?',
      en: 'How can I quickly contact you?',
    },
    answer: {
      fr: 'Écris-moi à ikramraboudi8@gmail.com ou via le formulaire.',
      en: 'Reach out at ikramraboudi8@gmail.com or through the contact form.',
    },
    actionButton: {
      label: {
        fr: 'Aller au formulaire',
        en: 'Go to form',
      },
      href: '#contact',
    },
  },
];
