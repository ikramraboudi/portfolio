import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data/experience';
import { SectionHeading } from '../common/SectionHeading';
import { ExperienceItem } from '../../types';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education' | 'association'>('all');

  const filteredItems =
    activeTab === 'all'
      ? experiences
      : experiences.filter(item => {
          if (activeTab === 'education') {
            return item.type === 'education' || item.type === 'certification';
          }
          return item.type === activeTab;
        });

  const getIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="w-5 h-5 text-denim-600 dark:text-denim-300" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-rose-dark dark:text-rose-powder" />;
      case 'certification':
        return <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'association':
        return <Users className="w-5 h-5 text-sage-dark dark:text-sage-badge" />;
    }
  };

  return (
    <section id="parcours" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="PARCOURS & ÉTUDES"
        title="Expérience, formation &"
        highlight="engagements"
        description="Une trajectoire continue alliant rigueur académique en DSI, stages en entreprise et responsabilités associatives actives."
      />

      {/* Onglets de filtrage */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {[
          { id: 'all', label: 'Tout le parcours' },
          { id: 'experience', label: 'Expérience professionnelle (Stages)' },
          { id: 'education', label: 'Formation & Certifications' },
          { id: 'association', label: 'Vie associative (Club T’SCAI)' },
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-denim-500 text-white shadow-sm'
                : 'bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark border border-line-light dark:border-line-dark hover:bg-surface-softLight dark:hover:bg-surface-softDark'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Timeline Verticale */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-line-light dark:border-line-dark space-y-10 sm:space-y-12 ml-2 sm:ml-4">
        {filteredItems.map(item => (
          <div key={item.id} className="relative group">
            {/* Puce sur l'axe vertical */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-light dark:bg-surface-dark border-2 border-line-light dark:border-line-dark shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-denim-400 transition-all">
              {getIcon(item.type)}
            </div>

            {/* Contenu de la carte */}
            <div className="p-6 sm:p-7 rounded-3xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-denim-600 dark:text-denim-400 bg-denim-50 dark:bg-denim-900/30 px-3 py-1 rounded-full border border-denim-200/50 dark:border-denim-700/40">
                  {item.badge}
                </span>
                <div className="flex items-center gap-3 text-xs text-content-secLight dark:text-content-secDark font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-content-mainLight dark:text-content-mainDark mt-2">
                {item.title}
              </h3>

              <h4 className="text-sm font-semibold text-denim-600 dark:text-denim-300 mt-0.5">
                {item.companyOrOrg}
              </h4>

              {/* Faits marquants */}
              <ul className="mt-4 space-y-2">
                {item.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secLight dark:text-content-secDark leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sage-badge shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
