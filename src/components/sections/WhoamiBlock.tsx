import React from 'react';

export const WhoamiBlock: React.FC = () => {
  return (
    <div className="rounded-2xl border border-line-light dark:border-line-dark bg-surface-softLight/70 dark:bg-surface-softDark/80 overflow-hidden shadow-soft font-mono text-xs sm:text-sm">
      {/* En-tête de fenêtre stylée */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-denim-100/50 dark:bg-surface-dark border-b border-line-light dark:border-line-dark">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-powder" />
          <span className="w-2.5 h-2.5 rounded-full bg-sage-badge" />
          <span className="w-2.5 h-2.5 rounded-full bg-denim-300" />
        </div>
        <span className="text-[11px] text-content-secLight dark:text-content-secDark font-medium">
          whoami.ts
        </span>
        <span className="text-[10px] text-content-secLight/60 dark:text-content-secDark/60">
          TypeScript
        </span>
      </div>

      {/* Contenu de code avec coloration syntaxique douce */}
      <div className="p-4 sm:p-5 space-y-1 text-content-mainLight dark:text-content-mainDark leading-relaxed overflow-x-auto">
        <p>
          <span className="text-denim-600 dark:text-denim-400 font-semibold">const</span>{' '}
          <span className="text-content-mainLight dark:text-content-mainDark">developpeuse</span> = &#123;
        </p>
        <p className="pl-4">
          <span className="text-content-secLight dark:text-content-secDark">nom:</span>{' '}
          <span className="text-rose-dark dark:text-rose-powder">'Ikram Raboudi'</span>,
        </p>
        <p className="pl-4">
          <span className="text-content-secLight dark:text-content-secDark">statut:</span>{' '}
          <span className="text-rose-dark dark:text-rose-powder">'Étudiante 3e Licence DSI'</span>,
        </p>
        <p className="pl-4">
          <span className="text-content-secLight dark:text-content-secDark">institut:</span>{' '}
          <span className="text-rose-dark dark:text-rose-powder">'ISET Kélibia'</span>,
        </p>
        <p className="pl-4">
          <span className="text-content-secLight dark:text-content-secDark">specialite:</span>{' '}
          <span className="text-sage-dark dark:text-sage-badge">"DSI : Développement des Systèmes d'Information"</span>,
        </p>
        <p className="pl-4">
          <span className="text-content-secLight dark:text-content-secDark">stageRecherche:</span> &#123;
        </p>
        <p className="pl-8">
          <span className="text-content-secLight dark:text-content-secDark">type:</span>{' '}
          <span className="text-rose-dark dark:text-rose-powder">'PFE (Projet Fin d’Études)'</span>,
        </p>
        <p className="pl-8">
          <span className="text-content-secLight dark:text-content-secDark">periode:</span>{' '}
          <span className="text-sage-dark dark:text-sage-badge">'Février → Mai 2027'</span>,
        </p>
        <p className="pl-8">
          <span className="text-content-secLight dark:text-content-secDark">disponible:</span>{' '}
          <span className="text-denim-600 dark:text-denim-300 font-bold">true</span>,
        </p>
        <p className="pl-4">&#125;,</p>
        <p>&#125;;</p>
      </div>
    </div>
  );
};
