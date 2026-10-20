# 🌸 Portfolio Professionnel — Ikram Raboudi

Portfolio web & mobile moderne, doux et professionnel d'**Ikram Raboudi**, étudiante en 3e année de Licence DSI à l'ISET Kélibia, en recherche d'un **stage PFE (février → mai 2027)**.

Développé avec **Vite**, **React**, **TypeScript**, **Tailwind CSS (v3)** et **Framer Motion**.

---

## 📋 Table des matières

1. [Stack technique](#-stack-technique)
2. [Lancement en local](#-lancement-en-local)
3. [Structure & Modification du contenu](#-structure--modification-du-contenu)
4. [Configuration du formulaire de contact (Formspree)](#-configuration-du-formulaire-de-contact-formspree)
5. [Déploiement](#-déploiement)
   - [Déploiement sur Vercel (recommandé)](#a-sur-vercel-recommandé)
   - [Déploiement sur GitHub Pages](#b-sur-github-pages)
6. [Design System & Palette](#-design-system--palette)

---

## ⚡ Stack technique

- **Framework** : React 18 + Vite 6 + TypeScript (typage strict).
- **Styles** : Tailwind CSS v3 avec configuration de thème personnalisé (ivoire, denim doux, rose poudré).
- **Animations & Icônes** : Framer Motion, Lucide React, transitions CSS fluides respectant `prefers-reduced-motion`.
- **Logos officiels** : 38 logos SVG stockés en local (`public/logos/`) pour une autonomie totale hors CDN.
- **Accessibilité & SEO** : Balises Open Graph dynamiques, sitemap.xml, robots.txt, contrastes AA et navigation clavier.

---

## 🚀 Lancement en local

### Prérequis
- **Node.js** version 18 ou supérieure
- **npm** (inclus avec Node.js)

### Commandes

```bash
# 1. Cloner ou ouvrir le dossier du projet
cd portfolio-kit

# 2. Installer les dépendances
npm install

# 3. Copier les variables d'environnement
cp .env.example .env

# 4. Lancer le serveur de développement
npm run dev
```

L'application est accessible à l'adresse : `http://localhost:3000/`.

### Vérification du build de production

```bash
# Vérifier la compilation TypeScript et le build Vite
npm run build

# Prévisualiser le build localement
npm run preview
```

---

## 📝 Structure & Modification du contenu

**Tout le contenu est centralisé dans des fichiers de données dédiés dans `src/data/`**. Ikram peut modifier ses textes, mettre à jour son CV ou ajouter un projet sans toucher au code des composants :

| Fichier | Contenu modifiable |
|---|---|
| `src/data/profile.ts` | Nom, rôle, sous-titre, bio, téléphone, email, localisation, disponibilité PFE, liens GitHub/LinkedIn, valeurs. |
| `src/data/projects.ts` | Les 6 projets : titres, descriptions, catégories, liens GitHub, liste des technologies avec leurs slugs de logos. |
| `src/data/skills.ts` | Compétences classées en 5 catégories (Langages, Frameworks, Bases de données, Outils & Méthodologies, Réseaux & Design). |
| `src/data/experience.ts` | Timeline : stages After Code et Code Temple, formation ISET Kélibia, certifications Cisco & UX/UI, vie associative (Club T'SCAI). |

### Remplacer ou mettre à jour les fichiers PDF et photos :
- **Photo d'Ikram** : déposer la nouvelle image dans `public/assets/ikram.png`.
- **CV au format PDF** : déposer le fichier dans `public/assets/docs/CV_Ikram_Raboudi_PFE.pdf`.
- **Captures de projets** : dans `public/assets/projects/<nom_du_projet>.png`.

---

## 📬 Configuration du formulaire de contact (Formspree)

Le formulaire de contact intègre une protection anti-spam (champ honeypot) et une bascule automatique :

1. **Si aucune clé Formspree n'est configurée** : le formulaire bascule automatiquement sur un lien `mailto:` sécurisé pré-rempli avec l'objet et le message du recruteur. **Le formulaire ne sera donc jamais bloqué ni cassé.**
2. **Pour recevoir directement les emails via Formspree** :
   1. Créez un compte gratuit sur [Formspree.io](https://formspree.io).
   2. Cliquez sur **+ New Form**, nommez-le (ex: `Portfolio Ikram`) et indiquez l'email de réception : `ikramraboudi8@gmail.com`.
   3. Récupérez votre **Form ID** (une suite de 8 caractères, ex: `xbjnvwzo`).
   4. Ouvrez le fichier `.env` et renseignez :
      ```env
      VITE_FORMSPREE_ID=votre_form_id
      ```
   5. Redémarrez le serveur (`npm run dev`) ou redéployez sur votre hébergeur.

---

## 🌐 Déploiement

### A. Sur Vercel (Recommandé)
1. Poussez votre code sur un dépôt GitHub (ex. `ikramraboudi/portfolio`).
2. Rendez-vous sur [Vercel](https://vercel.com/) et connectez votre compte GitHub.
3. Cliquez sur **Add New...** → **Project**, puis importez votre dépôt.
4. Dans **Environment Variables**, ajoutez :
   - `VITE_SITE_URL` : l'URL de votre site (ex: `https://ikramraboudi.vercel.app`)
   - `VITE_FORMSPREE_ID` : votre identifiant Formspree
5. Cliquez sur **Deploy**. Le site sera automatiquement en ligne avec SSL et performances optimales.

### B. Sur GitHub Pages
1. Dans le fichier `.env` (ou dans vos variables GitHub Secrets), définissez :
   ```env
   VITE_BASE_PATH=/nom-du-depot/
   VITE_SITE_URL=https://ikramraboudi.github.io/nom-du-depot
   ```
2. Lancez le build :
   ```bash
   npm run build
   ```
3. Déployez le dossier `dist/` sur la branche `gh-pages` (manuellement ou via une GitHub Action avec `peaceiris/actions-gh-pages`).

---

## 🎨 Design System & Palette

Le site repose sur le thème **« Doux & Professionnel »**, inspiré de la tenue d'Ikram (denim bleu + voile blanc) :

- **Fond clair** : Ivoire apaisant (`#FAF7F2`) avec cartes en blanc pur (`#FFFFFF`).
- **Fond sombre** : Ardoise nocturne feutrée (`#141A23`) avec cartes nuit douce (`#1D2530`).
- **Primaire** : Denim doux (`#5B7FA6` en clair, `#8FB0D6` en sombre).
- **Accents** : Rose poudré (`#E8B9B3`) et Vert sauge (`#8FB79B`) pour le badge de disponibilité PFE.
- **Typographies** :
  - Titres : *Fraunces* (Google Fonts serif chaleureux)
  - Corps : *Plus Jakarta Sans* (moderne et fluide)
  - Code & tags : *JetBrains Mono* (précis et technique)

---

## 📜 Licence

© 2026 Ikram Raboudi. Tous droits réservés.
