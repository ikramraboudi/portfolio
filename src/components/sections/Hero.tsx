import React from 'react';
import { ArrowRight, Send, FileDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import { getAssetUrl } from '../../utils/paths';
import { TechLogo } from '../common/TechLogo';

export const Hero: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative pt-24 sm:pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden"
    >
      {/* Halos lumineux d'arrière-plan très subtils */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-rose-soft/40 via-denim-100/30 to-transparent dark:from-denim-900/20 dark:via-rose-dark/10 dark:to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Colonne Gauche : Textes & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge de disponibilité PFE */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-sage-soft text-sage-dark dark:bg-sage-dark/20 dark:text-sage-badge border border-sage-badge/40 shadow-sm mb-6 transition-all hover:scale-105">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-badge opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sage-badge" />
              </span>
              <span>
                {profile.availability.status} · <span className="font-semibold">{profile.availability.period}</span>
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-content-mainLight dark:text-content-mainDark leading-[1.15]">
              Bonjour, je suis{' '}
              <span className="relative inline-block text-denim-600 dark:text-denim-400">
                {profile.name}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-rose-powder dark:text-rose-dark -z-10 opacity-70"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C50 3 150 2 197 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="mt-4 text-xl sm:text-2xl font-serif text-denim-700 dark:text-denim-300 font-medium">
              {profile.role} — <span className="font-mono text-lg sm:text-xl text-rose-dark dark:text-rose-powder">{profile.subRole}</span>
            </p>

            {/* Phrase d'accroche */}
            <p className="mt-5 text-base sm:text-lg text-content-secLight dark:text-content-secDark leading-relaxed max-w-xl">
              {profile.tagline}
            </p>

            {/* Boutons d'appel à l'action */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projets"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-denim-500 hover:bg-denim-600 text-white font-medium text-sm sm:text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-soft hover:shadow-soft-lg"
              >
                <span>Voir mes projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-mainLight dark:text-content-mainDark hover:bg-surface-softLight dark:hover:bg-surface-softDark font-medium text-sm sm:text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
              >
                <span>Me contacter</span>
                <Send className="w-4 h-4 text-denim-500" />
              </a>

              <a
                href={getAssetUrl(profile.cvPath)}
                download="CV_Ikram_Raboudi_PFE.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm text-content-secLight dark:text-content-secDark hover:text-denim-600 dark:hover:text-denim-400 font-mono transition-colors"
                title="Télécharger le CV au format PDF"
              >
                <FileDown className="w-4 h-4 text-denim-500" />
                <span className="underline underline-offset-4">CV complet</span>
              </a>
            </div>

            {/* Liens réseaux sociaux */}
            <div className="mt-8 pt-6 border-t border-line-light/80 dark:border-line-dark/80 w-full max-w-lg flex items-center gap-4 text-content-secLight dark:text-content-secDark text-sm">
              <span className="font-mono text-xs uppercase tracking-wider">Réseaux :</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub"
                  className="p-2 rounded-full border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark hover:text-denim-600 dark:hover:text-denim-300 hover:scale-110 transition-all shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn"
                  className="p-2 rounded-full border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark hover:text-denim-600 dark:hover:text-denim-300 hover:scale-110 transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter par Email (Gmail)"
                  title="Envoyer un email via Gmail"
                  className="p-2 rounded-full border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark hover:text-denim-600 dark:hover:text-denim-300 hover:scale-110 transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Photo détourée & Pastilles flottantes */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
              {/* Forme en arche douce / Conteneur photo selon consigne section 3 */}
              {/* Mode Clair : arche douce avec fond rose poudré/denim clair et mix-blend-mode: multiply */}
              {/* Mode Sombre : carte ivoire arrondie avec cadre soigné */}
              <div className="relative rounded-t-[120px] rounded-b-[36px] overflow-hidden border-2 border-line-light dark:border-line-dark shadow-soft-lg bg-gradient-to-b from-rose-soft/80 via-denim-50 to-surface-softLight dark:from-[#FAF7F2] dark:via-[#F3EEE7] dark:to-[#EAE3D9] p-3 pt-6 transition-all">
                <div className="relative rounded-t-[110px] rounded-b-[28px] overflow-hidden flex items-end justify-center">
                  <img
                    src={getAssetUrl(profile.photoPath)}
                    alt="Portrait professionnel d'Ikram Raboudi"
                    width={864}
                    height={1184}
                    loading="eager"
                    className="w-full h-auto object-contain max-h-[460px] select-none transition-all duration-300 mix-blend-multiply dark:mix-blend-normal"
                    style={{ aspectRatio: '864 / 1184' }}
                  />
                </div>
              </div>

              {/* Pastille Flottante 1 : Flutter */}
              <div
                className="absolute -top-3 -left-3 sm:-left-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 border border-line-light dark:border-line-dark backdrop-blur-md shadow-soft animate-soft-float"
              >
                <TechLogo slug="flutter" name="Flutter" className="w-5 h-5" />
                <span className="text-xs font-semibold text-content-mainLight dark:text-content-mainDark">
                  Flutter
                </span>
              </div>

              {/* Pastille Flottante 2 : Symfony */}
              <div
                className="absolute top-1/2 -right-4 sm:-right-8 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 border border-line-light dark:border-line-dark backdrop-blur-md shadow-soft animate-soft-float-delayed"
              >
                <TechLogo slug="symfony" name="Symfony" className="w-5 h-5" invertDark />
                <span className="text-xs font-semibold text-content-mainLight dark:text-content-mainDark">
                  Symfony
                </span>
              </div>

              {/* Pastille Flottante 3 : Go */}
              <div
                className="absolute -bottom-3 left-6 sm:left-10 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 border border-line-light dark:border-line-dark backdrop-blur-md shadow-soft animate-soft-float-slow"
              >
                <TechLogo slug="go" name="Go" className="w-5 h-5" />
                <span className="text-xs font-semibold text-content-mainLight dark:text-content-mainDark">
                  Go (Fiber)
                </span>
                <Sparkles className="w-3 h-3 text-rose-powder fill-rose-powder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
