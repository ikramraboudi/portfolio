import React from 'react';
import { Send, Eye, CheckCircle, Clock, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import { getAssetUrl } from '../../utils/paths';

export const PfeBanner: React.FC = () => {
  return (
    <section id="stage-pfe" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-denim-500 via-denim-600 to-denim-700 text-white p-8 sm:p-10 md:p-14 shadow-soft-lg">
        {/* Motifs géométriques décoratifs */}
        <div
          className="absolute -right-20 -top-20 w-80 h-80 bg-rose-powder/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            {/* Titre officiel de section avec emoji */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight flex items-center gap-3 mb-3">
              <span className="text-3xl sm:text-4xl lg:text-5xl select-none" aria-hidden="true">🎯</span>
              <span>Stage PFE</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-denim-100 font-medium leading-relaxed mb-4">
              Disponible de février à mai 2027 pour concevoir des applications web et mobiles innovantes.
            </p>

            <p className="text-sm sm:text-base text-denim-100/90 leading-relaxed">
              Prête à m'investir pleinement au sein de votre équipe pour concevoir des applications web & mobiles complètes (Flutter, Symfony, Go) avec rigueur, autonomie et méthodologie Agile.
            </p>

            {/* Points d'engagement */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-denim-50 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-rose-soft" />
                <span>Réponse garantie sous 24 h</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-soft" />
                <span>Lieu : à discuter (Tunisie)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-rose-soft" />
                <span>3e année Licence DSI (ISET Kélibia)</span>
              </span>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-denim-700 hover:bg-denim-50 font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              <span>Me contacter pour un PFE</span>
              <Send className="w-4 h-4 text-denim-500" />
            </a>

            <a
              href={getAssetUrl(profile.cvPath)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm"
              title="Consulter mon CV (PDF)"
            >
              <Eye className="w-4 h-4" />
              <span>Consulter mon CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
