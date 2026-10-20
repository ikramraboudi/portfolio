import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'klitchi',
    title: 'Klitchi',
    subtitle: 'Plateforme de livraison de repas',
    category: 'Mobile',
    contextTag: 'Stage After Code · Janvier 2026',
    image: 'assets/projects/klitchi.png',
    description:
      'Plateforme de livraison de repas composée de 3 applications mobiles Flutter interconnectées (client, livreur, restaurant) et d’une API REST haute performance. Suivi en temps réel via WebSockets, authentification sécurisée JWT et notifications push Firebase.',
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
      { label: 'API (Go)', url: 'https://github.com/ikramraboudi/klitchi_api', role: 'Backend REST & WebSockets' },
      { label: 'Client', url: 'https://github.com/ikramraboudi/klitchi_client', role: 'Application mobile client' },
      { label: 'Livreur', url: 'https://github.com/ikramraboudi/klitchi_delivery', role: 'Application mobile coursier' },
      { label: 'Restaurant', url: 'https://github.com/ikramraboudi/klitchi_restaurant', role: 'Application restaurateur' },
    ],
  },
  {
    id: 'covo',
    title: 'Covo (CovoISET)',
    subtitle: 'Covoiturage étudiant universitaire',
    category: 'Web',
    contextTag: 'Projet d’Application Web · 2026',
    image: 'assets/projects/covo.png',
    description:
      'Plateforme web de covoiturage pensée pour les étudiants (ex. Tunis ↔ Kélibia). Publication de trajets, réservation de places, carte interactive, gestion des rôles (conducteur, passager, admin), tableau de bord conducteur et notifications en temps réel.',
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
    subtitle: 'Plateforme de gestion de stages',
    category: 'Web',
    contextTag: 'Projet Web Académique',
    image: 'assets/projects/stagelink.png',
    description:
      'Plateforme web complète avec authentification multi-rôles (administrateur, étudiant, entreprise), gestion des conventions, upload sécurisé de fichiers, validation des comptes, évaluations, rapports statistiques et réinitialisation de mot de passe par email.',
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
    subtitle: 'Gestion multi-centres & suivi des séances',
    category: 'Web & Mobile',
    contextTag: 'Projet Associatif Web & Mobile',
    image: 'assets/projects/association_coranique.png',
    description:
      'Solution web et mobile multi-centres pour une association : suivi des lectures et de la progression, planification d’agenda, gestion des présences et des séances, statistiques d’assiduité et messagerie intégrée.',
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
    subtitle: 'Analyse automatique de CV & gestion recrutement',
    category: 'Desktop',
    contextTag: 'Application Desktop JavaFX',
    image: 'assets/projects/systeme_rh.png',
    description:
      'Application de bureau avec algorithme de scoring et d’analyse automatique de CV, détection des compétences clés, recommandation de profils, gestion complète des collaborateurs et tableau de bord décisionnel.',
    technologies: [
      { name: 'Java', logoSlug: 'java' },
      { name: 'JavaFX', logoSlug: 'javafx' },
    ],
    githubUrl: 'https://github.com/ikramraboudi/systeme-rh-javafx',
  },
  {
    id: 'quizmaster',
    title: 'QuizMaster',
    subtitle: 'Plateforme interactive d’évaluation',
    category: 'Web',
    contextTag: 'Projet Web Dynamique',
    image: 'assets/projects/quiz_master.png',
    description:
      'Plateforme de quiz interactifs avec gestion des utilisateurs, éditeur de questionnaires, calcul automatique des scores, suivi des performances individuelles, déblocage de badges thématiques et génération de certificats.',
    technologies: [
      { name: 'PHP', logoSlug: 'php' },
      { name: 'CSS3', logoSlug: 'css3' },
      { name: 'HTML5', logoSlug: 'html5' },
    ],
    githubUrl: 'https://github.com/ikramraboudi/Quiz_master',
  },
];
