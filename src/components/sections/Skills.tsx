import React, { useState } from 'react';
import { skillCategories } from '../../data/skills';
import { useLanguage } from '../../i18n/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { TechLogo } from '../common/TechLogo';

export const Skills: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | 'all'>('all');

  const displayedCategories =
    selectedCategoryIndex === 'all'
      ? skillCategories
      : [skillCategories[selectedCategoryIndex]];

  return (
    <section id="competences" className="my-8 py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-[2.5rem] bg-surface-softLight/60 dark:bg-surface-softDark/50 border border-line-light/60 dark:border-line-dark/60 transition-colors">
      <SectionHeading
        emoji="🛠️"
        title={t.skills.sectionTitle}
        subtitle={t.skills.sectionSubtitle}
      />

      {/* Filtres par catégorie */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
        <button
          type="button"
          onClick={() => setSelectedCategoryIndex('all')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
            selectedCategoryIndex === 'all'
              ? 'bg-navy text-navy-text shadow-sm'
              : 'bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark border border-line-light dark:border-line-dark hover:bg-surface-softLight dark:hover:bg-surface-softDark'
          }`}
        >
          {t.skills.allCategories}
        </button>
        {skillCategories.map((cat, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedCategoryIndex(idx)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              selectedCategoryIndex === idx
                ? 'bg-navy text-navy-text shadow-sm'
                : 'bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark border border-line-light dark:border-line-dark hover:bg-surface-softLight dark:hover:bg-surface-softDark'
            }`}
          >
            {cat.title[lang]}
          </button>
        ))}
      </div>

      {/* Grille des catégories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {displayedCategories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-lg font-semibold text-navy dark:text-navy-primary">
                  {cat.title[lang]}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-denim-50 dark:bg-denim-900/40 text-denim-600 dark:text-denim-300 font-semibold">
                  {cat.skills.length}
                </span>
              </div>
              {cat.description && (
                <p className="text-xs text-content-secLight dark:text-content-secDark mb-5 leading-relaxed">
                  {cat.description[lang]}
                </p>
              )}
            </div>

            {/* Badges technologiques avec logos SVG officiels */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {cat.skills.map(skill => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2 p-2.5 rounded-xl bg-surface-softLight/60 dark:bg-surface-softDark/60 border border-line-light/50 dark:border-line-dark/50 hover:bg-surface-light dark:hover:bg-surface-dark hover:border-denim-300 dark:hover:border-denim-600 transition-all duration-200"
                >
                  <TechLogo
                    slug={skill.slug}
                    name={skill.name}
                    invertDark={skill.invertDark}
                    className="w-5 h-5 shrink-0"
                  />
                  <span className="text-xs font-medium text-content-mainLight dark:text-content-mainDark truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
