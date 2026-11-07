import React from 'react';
import { Sparkles } from 'lucide-react';
import { getAssetUrl } from '../../utils/paths';

export const ProjectsIntro: React.FC = () => {
  return (
    <div className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 rounded-[2.5rem] bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Colonne gauche (7 cols sur desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Pastille (badge) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-denim-100/70 text-denim-700 dark:bg-denim-900/50 dark:text-denim-300 border border-denim-200/60 dark:border-denim-700/50 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-denim-600 dark:text-denim-400" />
            <span>Portfolio Développement Web & Mobile</span>
          </div>

          {/* Titre : Mes Projets */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-semibold text-content-mainLight dark:text-content-mainDark tracking-tight leading-tight">
              Mes Projets
            </h3>
            <span className="text-xs font-mono text-content-secLight dark:text-content-secDark">
              (6 projets affichés)
            </span>
          </div>

          {/* Carte arrondie avec bordure fine et fond rose très doux */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-rose-soft/40 dark:bg-rose-dark/10 border border-rose-powder/40 dark:border-rose-dark/30 shadow-2xs w-full">
            <p className="text-sm sm:text-base text-content-mainLight dark:text-content-mainDark leading-relaxed">
              De l'interface à l'API : découvrez mes réalisations complètes en développement mobile (<strong>Flutter</strong>), web (<strong>Symfony</strong>, <strong>Django REST</strong>, <strong>Next.js</strong>) et application de bureau (<strong>JavaFX</strong>).
            </p>
            <p className="section-subtitle text-xs sm:text-sm font-medium mt-3">
              Chaque projet présente une capture, les technologies utilisées et le code source sur GitHub.
            </p>
          </div>

          {/* 3 tuiles de chiffres sous la carte */}
          <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-4 w-full">
            <div className="p-3 sm:p-4 rounded-xl bg-surface-softLight/60 dark:bg-surface-softDark/60 border border-line-light/60 dark:border-line-dark/60 text-center">
              <span className="font-serif font-bold text-xl sm:text-2xl text-content-mainLight dark:text-content-mainDark block">
                6
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-content-secLight dark:text-content-secDark block mt-0.5">
                Projets réalisés
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-surface-softLight/60 dark:bg-surface-softDark/60 border border-line-light/60 dark:border-line-dark/60 text-center">
              <span className="font-serif font-bold text-xl sm:text-2xl text-content-mainLight dark:text-content-mainDark block">
                4
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-content-secLight dark:text-content-secDark block mt-0.5">
                Apps mobiles Flutter
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-surface-softLight/60 dark:bg-surface-softDark/60 border border-line-light/60 dark:border-line-dark/60 text-center">
              <span className="font-serif font-bold text-sm sm:text-base text-content-mainLight dark:text-content-mainDark block truncate">
                Web & Mobile
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-content-secLight dark:text-content-secDark block mt-0.5">
                Spécialisation
              </span>
            </div>
          </div>
        </div>

        {/* Colonne droite : Avatar 3D Pixar & 3 cartes flottantes */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0">
          <div className="relative w-full max-w-[250px] sm:max-w-[290px] lg:max-w-[320px]">
            {/* Grand cadre arrondi à dégradé doux rose poudré → ivoire */}
            <div className="relative rounded-t-[120px] rounded-b-[36px] overflow-hidden border-2 border-line-light/90 dark:border-line-dark shadow-soft-lg bg-gradient-to-b from-rose-soft/80 via-surface-softLight/60 to-bg-light dark:from-denim-900/60 dark:via-surface-dark dark:to-bg-dark p-2.5 pt-5 transition-all">
              <div className="relative rounded-t-[110px] rounded-b-[28px] overflow-hidden flex items-end justify-center">
                <img
                  src={getAssetUrl('assets/avatar.jpg')}
                  alt="Avatar 3D d'Ikram Raboudi"
                  width={1536}
                  height={2744}
                  loading="lazy"
                  className="w-full h-auto object-cover object-top max-h-[340px] sm:max-h-[380px] select-none"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
                  }}
                />

                {/* Dégradé doux supplémentaire en bas */}
                <div
                  className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-light/90 via-bg-light/40 to-transparent dark:from-bg-dark/95 dark:via-bg-dark/40 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Carte Flottante 1 : Klitchi / 3 apps Flutter */}
            <div className="absolute -top-3 left-0 sm:-left-4 z-20 flex flex-col px-3 py-1.5 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 border border-line-light dark:border-line-dark backdrop-blur-md shadow-soft animate-soft-float">
              <span className="text-xs font-bold text-content-mainLight dark:text-content-mainDark">
                Klitchi
              </span>
              <span className="text-[10px] font-mono text-denim-600 dark:text-denim-300">
                3 apps Flutter
              </span>
            </div>

            {/* Carte Flottante 2 : API Go + PostgreSQL / Temps réel WebSockets */}
            <div className="absolute top-1/2 -right-2 sm:-right-5 z-20 flex flex-col px-3 py-1.5 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 border border-line-light dark:border-line-dark backdrop-blur-md shadow-soft animate-soft-float-delayed">
              <span className="text-xs font-bold text-content-mainLight dark:text-content-mainDark">
                API Go + PostgreSQL
              </span>
              <span className="text-[10px] font-mono text-denim-600 dark:text-denim-300">
                Temps réel WebSockets
              </span>
            </div>

            {/* Carte Flottante 3 : 6 projets / Web · Mobile · Desktop */}
            <div className="absolute -bottom-3 left-2 sm:left-4 z-20 flex flex-col px-3.5 py-1.5 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 border border-line-light dark:border-line-dark backdrop-blur-md shadow-soft animate-soft-float-slow">
              <span className="text-xs font-bold text-content-mainLight dark:text-content-mainDark">
                6 projets
              </span>
              <span className="text-[10px] font-mono text-denim-600 dark:text-denim-300">
                Web · Mobile · Desktop
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
