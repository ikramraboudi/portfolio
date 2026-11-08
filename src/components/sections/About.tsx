import React from 'react';
import { MapPin, GraduationCap, Globe, Target, Users, MessageSquare, CheckSquare, Sparkles, Linkedin } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { AskIkram } from './AskIkram';

const valueIcons: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  CheckSquare: <CheckSquare className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

export const About: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="a-propos" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        emoji="👋"
        title={t.about.sectionTitle}
        subtitle={t.about.sectionSubtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Colonne gauche (7 cols) : Présentation textuelle & Cartes d'infos */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Carte de présentation principale */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-content-mainLight dark:text-content-mainDark mb-4">
              {t.about.cardTitle}
            </h3>

            {/* Paragraphe 1 exact */}
            <p className="text-base sm:text-lg text-content-secLight dark:text-content-secDark leading-relaxed mb-5">
              {profile.bioParagraph1[lang]}
            </p>

            {/* Paragraphe 2 exact (légèrement mis en valeur) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-softLight/70 dark:bg-surface-softDark/70 border-l-4 border-denim-500 text-content-mainLight dark:text-content-mainDark text-sm sm:text-base font-medium leading-relaxed mb-6">
              {profile.bioParagraph2[lang]}
            </div>

            <div className="pt-4 border-t border-line-light/60 dark:border-line-dark/60 flex items-center justify-between flex-wrap gap-3">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-denim-50 dark:bg-denim-900/40 text-denim-600 dark:text-denim-300 hover:bg-denim-100 dark:hover:bg-denim-900/60 transition-colors border border-denim-200/60 dark:border-denim-700/60"
              >
                <Linkedin className="w-4 h-4 text-denim-600 dark:text-denim-400" />
                <span>{t.about.viewLinkedIn}</span>
              </a>
              <span className="text-xs font-mono text-content-secLight dark:text-content-secDark">
                {t.about.institutionTag}
              </span>
            </div>
          </div>

          {/* Cartes d'infos rapides (4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-denim-50 dark:bg-denim-900/30 text-denim-600 dark:text-denim-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark">
                  {t.about.quickFacts.locationLabel}
                </span>
                <span className="text-sm font-semibold text-content-mainLight dark:text-content-mainDark">
                  {profile.quickFacts.location[lang]}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-rose-soft/80 dark:bg-rose-dark/20 text-rose-dark dark:text-rose-powder shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark">
                  {t.about.quickFacts.educationLabel}
                </span>
                <span className="text-sm font-semibold text-content-mainLight dark:text-content-mainDark">
                  {profile.quickFacts.education[lang]}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-sage-soft dark:bg-sage-dark/20 text-sage-dark dark:text-sage-badge shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark">
                  {t.about.quickFacts.languagesLabel}
                </span>
                <span className="text-xs font-semibold text-content-mainLight dark:text-content-mainDark">
                  {profile.quickFacts.languages[lang]}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-denim-100 dark:bg-denim-800/40 text-denim-700 dark:text-denim-300 shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark">
                  {t.about.quickFacts.targetLabel}
                </span>
                <span className="text-xs font-bold text-denim-600 dark:text-denim-300">
                  {profile.quickFacts.search[lang]}
                </span>
              </div>
            </div>
          </div>

          {/* 4 Valeurs & Qualités */}
          <div className="p-6 rounded-3xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft">
            <h4 className="font-serif text-lg font-semibold text-content-mainLight dark:text-content-mainDark mb-4">
              {t.about.valuesTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {profile.values.map((val, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-softLight/60 dark:bg-surface-softDark/60 border border-line-light/60 dark:border-line-dark/60"
                >
                  <div className="flex items-center gap-2 mb-1.5 text-denim-600 dark:text-denim-400 font-semibold text-sm">
                    {valueIcons[val.icon] || <Sparkles className="w-4 h-4" />}
                    <span>{val.title[lang]}</span>
                  </div>
                  <p className="text-xs text-content-secLight dark:text-content-secDark leading-relaxed">
                    {val.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne droite (5 cols) : Mini smartphone AskIkram */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="mb-3 text-center">
            <span className="text-xs font-mono uppercase tracking-wider text-denim-600 dark:text-denim-400 font-semibold">
              {t.about.simulationBadge}
            </span>
            <p className="text-xs text-content-secLight dark:text-content-secDark mt-0.5">
              {t.about.simulationSubtitle}
            </p>
          </div>
          <AskIkram />
        </div>
      </div>
    </section>
  );
};
