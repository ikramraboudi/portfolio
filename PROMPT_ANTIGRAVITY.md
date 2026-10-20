# PROMPT À COLLER DANS ANTIGRAVITY — Portfolio d'Ikram Raboudi

> **Comment l'utiliser** : dézippe le kit, ouvre le dossier `portfolio-kit` dans Antigravity (File → Open Folder), choisis le mode **Planning**, puis colle **tout ce qui se trouve sous la ligne `=== DÉBUT DU PROMPT ===`** dans le chat de l'agent.

=== DÉBUT DU PROMPT ===

# RÔLE

Tu es un·e développeur·se front-end senior et designer UI/UX. Tu vas concevoir et développer **de A à Z** le portfolio professionnel d'**Ikram Raboudi**, étudiante en 3e année de Licence DSI, qui cherche un **stage PFE (février → mai 2027)**. Ce portfolio est une étape très importante pour elle : il doit être **élégant, doux, professionnel, propre, rapide, responsive et sans aucun bug**. Tout le contenu est en **français**.

# MÉTHODE DE TRAVAIL (obligatoire)

1. **Plan d'abord** : avant d'écrire du code, produis un plan (architecture, arborescence, design tokens, liste des composants). Attends mon accord si tu es en mode Planning, sinon continue.
2. **Inspiration** : ouvre dans ton navigateur les 4 portfolios de référence (section 2), et note 5 idées concrètes à t'inspirer (sans copier ni le design, ni le code, ni les textes). Le résultat doit être **original** et propre à Ikram.
3. **Développe** étape par étape : design system → layout → sections → données → animations → formulaire → SEO/accessibilité.
4. **Vérifie** dans le navigateur intégré : desktop (1440px), tablette (768px), mobile (390px), mode clair et mode sombre. Prends des captures et corrige tout défaut (débordements, images floues, liens cassés, contrastes).
5. **Livre** : le projet qui build sans erreur, un `README.md` (lancer, modifier le contenu, déployer sur Vercel / GitHub Pages) et un résumé de ce qui a été fait.

---

# 1. STACK TECHNIQUE

- **Vite + React + TypeScript**, **Tailwind CSS**, **Framer Motion** (animations), **lucide-react** (icônes d'interface).
- Site **statique**, déployable gratuitement sur Vercel ou GitHub Pages (prévoir `base` configurable dans `vite.config.ts`).
- **Tout le contenu dans des fichiers de données** (`src/data/profile.ts`, `skills.ts`, `projects.ts`, `experience.ts`) pour qu'Ikram puisse modifier un texte ou ajouter un projet sans toucher aux composants.
- Code propre : composants réutilisables, typage strict, pas de code mort, noms clairs, commentaires courts en français aux endroits utiles.
- Performance : images optimisées (`loading="lazy"`, dimensions explicites, format WebP si possible en gardant les PNG d'origine), polices chargées avec `display=swap`, Lighthouse visé ≥ 90 partout.
- Accessibilité : HTML sémantique, contrastes AA, focus visible, `alt` sur toutes les images, navigation clavier, `prefers-reduced-motion` respecté.
- SEO : `<title>`, meta description, Open Graph (image = photo d'Ikram ou capture), favicon (monogramme « IR » aux couleurs du thème), `lang="fr"`.

---

# 2. RÉFÉRENCES D'INSPIRATION (à ouvrir et analyser)

- https://amna-portfolio-beryl.vercel.app/
- https://ezedinmoh.pro.et/
- https://hmirinsalma.github.io/Portfolio/
- https://yassinecharcheri.dev/

**Idées à adapter (déjà repérées)** :
- Menu sticky avec ancres + bouton d'appel à l'action « Me contacter » toujours visible.
- Hero avec **2 boutons** (« Voir mes projets » / « Me contacter ») et un **badge de disponibilité** : « Disponible pour un stage PFE · février → mai 2027 ».
- **Bandeau de chiffres** sous le hero (compteurs animés) : 6 projets · 4 apps mobiles Flutter · 20+ technologies · 2 stages.
- Compétences **groupées par catégorie**, chacune avec son logo.
- Cartes de projets avec image, badges de statut/technos, bouton « Voir le code ».
- **Section PFE** dédiée (période, type de missions recherchées, lieu), message de disponibilité répété (hero, section PFE, footer).
- Parcours en **timeline verticale**.
- Formulaire de contact avec **sujet** (liste déroulante) et message minimum, + promesse « Je réponds sous 24 h ».
- Mode clair/sombre, petites animations d'apparition au scroll.
- Option « signature » discrète : un petit bloc façon éditeur de code (`whoami.ts`) dans le hero ou la section À propos, mais **dans le thème doux** (pas de terminal noir agressif).

---

# 3. DIRECTION ARTISTIQUE — thème « doux & professionnel »

**Ambiance** : douce, claire, aérée, chaleureuse, féminine sans être enfantine ; sérieuse et lisible pour un recruteur. Beaucoup d'espace blanc, coins arrondis (16–24 px), ombres très légères et diffuses, dégradés subtils. Les couleurs reprennent la tenue de la photo (denim bleu + voile blanc).

**Palette (CSS variables / tokens Tailwind)**

| Rôle | Mode clair | Mode sombre |
|---|---|---|
| Fond principal | `#FAF7F2` (ivoire) | `#141A23` |
| Surface (cartes) | `#FFFFFF` | `#1D2530` |
| Surface douce | `#F3EEE7` | `#252E3B` |
| Texte principal | `#26303B` | `#ECE8E1` |
| Texte secondaire | `#6B7684` | `#A5AFBC` |
| Primaire (denim) | `#5B7FA6` (hover `#4A6A8F`) | `#8FB0D6` |
| Accent (rose poudré) | `#E8B9B3` (fond doux `#F6E3E0`) | `#D9A7A1` |
| Succès / badge « disponible » | `#8FB79B` | `#8FB79B` |
| Bordures | `#E7E0D6` | `#2F3947` |

**Typographie** (Google Fonts) : titres en **Fraunces** (serif doux, poids 500–600), texte en **Plus Jakarta Sans**, petites étiquettes/code en **JetBrains Mono**. Échelle fluide (`clamp`), interligne confortable (1.6).

**Détail important pour la photo** : `assets/ikram.png` est une photo **détourée sur fond blanc**. En mode clair, place-la dans une forme organique ou en arche de couleur rose poudré/denim très clair avec `mix-blend-mode: multiply` pour que le blanc disparaisse proprement. En mode sombre, mets-la dans une carte ivoire arrondie. Ne la déforme jamais (ratio d'origine ≈ 864×1184), pas de recadrage qui coupe le visage ou le voile.

**Animations** (sobres) : apparition en fondu + léger glissement au scroll, survol des cartes (élévation + léger zoom de l'image), compteurs animés, barre de progression du scroll, transition douce clair/sombre. Rien de clignotant.

---

# 4. STRUCTURE DU SITE (une page, sections ancrées)

Menu : **Accueil · À propos · Compétences · Projets · Parcours · Contact** + bouton thème clair/sombre + bouton **« Télécharger mon CV »**.

## 4.1 Accueil (Hero)
- Badge : « 🟢 Disponible pour un stage PFE · février → mai 2027 »
- Titre : « Bonjour, je suis **Ikram Raboudi** »
- Sous-titre : « Développeuse Web & Mobile — Flutter · Symfony · Go »
- Phrase d'accroche : « Étudiante en 3e année de Licence DSI à l'ISET Kélibia, je conçois des applications web et mobiles complètes, de l'interface à l'API. »
- Boutons : **Voir mes projets** (primaire) · **Me contacter** (secondaire) · **Télécharger mon CV** (lien discret → `/assets/docs/CV_Ikram_Raboudi_PFE.pdf`)
- Icônes sociales : GitHub, LinkedIn, Email
- Photo `ikram.png` (voir détail section 3) + 2–3 petites pastilles flottantes décoratives (ex. « Flutter », « Symfony », « Go »).
- Bandeau de chiffres animés : **6** projets réalisés · **4** applications mobiles Flutter · **20+** technologies · **2** stages.

## 4.2 À propos
Texte (reformule légèrement si besoin, garde le sens) :
> Étudiante en 3e année de Licence en Technologies de l'Informatique (Développement des Systèmes d'Information) à l'ISET Kélibia, je suis passionnée par le développement web et mobile. Je maîtrise Flutter, Symfony, PHP, Java et Python, et j'ai conçu des applications web et mobiles complètes. Je recherche un stage PFE de février à mai 2027 pour contribuer à des projets innovants au sein d'une équipe agile.

À côté du texte, des **cartes d'infos rapides** : 📍 Nabeul, Tunisie · 🎓 ISET Kélibia — Licence DSI (2024 – présent) · 🌍 Langues : Arabe (langue maternelle), Français, Anglais, Chinois · 🎯 Recherche : Stage PFE (fév. → mai 2027).
Ajoute un petit bloc `whoami.ts` stylé (facultatif, discret) résumant : rôle, stack, statut.
Valeurs / qualités (4 mini-cartes avec icônes) : Travail d'équipe · Communication · Gestion de projet · Créativité (et gestion du temps/priorités).

## 4.3 Compétences — technologies maîtrisées, **bien divisées, chacune avec son logo officiel**
Affiche des cartes par catégorie, chaque techno = logo + nom (grille responsive, hover doux).

**Logos** : utilise le CDN Devicon `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/<slug>/<slug>-original.svg` (variante `-plain.svg` ou `-original-wordmark.svg` si l'original n'existe pas). Si un logo n'existe pas dans Devicon, utilise Simple Icons `https://cdn.simpleicons.org/<slug>` ; en dernier recours une icône lucide. **Vérifie que CHAQUE logo s'affiche réellement** ; mieux : télécharge les SVG et stocke-les dans `public/logos/` pour ne pas dépendre d'un CDN. Aucun logo ne doit être déformé ou manquant. En mode sombre, les logos noirs (GitHub, Next.js, Flask…) doivent rester visibles (fond de pastille clair ou filtre d'inversion).

| Catégorie | Technologies (slug Devicon suggéré) |
|---|---|
| **Langages** | HTML5 (`html5`), CSS3 (`css3`), JavaScript (`javascript`), Python (`python`), Java (`java`), PHP (`php`), C (`c`), Kotlin (`kotlin`), Go (`go`) |
| **Frameworks & bibliothèques** | Flutter (`flutter`), Symfony (`symfony`), Django REST (`django`), Next.js (`nextjs`), Angular (`angularjs`/`angular`), JavaFX (logo Java), JEE (logo Java), WordPress (`wordpress`) |
| **Bases de données** | PostgreSQL (`postgresql`), MySQL (`mysql`), MongoDB (`mongodb`), Oracle (`oracle`), SQLite (`sqlite`) |
| **Outils & méthodologies** | Firebase (`firebase`), WebSockets (icône générique ou Simple Icons `socketdotio`), JWT (Simple Icons `jsonwebtokens`), Adobe Illustrator (`illustrator`), Git (`git`), GitHub (`github`), Agile/Scrum (icône lucide) |
| **Réseaux & design** | Cisco Networking (Simple Icons `cisco`), UX/UI Design (icône lucide) |

Option : un petit onglet/filtre par catégorie, ou toutes les catégories visibles en grille (au choix, le plus lisible).

## 4.4 Projets — cœur du portfolio
Grille de **6 cartes** (voir données section 5). Chaque carte contient :
- la **capture d'écran** du projet (`assets/projects/<fichier>.png`) dans un cadre arrondi, `object-fit: contain` sur fond doux pour ne rien couper (la capture de Klitchi montre 4 écrans de téléphone, celles des autres sont des fenêtres larges) ;
- le **titre**, une **catégorie** (badge : Mobile, Web, Desktop…), une **description** de 2–3 lignes ;
- les **badges des technologies/langages utilisés**, avec le petit logo de chaque techno ;
- un bouton **« Voir sur GitHub »** avec icône.

**Comportement du clic** : cliquer sur **toute la carte** (et sur le bouton) ouvre **le dépôt GitHub du projet** dans un nouvel onglet (`target="_blank" rel="noopener noreferrer"`). **Cas particulier Klitchi** : 4 dépôts → la carte affiche 4 petits boutons (API · Client · Livreur · Restaurant) menant chacun à son dépôt ; un clic sur l'image ou le titre ouvre le dépôt `klitchi_api`.
Ajoute en plus (optionnel mais apprécié) un clic sur l'image qui ouvre une **lightbox** pour agrandir la capture, sans gêner le lien GitHub.
En bas de section : bouton « Voir tous mes dépôts sur GitHub » → https://github.com/ikramraboudi

## 4.5 Parcours (timeline verticale)
Trois blocs (voir données section 6) : **Expérience** · **Formation & certifications** · **Vie associative**.

## 4.6 Section PFE (bandeau mis en valeur, avant le Contact)
« Je recherche un stage PFE · **février → mai 2027** · Développement Web & Mobile (Flutter, Symfony, Go) · Lieu : à discuter (Tunisie) · Je réponds sous 24 h. » Boutons : « Me contacter » + « Télécharger mon CV ».

## 4.7 Contact
- Coordonnées cliquables : ✉️ **ikramraboudi8@gmail.com** (`mailto:`) · 📞 **+216 55 872 196** (`tel:+21655872196`) · 📍 Nabeul, Tunisie · GitHub · LinkedIn.
- **Formulaire** : Nom, Email, Sujet (liste : « Proposition de stage PFE », « Collaboration », « Question », « Autre »), Message (min. 20 caractères). Validation côté client avec messages d'erreur en français, état « envoi en cours », message de succès/erreur doux (toast), anti-spam (champ honeypot caché).
- **Envoi** : intégration **Formspree** via `fetch` POST vers `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}` (variable dans `.env`, avec `.env.example`). **Si la variable est absente**, le formulaire bascule automatiquement sur un `mailto:` pré-rempli pour ne jamais être cassé. Dans le README, explique pas à pas comment créer le formulaire Formspree (gratuit) et renseigner l'ID, avec l'email de réception ikramraboudi8@gmail.com.

## 4.8 Footer
Nom, mini-phrase, navigation, icônes sociales, lien « Retour en haut », « © 2026 Ikram Raboudi ». Rappel du badge de disponibilité PFE.

---

# 5. DONNÉES DES PROJETS (à mettre dans `src/data/projects.ts`)

Ordre d'affichage : 1 → 6. Le dépôt GitHub est la destination du clic.

### 1) Klitchi — Plateforme de livraison de repas
- **Catégorie** : Mobile · Stage After Code (janvier 2026)
- **Image** : `assets/projects/klitchi.png` (4 écrans : accueil « Bienvenue sur Klitchi », page restaurant avec menu, liste des restaurants avec filtres, carte des restaurants)
- **Description** : Plateforme de livraison de repas composée de **3 applications mobiles Flutter interconnectées** (client, livreur, restaurant) et d'une API REST. Suivi de commande en temps réel avec WebSockets, authentification JWT et notifications push Firebase.
- **Technologies** : Flutter, Dart, Go (Fiber), PostgreSQL, WebSockets, JWT, Firebase
- **GitHub (4 dépôts)** :
  - API (back) : https://github.com/ikramraboudi/klitchi_api
  - Client : https://github.com/ikramraboudi/klitchi_client
  - Livreur : https://github.com/ikramraboudi/klitchi_delivery
  - Restaurant : https://github.com/ikramraboudi/klitchi_restaurant

### 2) Covo — Covoiturage étudiant (CovoISET)
- **Catégorie** : Web
- **Image** : `assets/projects/covo.png` (tableau de bord conducteur : trajets publiés, revenus, trajets à venir Tunis ↔ Kélibia, avis)
- **Description** : Plateforme de covoiturage pensée pour les étudiants (ex. Tunis ↔ Kélibia). Le conducteur publie ses trajets, suit ses réservations, ses revenus, son taux de remplissage et les avis des passagers depuis un tableau de bord clair.
- **Technologies** : ⚠️ **À déterminer automatiquement** : ouvre https://github.com/ikramraboudi/covo, lis le README et la barre des langages GitHub, puis renseigne les vraies technologies. N'invente rien : si tu ne peux pas accéder au dépôt, mets provisoirement un champ `technologies: []` clairement commenté `// À COMPLÉTER` et préviens-moi.
- **GitHub** : https://github.com/ikramraboudi/covo

### 3) StageLink — Plateforme de gestion de stages
- **Catégorie** : Web
- **Image** : `assets/projects/stagelink.png` (tableau de bord admin : étudiants, entreprises, offres, candidatures, évaluations)
- **Description** : Plateforme web de gestion des stages avec **authentification multi-rôles** (administrateur, étudiant, entreprise), CRUD complet, **upload de fichiers**, validation des comptes par l'administrateur, évaluations, rapports et statistiques, et réinitialisation du mot de passe par email.
- **Technologies** : Symfony 7, PHP, Doctrine, SQLite, Twig, Bootstrap
- **GitHub** : https://github.com/ikramraboudi/stagelink

### 4) Plateforme pédagogique coranique (Association Coranique)
- **Catégorie** : Web & Mobile
- **Image** : `assets/projects/association_coranique.png` (gestion du planning : agenda des séances, centres, statuts)
- **Description** : Application web/mobile **multi-centres** pour une association : suivi des lectures, gestion des plannings et des présences, gestion des centres, programmes et utilisateurs, statistiques et messagerie intégrée.
- **Technologies** : Django REST, Python, Next.js, Flutter
- **GitHub** : https://github.com/ikramraboudi/associationcoranique

### 5) Système RH intelligent
- **Catégorie** : Desktop
- **Image** : `assets/projects/systeme_rh.png` (analyse IA des candidatures : scores, recommandations, graphique de comparaison)
- **Description** : Application de bureau d'**analyse automatique de CV** (scoring, détection de compétences, recommandation accepté/refusé) et de **gestion des employés et du recrutement**, avec tableau de bord et visualisation des scores.
- **Technologies** : Java, JavaFX
- **GitHub** : https://github.com/ikramraboudi/systeme-rh-javafx

### 6) QuizMaster
- **Catégorie** : Web
- **Image** : `assets/projects/quiz_master.png` (profil utilisateur : badges HTML, CSS, PHP, JavaScript, Base de données, certificat téléchargeable)
- **Description** : Plateforme de **quiz interactifs** : gestion des utilisateurs, création de quiz, **scoring automatique**, suivi des performances, badges par thème et certificat téléchargeable.
- **Technologies** : PHP (+ complète avec la barre des langages du dépôt : HTML, CSS, JavaScript, SQL… uniquement si présents)
- **GitHub** : https://github.com/ikramraboudi/Quiz_master

> **Règle** : pour chaque projet, vérifie la barre des langages du dépôt GitHub et **n'affiche que des technologies réellement utilisées**. Ne mentionne aucun autre projet que ces six-là.

---

# 6. DONNÉES DU PARCOURS (à mettre dans `src/data/experience.ts`)

**Expérience professionnelle**
- **Stage de perfectionnement en développement mobile — After Code, Tunisie · Janvier 2026**
  - Conception de **Klitchi**, plateforme de livraison de repas : 3 applications mobiles Flutter interconnectées (client, livreur, restaurant)
  - Développement du backend avec **Go/Fiber** et **PostgreSQL**
  - Mise en place du suivi en temps réel (**WebSockets**), de l'authentification **JWT** et des notifications push **Firebase**
- **Stage d'initiation en développement & design — Code Temple, Tunisie · Janvier 2025**
  - Découverte de la méthodologie **Agile/Scrum**
  - Création et gestion de contenu avec **WordPress**
  - Conception des illustrations et images d'articles avec **Adobe Illustrator**

**Formation**
- **Licence en Technologies de l'Informatique — Développement des Systèmes d'Information** · ISET Kélibia · 2024 – présent

**Certifications**
- Cisco Networking Academy (2024 – 2025) : badge « Notions de base des réseaux »
- Club T'SCAI – ISET Kélibia (octobre 2024) : formation UX/UI — certificat de participation

**Vie associative**
- **Club T'SCAI** — Responsable Marketing (2025 – présent), Assistante Marketing (2024 – 2025) : conception des affiches événementielles et participation à la stratégie de communication digitale sur les réseaux sociaux

**Langues** : Arabe (langue maternelle) · Français · Anglais · Chinois

---

# 7. LIENS ET COORDONNÉES (source unique, à centraliser dans `src/data/profile.ts`)

| Élément | Valeur |
|---|---|
| Nom | Ikram Raboudi |
| Titre | Développeuse Web & Mobile — étudiante Licence DSI, ISET Kélibia |
| Email | ikramraboudi8@gmail.com |
| Téléphone | +216 55 872 196 |
| Lieu | Nabeul, Tunisie |
| GitHub | https://github.com/ikramraboudi |
| Tous les dépôts | https://github.com/ikramraboudi?tab=repositories |
| LinkedIn | https://www.linkedin.com/in/ikram-raboudi-796803332/ |
| CV (PDF) | `assets/docs/CV_Ikram_Raboudi_PFE.pdf` |

---

# 8. FICHIERS FOURNIS (déjà dans le dossier ouvert)

```
assets/
├── ikram.png                      ← photo d'Ikram (détourée, fond blanc)
├── docs/
│   └── CV_Ikram_Raboudi_PFE.pdf   ← CV à proposer en téléchargement
└── projects/
    ├── klitchi.png                ← 1 capture (4 écrans mobile)
    ├── covo.png
    ├── stagelink.png
    ├── association_coranique.png
    ├── systeme_rh.png
    └── quiz_master.png
```
Copie ces fichiers dans `public/` (ou `src/assets/`) du projet en **gardant les originaux intacts**. Les références doivent toutes fonctionner après le build.

---

# 9. CE QU'IL NE FAUT PAS FAIRE

- Ne pas copier le design, le code ou les textes des portfolios de référence.
- Ne pas inventer de projets, de chiffres, de diplômes, d'entreprises ou de technologies absents de ce document.
- Ne pas ajouter de section « Data / BI / IA / Machine Learning » ni d'autres projets : **uniquement** les 6 projets et les compétences listés ici.
- Ne pas utiliser de lorem ipsum, d'images placeholder, de liens `#` ou de boutons sans action.
- Pas de couleurs agressives (noir pur, néons), pas d'animations qui distraient, pas de pop-up envahissant.

---

# 10. CRITÈRES DE VALIDATION (checklist finale — coche chaque point avant de me rendre le travail)

- [ ] `npm install && npm run build` passent sans erreur ni warning bloquant
- [ ] Les 6 projets s'affichent avec leur bonne capture, description, technos (avec logos) et le bon lien GitHub (ouvre dans un nouvel onglet) ; Klitchi montre ses 4 dépôts
- [ ] Tous les logos de technologies s'affichent, groupés par catégorie, lisibles en clair et en sombre
- [ ] La photo est nette, non déformée, bien intégrée dans les deux thèmes
- [ ] Liens GitHub, LinkedIn, `mailto:`, `tel:` et téléchargement du CV fonctionnent
- [ ] Le formulaire valide, envoie via Formspree (ou bascule sur `mailto:`) et affiche un retour clair
- [ ] Responsive parfait à 390 / 768 / 1440 px, aucun scroll horizontal
- [ ] Mode clair/sombre fonctionnel, thème mémorisé (avec `try/catch` autour du `localStorage`)
- [ ] Navigation par ancres fluide, section active surlignée dans le menu
- [ ] Accessibilité et SEO de base en place, Lighthouse ≥ 90
- [ ] `README.md` clair : lancer en local, modifier le contenu, configurer Formspree, déployer (Vercel et GitHub Pages)

Commence par me présenter ton plan, puis construis le site.

=== FIN DU PROMPT ===
