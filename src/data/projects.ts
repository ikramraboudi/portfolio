import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'klitchi',
    title: 'Klitchi',
    subtitle: {
      fr: 'Plateforme de livraison de repas',
      en: 'Food delivery platform',
    },
    category: 'Mobile',
    contextTag: {
      fr: 'Stage After Code · Janvier 2026',
      en: 'After Code Internship · January 2026',
    },
    image: 'assets/projects/klitchi.png',
    description: {
      fr: 'Plateforme de livraison de repas composée de 3 applications mobiles Flutter interconnectées (client, livreur, restaurant) et d’une API REST haute performance. Suivi en temps réel via WebSockets, authentification sécurisée JWT et notifications push Firebase.',
      en: 'Food delivery platform featuring 3 interconnected Flutter mobile apps (customer, courier, restaurant) and a high-performance REST API. Real-time order tracking via WebSockets, JWT authentication and Firebase push notifications.',
    },
    technologies: [
      { name: 'Flutter', logoSlug: 'flutter' },
      { name: 'Dart', logoSlug: 'dart' },
      { name: 'Go', logoSlug: 'go' },
      { name: 'PostgreSQL', logoSlug: 'postgresql' },
      { name: 'WebSockets', logoSlug: 'websocket' },
      { name: 'JWT', logoSlug: 'jwt' },
      { name: 'Firebase', logoSlug: 'firebase' },
    ],
    githubUrl: 'https://github.com/ikramraboudi/klitchi_api',
    additionalRepos: [
      {
        label: 'API (Go)',
        url: 'https://github.com/ikramraboudi/klitchi_api',
        role: {
          fr: 'Backend REST & WebSockets',
          en: 'REST Backend & WebSockets',
        },
      },
      {
        label: 'Client',
        url: 'https://github.com/ikramraboudi/klitchi_client',
        role: {
          fr: 'Application mobile client',
          en: 'Customer mobile app',
        },
      },
      {
        label: 'Livreur',
        url: 'https://github.com/ikramraboudi/klitchi_delivery',
        role: {
          fr: 'Application mobile coursier',
          en: 'Courier mobile app',
        },
      },
      {
        label: 'Restaurant',
        url: 'https://github.com/ikramraboudi/klitchi_restaurant',
        role: {
          fr: 'Application restaurateur',
          en: 'Restaurant manager app',
        },
      },
    ],
  },
  {
    id: 'covo',
    title: 'Covo (CovoISET)',
    subtitle: {
      fr: 'Covoiturage étudiant universitaire',
      en: 'University student carpooling',
    },
    category: 'Web',
    contextTag: {
      fr: 'Projet d’Application Web · 2026',
      en: 'Web Application Project · 2026',
    },
    image: 'assets/projects/covo.png',
    description: {
      fr: 'Plateforme web de covoiturage pensée pour les étudiants (ex. Tunis ↔ Kélibia). Publication de trajets, réservation de places, carte interactive, gestion des rôles (conducteur, passager, admin), tableau de bord conducteur et notifications en temps réel.',
      en: 'Student carpooling web platform designed for daily university commutes (e.g. Tunis ↔ Kélibia). Ride publishing, seat booking, interactive map, role-based access (driver, passenger, admin), driver dashboard and real-time alerts.',
    },
    technologies: [
      { name: 'Symfony', logoSlug: 'symfony' },
      { name: 'PHP', logoSlug: 'php' },
      { name: 'Twig', logoSlug: 'twig' },
      { name: 'Flask', logoSlug: 'flask' },
      { name: 'MongoDB', logoSlug: 'mongodb' },
      { name: 'Mercure', logoSlug: 'mercure' },
    ],
    githubUrl: 'https://github.com/ikramraboudi/covo',
  },
  {
    id: 'stagelink',
    title: 'StageLink',
    subtitle: {
      fr: 'Plateforme de gestion de stages',
      en: 'Internship management platform',
    },
    category: 'Web',
    contextTag: {
      fr: 'Projet Web Académique',
      en: 'Academic Web Project',
    },
    image: 'assets/projects/stagelink.png',
    description: {
      fr: 'Plateforme web complète avec authentification multi-rôles (administrateur, étudiant, entreprise), gestion des conventions, upload sécurisé de fichiers, validation des comptes, évaluations, rapports statistiques et réinitialisation de mot de passe par email.',
      en: 'Complete web platform featuring multi-role authentication (admin, student, enterprise), internship agreement management, secure file uploads, account validation, evaluations, statistical reports and email password resets.',
    },
    technologies: [
      { name: 'Symfony 7', logoSlug: 'symfony' },
      { name: 'PHP', logoSlug: 'php' },
      { name: 'Twig', logoSlug: 'twig' },
      { name: 'SQLite', logoSlug: 'sqlite' },
      { name: 'Bootstrap', logoSlug: 'bootstrap' },
    ],
    githubUrl: 'https://github.com/ikramraboudi/stagelink',
  },
  {
    id: 'association-coranique',
    title: 'Plateforme Pédagogique Coranique',
    subtitle: {
      fr: 'Gestion multi-centres & suivi des séances',
      en: 'Multi-center management & session tracking',
    },
    category: 'Web & Mobile',
    contextTag: {
      fr: 'Projet Associatif Web & Mobile',
      en: 'Web & Mobile Non-Profit Project',
    },
    image: 'assets/projects/association_coranique.png',
    description: {
      fr: 'Solution web et mobile multi-centres pour une association : suivi des lectures et de la progression, planification d’agenda, gestion des présences et des séances, statistiques d’assiduité et messagerie intégrée.',
      en: 'Multi-center web and mobile solution for an educational association: reading and progression tracking, calendar scheduling, attendance management, engagement statistics and integrated messaging.',
    },
    technologies: [
      { name: 'Django REST', logoSlug: 'django' },
      { name: 'Python', logoSlug: 'python' },
      { name: 'Next.js', logoSlug: 'nextjs' },
      { name: 'Flutter', logoSlug: 'flutter' },
    ],
    githubUrl: 'https://github.com/ikramraboudi/associationcoranique',
  },
  {
    id: 'systeme-rh',
    title: 'Système RH Intelligent',
    subtitle: {
      fr: 'Analyse automatique de CV & gestion recrutement',
      en: 'Automated CV analysis & recruitment management',
    },
    category: 'Desktop',
    contextTag: {
      fr: 'Application Desktop JavaFX',
      en: 'JavaFX Desktop Application',
    },
    image: 'assets/projects/systeme_rh.png',
    description: {
      fr: 'Application de bureau avec algorithme de scoring et d’analyse automatique de CV, détection des compétences clés, recommandation de profils, gestion complète des collaborateurs et tableau de bord décisionnel.',
      en: 'Desktop application featuring CV parsing and scoring algorithms, key skill detection, profile recommendations, comprehensive employee management and decision-support dashboards.',
    },
    technologies: [
      { name: 'Java', logoSlug: 'java' },
      { name: 'JavaFX', logoSlug: 'javafx' },
    ],
    githubUrl: 'https://github.com/ikramraboudi/systeme-rh-javafx',
  },
  {
    id: 'quizmaster',
    title: 'QuizMaster',
    subtitle: {
      fr: 'Plateforme interactive d’évaluation',
      en: 'Interactive assessment platform',
    },
    category: 'Web',
    contextTag: {
      fr: 'Projet Web Dynamique',
      en: 'Dynamic Web Project',
    },
    image: 'assets/projects/quiz_master.png',
    description: {
      fr: 'Plateforme de quiz interactifs avec gestion des utilisateurs, éditeur de questionnaires, calcul automatique des scores, suivi des performances individuelles, déblocage de badges thématiques et génération de certificats.',
      en: 'Interactive quiz platform featuring user management, custom questionnaire builder, automatic score calculation, individual progress tracking, thematic badge unlocks and certificate generation.',
    },
    technologies: [
      { name: 'PHP', logoSlug: 'php' },
      { name: 'CSS3', logoSlug: 'css3' },
      { name: 'HTML5', logoSlug: 'html5' },
    ],
    githubUrl: 'https://github.com/ikramraboudi/Quiz_master',
  },
];
