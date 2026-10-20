import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  githubUrl?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  githubUrl,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Aperçu agrandi de ${title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl md:rounded-3xl border border-line-light dark:border-line-dark shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* En-tête de la modale */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-line-light dark:border-line-dark bg-surface-softLight/60 dark:bg-surface-softDark/60">
          <h3 className="font-serif text-lg font-semibold text-content-mainLight dark:text-content-mainDark">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-denim-600 dark:text-denim-300 bg-denim-50 dark:bg-denim-900/40 hover:bg-denim-100 rounded-lg transition-colors"
              >
                <span>Dépôt GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark hover:bg-surface-softLight dark:hover:bg-surface-softDark transition-colors"
              aria-label="Fermer la vue agrandie"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image du projet */}
        <div className="p-4 sm:p-6 flex items-center justify-center overflow-auto bg-surface-softLight/30 dark:bg-surface-softDark/30">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[75vh] w-auto object-contain rounded-xl shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};
