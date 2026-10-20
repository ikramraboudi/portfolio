import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';
import { profile } from '../../data/profile';
import { Project } from '../../types';
import { getAssetUrl } from '../../utils/paths';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { Lightbox } from '../common/Lightbox';

export const Projects: React.FC = () => {
  const [selectedProjectForLightbox, setSelectedProjectForLightbox] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects =
    filter === 'all' ? projects : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projets" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="PORTFOLIO & RÉALISATIONS"
        title="Projets sélectionnés"
        highlight="en production & académiques"
        description="Une sélection de 6 projets concrets démontrant la maîtrise des architectures mobiles interconnectées, des applications web complexes et des outils desktop."
      />

      {/* Filtres de catégorie */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-1">
        {[
          { id: 'all', label: 'Tous les projets (6)' },
          { id: 'Mobile', label: 'Mobile (Flutter)' },
          { id: 'Web', label: 'Web (Symfony, Django REST, PHP)' },
          { id: 'Desktop', label: 'Desktop (JavaFX)' },
        ].map(item => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              filter === item.id
                ? 'bg-denim-500 text-white shadow-sm'
                : 'bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark border border-line-light dark:border-line-dark hover:bg-surface-softLight dark:hover:bg-surface-softDark'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Grille des 6 projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenLightbox={p => setSelectedProjectForLightbox(p)}
          />
        ))}
      </div>

      {/* Bouton vers tous les dépôts GitHub */}
      <div className="mt-14 flex justify-center">
        <a
          href={profile.socials.repositories}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-mainLight dark:text-content-mainDark hover:bg-surface-softLight dark:hover:bg-surface-softDark hover:border-denim-400 font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-soft"
        >
          <Github className="w-5 h-5 text-denim-600 dark:text-denim-400" />
          <span>Voir tous mes dépôts sur GitHub</span>
          <ExternalLink className="w-4 h-4 text-content-secLight dark:text-content-secDark" />
        </a>
      </div>

      {/* Lightbox pour la capture agrandie */}
      {selectedProjectForLightbox && (
        <Lightbox
          isOpen={true}
          onClose={() => setSelectedProjectForLightbox(null)}
          imageSrc={getAssetUrl(selectedProjectForLightbox.image)}
          imageAlt={`Capture d'écran du projet ${selectedProjectForLightbox.title}`}
          title={selectedProjectForLightbox.title}
          githubUrl={selectedProjectForLightbox.githubUrl}
        />
      )}
    </section>
  );
};
