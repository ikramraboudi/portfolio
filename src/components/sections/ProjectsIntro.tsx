import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { getAssetUrl } from '../../utils/paths';

export const ProjectsIntro: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="mb-12 md:mb-16 p-6 sm:p-8 md:p-10 rounded-[2.5rem] bg-navy text-navy-text border border-white/10 shadow-soft-lg overflow-hidden transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Colonne gauche (7 cols sur desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Pastille (badge) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-navy-card/90 text-navy-accent border border-white/10 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-navy-accent" />
            <span>{t.projects.introBadge}</span>
          </div>

          {/* Titre : Mes Projets / My Projects */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-text tracking-tight leading-tight">
              {t.projects.introTitle}
            </h3>
            <span className="text-xs font-mono text-navy-muted">
              {t.projects.introCount}
            </span>
          </div>

          {/* Carte arrondie avec fond marine card */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-navy-card/80 border border-white/10 shadow-2xs w-full">
            <p className="text-sm sm:text-base text-navy-text leading-relaxed">
              {t.projects.introDescBefore}
              <strong className="text-white font-semibold">Flutter</strong>
              {t.projects.introDescMid1}
              <strong className="text-white font-semibold">Symfony</strong>
              {t.projects.introDescMid2}
              <strong className="text-white font-semibold">Django REST</strong>
              {t.projects.introDescMid3}
              <strong className="text-white font-semibold">Next.js</strong>
              {t.projects.introDescMid4}
              <strong className="text-white font-semibold">JavaFX</strong>
              {t.projects.introDescAfter}
            </p>
            <p className="section-subtitle-navy text-xs sm:text-sm font-medium mt-3">
              {t.projects.introNote}
            </p>
          </div>

          {/* 3 tuiles de chiffres sous la carte */}
          <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-4 w-full">
            <div className="p-3 sm:p-4 rounded-xl bg-navy-card/60 border border-white/10 text-center">
              <span className="font-serif font-bold text-xl sm:text-2xl text-navy-text block">
                6
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-navy-muted block mt-0.5">
                {t.projects.introStatProjects}
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-navy-card/60 border border-white/10 text-center">
              <span className="font-serif font-bold text-xl sm:text-2xl text-navy-text block">
                4
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-navy-muted block mt-0.5">
                {t.projects.introStatMobile}
              </span>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-navy-card/60 border border-white/10 text-center">
              <span className="font-serif font-bold text-sm sm:text-base text-navy-text block truncate">
                {t.projects.introStatSpecValue}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-navy-muted block mt-0.5">
                {t.projects.introStatSpec}
              </span>
            </div>
          </div>
        </div>

        {/* Colonne droite : Avatar 3D & 3 cartes flottantes */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0">
          <div className="relative w-full max-w-[250px] sm:max-w-[290px] lg:max-w-[320px]">
            {/* Grand cadre arrondi à dégradé doux rose poudré → denim marine */}
            <div className="relative rounded-t-[120px] rounded-b-[36px] overflow-hidden border-2 border-white/15 shadow-soft-lg bg-gradient-to-b from-rose-powder/70 via-navy-card to-navy-deep p-2.5 pt-5 transition-all">
              <div className="relative rounded-t-[110px] rounded-b-[28px] overflow-hidden flex items-end justify-center">
                <img
                  src={getAssetUrl('assets/avatar.jpg')}
                  alt={t.projects.avatarAlt}
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
                  className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Carte Flottante 1 : Klitchi / 3 apps Flutter (en haut à gauche, au-dessus de la tête) */}
            <div className="absolute -top-3 -left-2 sm:-left-5 z-20 flex flex-col px-3 py-1.5 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 border border-line-light dark:border-line-dark backdrop-blur-md shadow-soft animate-soft-float">
              <span className="text-xs font-bold text-content-mainLight dark:text-content-mainDark">
                {t.projects.floatingKlitchi}
              </span>
              <span className="text-[10px] font-mono text-denim-600 dark:text-denim-300">
                {t.projects.floatingKlitchiSub}
              </span>
            </div>

            {/* Carte Flottante 2 : API Go + PostgreSQL / Temps réel WebSockets (abaissée en bas à droite, niveau épaule/torse, dégageant entièrement le visage et les lunettes) */}
            <div className="absolute bottom-2 -right-2 sm:-right-5 z-20 flex flex-col px-3 py-1.5 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 border border-line-light dark:border-line-dark backdrop-blur-md shadow-soft animate-soft-float-delayed">
              <span className="text-xs font-bold text-content-mainLight dark:text-content-mainDark">
                {t.projects.floatingGo}
              </span>
              <span className="text-[10px] font-mono text-denim-600 dark:text-denim-300">
                {t.projects.floatingGoSub}
              </span>
            </div>

            {/* Carte Flottante 3 : 6 projets / Web · Mobile · Desktop (tout en bas à gauche) */}
            <div className="absolute -bottom-3 -left-1 sm:-left-3 z-20 flex flex-col px-3.5 py-1.5 rounded-2xl bg-surface-light/95 dark:bg-surface-dark/95 border border-line-light dark:border-line-dark backdrop-blur-md shadow-soft animate-soft-float-slow">
              <span className="text-xs font-bold text-content-mainLight dark:text-content-mainDark">
                {t.projects.floatingProjects}
              </span>
              <span className="text-[10px] font-mono text-denim-600 dark:text-denim-300">
                {t.projects.floatingProjectsSub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
