import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profile } from '../../data/profile';
import { getAssetUrl } from '../../utils/paths';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-line-light dark:border-line-dark bg-surface-softLight/40 dark:bg-surface-softDark/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Marque & Disponibilité */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-denim-500 to-rose-powder p-0.5">
                <div className="w-full h-full rounded-[10px] bg-surface-light dark:bg-surface-dark flex items-center justify-center font-serif font-bold text-sm text-denim-600 dark:text-denim-300">
                  IR
                </div>
              </div>
              <span className="font-serif font-bold text-xl text-content-mainLight dark:text-content-mainDark">
                {profile.name}
              </span>
            </div>
            <p className="text-sm text-content-secLight dark:text-content-secDark max-w-md leading-relaxed">
              {profile.tagline}
            </p>
            {/* Rappel du badge de disponibilité PFE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-sage-soft text-sage-dark dark:bg-sage-dark/20 dark:text-sage-badge border border-sage-badge/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-sage-badge animate-pulse" />
              <span>{profile.availability.status} · {profile.availability.period}</span>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-content-mainLight dark:text-content-mainDark mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-content-secLight dark:text-content-secDark">
              <li>
                <a href="#accueil" className="hover:text-denim-600 dark:hover:text-denim-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-denim-600 dark:hover:text-denim-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#competences" className="hover:text-denim-600 dark:hover:text-denim-400 transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projets" className="hover:text-denim-600 dark:hover:text-denim-400 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-denim-600 dark:hover:text-denim-400 transition-colors">
                  Parcours & Expérience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-denim-600 dark:hover:text-denim-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux & CV */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-content-mainLight dark:text-content-mainDark mb-4">
              Connexion
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub d'Ikram Raboudi"
                className="p-2.5 rounded-xl border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark hover:text-denim-600 dark:hover:text-denim-300 hover:scale-105 transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn d'Ikram Raboudi"
                className="p-2.5 rounded-xl border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark hover:text-denim-600 dark:hover:text-denim-300 hover:scale-105 transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Envoyer un email à Ikram Raboudi via Gmail"
                title="Envoyer un email (Gmail)"
                className="p-2.5 rounded-xl border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark hover:text-denim-600 dark:hover:text-denim-300 hover:scale-105 transition-all shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a
              href={getAssetUrl(profile.cvPath)}
              download="CV_Ikram_Raboudi_PFE.pdf"
              className="text-xs text-denim-600 dark:text-denim-400 hover:underline font-mono"
            >
              → Télécharger le CV (PDF)
            </a>
          </div>
        </div>

        {/* Ligne inférieure & Copyright */}
        <div className="mt-12 pt-8 border-t border-line-light dark:border-line-dark flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-content-secLight dark:text-content-secDark">
          <p className="flex items-center gap-1.5">
            <span>© 2026 Ikram Raboudi · Conçu avec passion & soin</span>
            <Heart className="w-3.5 h-3.5 text-rose-powder fill-rose-powder" />
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark hover:bg-surface-softLight dark:hover:bg-surface-softDark transition-colors text-content-mainLight dark:text-content-mainDark font-medium"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
