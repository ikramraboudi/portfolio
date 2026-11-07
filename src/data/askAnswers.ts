export interface AskOption {
  id: string;
  label: string;
  question: string;
  answer: string;
  actionButton?: {
    label: string;
    href: string;
  };
}

export const askOptions: AskOption[] = [
  {
    id: 'formation',
    label: '🎓 Formation',
    question: 'Quelle est ta formation actuelle ?',
    answer:
      "Étudiante en 3e année de Licence DSI (Développement des Systèmes d'Information) à l'ISET Kélibia, depuis 2024.",
  },
  {
    id: 'technologies',
    label: '🛠️ Technologies',
    question: 'Quelles sont tes technologies de prédilection ?',
    answer:
      'Flutter, Symfony et Go en priorité ; aussi PHP, Java, Python et JavaScript. Bases de données : PostgreSQL, MySQL, MongoDB, SQLite.',
  },
  {
    id: 'projets',
    label: '🚀 Projets',
    question: 'Quels projets as-tu développés ?',
    answer:
      '6 projets : Klitchi, Covo, StageLink, plateforme coranique, Système RH et QuizMaster.',
    actionButton: {
      label: 'Voir les projets',
      href: '#projets',
    },
  },
  {
    id: 'creativite',
    label: '🎨 Créativité',
    question: 'Quelles sont tes compétences créatives ?',
    answer:
      "Responsable Marketing du Club T'SCAI : affiches d'événements et communication digitale. J'utilise aussi Adobe Illustrator et j'ai suivi une formation UX/UI.",
  },
  {
    id: 'disponibilite',
    label: '📅 Disponibilité',
    question: 'Quand es-tu disponible pour ton stage PFE ?',
    answer: 'Je cherche un stage PFE de février à mai 2027.',
    actionButton: {
      label: 'Me contacter',
      href: '#contact',
    },
  },
  {
    id: 'contact',
    label: '💌 Contact',
    question: 'Comment puis-je te contacter rapidement ?',
    answer: 'Écris-moi à ikramraboudi8@gmail.com ou via le formulaire.',
    actionButton: {
      label: 'Aller au formulaire',
      href: '#contact',
    },
  },
];
