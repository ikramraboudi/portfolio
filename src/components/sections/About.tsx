import React from 'react';
import { MapPin, GraduationCap, Globe, Target, Users, MessageSquare, CheckSquare, Sparkles, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';
import { SectionHeading } from '../common/SectionHeading';
import { WhoamiBlock } from './WhoamiBlock';

const valueIcons: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  CheckSquare: <CheckSquare className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

export const About: React.FC = () => {
  return (
    <section id="a-propos" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="À PROPOS DE MOI"
        title="Passionnée par la conception"
        highlight="web & mobile"
        description="Une approche rigoureuse et créative pour transformer chaque idée en une application fluide, intuitive et performante."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Colonne gauche : Bio & Whoami */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-content-mainLight dark:text-content-mainDark mb-4">
              Mon profil & mes motivations
            </h3>
            <p className="text-base sm:text-lg text-content-secLight dark:text-content-secDark leading-relaxed mb-4">
              {profile.bio}
            </p>
            <p className="text-sm sm:text-base text-content-secLight dark:text-content-secDark leading-relaxed">
              Curieuse et proactive, j'accorde une importance majeure à la propreté du code, à la fluidité des interfaces utilisateur et à la robustesse des architectures backend (REST, WebSockets, bases relationnelles et NoSQL).
            </p>
            <div className="mt-5 pt-4 border-t border-line-light/60 dark:border-line-dark/60 flex items-center gap-3">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-denim-50 dark:bg-denim-900/30 text-denim-600 dark:text-denim-300 hover:bg-denim-100 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>Consulter mon profil LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Bloc code signature */}
          <WhoamiBlock />
        </div>

        {/* Colonne droite : Cartes d'infos rapides & Valeurs */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Cartes d'infos rapides */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-denim-50 dark:bg-denim-900/30 text-denim-600 dark:text-denim-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark">
                  Localisation
                </span>
                <span className="text-sm font-semibold text-content-mainLight dark:text-content-mainDark">
                  {profile.quickFacts.location}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-rose-soft/80 dark:bg-rose-dark/20 text-rose-dark dark:text-rose-powder shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark">
                  Formation
                </span>
                <span className="text-sm font-semibold text-content-mainLight dark:text-content-mainDark">
                  Licence DSI — ISET Kélibia
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-sage-soft dark:bg-sage-dark/20 text-sage-dark dark:text-sage-badge shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark">
                  Langues
                </span>
                <span className="text-xs font-semibold text-content-mainLight dark:text-content-mainDark">
                  {profile.quickFacts.languages}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-denim-100 dark:bg-denim-800/40 text-denim-700 dark:text-denim-300 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark">
                  Objectif
                </span>
                <span className="text-xs font-bold text-denim-600 dark:text-denim-300">
                  {profile.quickFacts.search}
                </span>
              </div>
            </div>
          </div>

          {/* 4 Valeurs & Qualités */}
          <div className="p-6 rounded-3xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft">
            <h4 className="font-serif text-lg font-semibold text-content-mainLight dark:text-content-mainDark mb-4">
              Valeurs & Qualités clés
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {profile.values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-softLight/60 dark:bg-surface-softDark/60 border border-line-light/60 dark:border-line-dark/60"
                >
                  <div className="flex items-center gap-2 mb-1.5 text-denim-600 dark:text-denim-400 font-semibold text-sm">
                    {valueIcons[val.icon] || <Sparkles className="w-4 h-4" />}
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs text-content-secLight dark:text-content-secDark leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
