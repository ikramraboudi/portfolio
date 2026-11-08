import React from 'react';
import { ArrowUp, Github, Linkedin, Eye, Heart } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { lang, t, getCvUrl } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-navy-deep text-navy-text transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Marque & Disponibilité */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-primary to-navy-accent p-0.5">
                <div className="w-full h-full rounded-[10px] bg-navy-deep flex items-center justify-center font-serif font-bold text-sm text-navy-accent">
                  IR
                </div>
              </div>
              <span className="font-serif font-bold text-xl text-navy-text">
                {profile.name}
              </span>
            </div>
            <p className="text-sm text-navy-muted max-w-md leading-relaxed">
              {profile.tagline[lang]}
            </p>
            {/* Rappel du badge de disponibilité PFE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-navy-card text-navy-text border border-white/15 w-fit">
              <span className="w-2 h-2 rounded-full bg-sage-badge animate-pulse" />
              <span>
                {profile.availability.status[lang]} · {profile.availability.period[lang]}
              </span>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-navy-text mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-muted">
              <li>
                <a href="#accueil" className="hover:text-navy-text transition-colors">
                  {t.nav.links.accueil}
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-navy-text transition-colors">
                  {t.nav.links.aPropos}
                </a>
              </li>
              <li>
                <a href="#competences" className="hover:text-navy-text transition-colors">
                  {t.nav.links.competences}
                </a>
              </li>
              <li>
                <a href="#projets" className="hover:text-navy-text transition-colors">
                  {t.nav.links.projets}
                </a>
              </li>
              <li>
                <a href="#parcours" className="hover:text-navy-text transition-colors">
                  {t.nav.links.parcours}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-navy-text transition-colors">
                  {t.nav.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux & CV */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-navy-text mb-4">
              {t.footer.connectTitle}
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.githubAria}
                className="p-2.5 rounded-xl border border-white/10 bg-navy-card text-navy-muted hover:text-navy-accent hover:border-white/25 hover:scale-105 transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.linkedinAria}
                className="p-2.5 rounded-xl border border-white/10 bg-navy-card text-navy-muted hover:text-navy-accent hover:border-white/25 hover:scale-105 transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href={getCvUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-navy-primary hover:text-navy-accent hover:underline font-mono"
              title={`${t.footer.viewCv} (PDF)`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{t.footer.viewCv}</span>
            </a>
          </div>
        </div>

        {/* Ligne inférieure & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-muted">
          <p className="flex items-center gap-1.5">
            <span>{t.footer.copyright}</span>
            <Heart className="w-3.5 h-3.5 text-navy-accent fill-navy-accent" />
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-navy-card hover:bg-navy text-navy-text transition-colors font-medium"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
