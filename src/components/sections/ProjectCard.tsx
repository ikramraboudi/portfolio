import React from 'react';
import { ExternalLink, Github, ZoomIn } from 'lucide-react';
import { Project } from '../../types';
import { getAssetUrl } from '../../utils/paths';
import { TechLogo } from '../common/TechLogo';

interface ProjectCardProps {
  project: Project;
  onOpenLightbox: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenLightbox }) => {
  const isKlitchi = project.id === 'klitchi';

  const handleCardClick = (e: React.MouseEvent) => {
    // Si l'utilisateur clique sur un lien ou un bouton spécifique, ne pas déclencher le lien global
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }
    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col rounded-3xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Conteneur de la capture avec object-fit: contain sur fond doux */}
      <div className="relative w-full h-56 sm:h-64 bg-surface-softLight/60 dark:bg-surface-softDark/60 p-4 sm:p-5 flex items-center justify-center overflow-hidden border-b border-line-light/60 dark:border-line-dark/60">
        <img
          src={getAssetUrl(project.image)}
          alt={`Capture d'écran du projet ${project.title}`}
          loading="lazy"
          className="max-h-full max-w-full object-contain rounded-xl drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
        />

        {/* Bouton loupe Lightbox */}
        <button
          type="button"
          onClick={e => {
            e.stopPropagation();
            onOpenLightbox(project);
          }}
          aria-label={`Agrandir la capture de ${project.title}`}
          className="absolute top-3 right-3 p-2 rounded-xl bg-surface-light/90 dark:bg-surface-dark/90 text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark border border-line-light/80 dark:border-line-dark/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm"
          title="Agrandir la capture"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        {/* Badge catégorie */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-light/95 dark:bg-surface-dark/95 text-denim-600 dark:text-denim-300 border border-line-light dark:border-line-dark backdrop-blur-md shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Corps de la carte */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tag de contexte */}
          <span className="text-[11px] font-mono text-content-secLight/80 dark:text-content-secDark/80">
            {project.contextTag}
          </span>

          {/* Titre & Sous-titre */}
          <h3 className="font-serif text-xl font-bold text-content-mainLight dark:text-content-mainDark mt-1 group-hover:text-denim-600 dark:group-hover:text-denim-400 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-denim-500 shrink-0 ml-2" />
          </h3>
          {project.subtitle && (
            <p className="text-xs font-medium text-denim-600/80 dark:text-denim-400/80 mt-0.5">
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-content-secLight dark:text-content-secDark mt-3 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Badges des technologies */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map(tech => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-surface-softLight dark:bg-surface-softDark text-content-mainLight dark:text-content-mainDark border border-line-light/50 dark:border-line-dark/50"
              >
                <TechLogo slug={tech.logoSlug} name={tech.name} className="w-3.5 h-3.5" />
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Boutons d'accès aux dépôts */}
        <div className="mt-6 pt-4 border-t border-line-light/60 dark:border-line-dark/60">
          {isKlitchi && project.additionalRepos ? (
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-mono text-content-secLight dark:text-content-secDark">
                4 Dépôts GitHub interconnectés :
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {project.additionalRepos.map(repo => (
                  <a
                    key={repo.label}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${repo.label} : ${repo.role}`}
                    className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold bg-denim-50 dark:bg-denim-900/30 text-denim-700 dark:text-denim-300 hover:bg-denim-100 dark:hover:bg-denim-900/60 border border-denim-200/60 dark:border-denim-700/50 transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>{repo.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-denim-600 dark:text-denim-400 hover:text-denim-700 dark:hover:text-denim-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Voir le projet sur GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
