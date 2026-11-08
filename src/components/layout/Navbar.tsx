import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Eye, Send, Linkedin, Github } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useLanguage } from '../../i18n/LanguageContext';
import { profile } from '../../data/profile';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const { lang, setLang, t, getCvUrl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'accueil', label: t.nav.links.accueil },
    { id: 'a-propos', label: t.nav.links.aPropos },
    { id: 'competences', label: t.nav.links.competences },
    { id: 'projets', label: t.nav.links.projets },
    { id: 'parcours', label: t.nav.links.parcours },
    { id: 'contact', label: t.nav.links.contact },
  ];

  const activeSection = useScrollSpy(navLinks.map(l => l.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-light/90 dark:bg-bg-dark/90 backdrop-blur-md border-b border-line-light/80 dark:border-line-dark/80 shadow-soft'
          : 'bg-transparent py-2'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4"
        aria-label="Navigation principale"
      >
        {/* Logo / Monogramme */}
        <a
          href="#accueil"
          className="group flex items-center gap-3 text-content-mainLight dark:text-content-mainDark transition-transform hover:scale-105"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-denim-500 to-rose-powder p-0.5 shadow-sm">
            <div className="w-full h-full rounded-[10px] bg-surface-light dark:bg-surface-dark flex items-center justify-center">
              <span className="font-serif font-bold text-sm sm:text-base text-denim-600 dark:text-denim-300 tracking-tight">
                IR
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg tracking-tight group-hover:text-denim-600 dark:group-hover:text-denim-400 transition-colors">
              {profile.name}
            </span>
            <span className="text-[11px] font-mono text-content-secLight dark:text-content-secDark -mt-1 hidden sm:inline">
              {t.nav.logoSubtitle}
            </span>
          </div>
        </a>

        {/* Liens Desktop */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2 bg-surface-softLight/80 dark:bg-surface-softDark/80 px-3 py-1.5 rounded-full border border-line-light/60 dark:border-line-dark/60 backdrop-blur-sm">
          {navLinks.map(link => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-denim-500 text-white shadow-sm'
                      : 'text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark hover:bg-surface-light/60 dark:hover:bg-surface-dark/60'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          {/* Sélecteur de langue FR | EN */}
          <div
            role="group"
            aria-label={t.nav.languageAria}
            className="inline-flex items-center p-0.5 rounded-full border border-line-light dark:border-line-dark bg-surface-softLight/80 dark:bg-surface-softDark/80 text-xs font-mono"
          >
            <button
              type="button"
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
              aria-label={t.nav.switchFrAria}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-200 ${
                lang === 'fr'
                  ? 'bg-denim-500 text-white shadow-xs'
                  : 'text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark'
              }`}
            >
              FR
            </button>
            <span className="text-line-light dark:text-line-dark select-none px-0.5" aria-hidden="true">
              |
            </span>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              aria-label={t.nav.switchEnAria}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-denim-500 text-white shadow-xs'
                  : 'text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark'
              }`}
            >
              EN
            </button>
          </div>

          {/* Bascule Thème */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeLightAria : t.nav.themeDarkAria}
            className="p-2.5 rounded-full text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark hover:bg-surface-softLight dark:hover:bg-surface-softDark transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-denim-600" />}
          </button>

          {/* Bouton Consulter CV */}
          <a
            href={getCvUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-mainLight dark:text-content-mainDark hover:bg-surface-softLight dark:hover:bg-surface-softDark transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
            title={`${t.nav.viewCv} (PDF)`}
          >
            <Eye className="w-4 h-4 text-denim-600 dark:text-denim-400" />
            <span>{t.nav.viewCv}</span>
          </a>

          {/* Bouton Me Contacter */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-navy hover:bg-navy-card text-navy-text transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>{t.nav.contactMe}</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Boutons Mobile (Langue + Thème + Hamburger) */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-2">
          {/* Sélecteur de langue mobile compact */}
          <div
            role="group"
            aria-label={t.nav.languageAria}
            className="inline-flex items-center p-0.5 rounded-full border border-line-light dark:border-line-dark bg-surface-softLight/80 dark:bg-surface-softDark/80 text-[11px] font-mono mr-1"
          >
            <button
              type="button"
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
              aria-label={t.nav.switchFrAria}
              className={`px-2 py-0.5 rounded-full font-semibold transition-all duration-200 ${
                lang === 'fr'
                  ? 'bg-denim-500 text-white'
                  : 'text-content-secLight dark:text-content-secDark'
              }`}
            >
              FR
            </button>
            <span className="text-line-light dark:text-line-dark select-none" aria-hidden="true">|</span>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              aria-label={t.nav.switchEnAria}
              className={`px-2 py-0.5 rounded-full font-semibold transition-all duration-200 ${
                lang === 'en'
                  ? 'bg-denim-500 text-white'
                  : 'text-content-secLight dark:text-content-secDark'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeLightAria : t.nav.themeDarkAria}
            className="p-2 rounded-lg text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-denim-600" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.nav.menuCloseAria : t.nav.menuOpenAria}
            className="p-2 rounded-lg text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark hover:bg-surface-softLight dark:hover:bg-surface-softDark"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile Déroulant */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-line-light dark:border-line-dark bg-bg-light/95 dark:bg-bg-dark/95 backdrop-blur-xl px-4 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-2">
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-denim-500 text-white font-semibold'
                        : 'text-content-mainLight dark:text-content-mainDark hover:bg-surface-softLight dark:hover:bg-surface-softDark'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-4 border-t border-line-light dark:border-line-dark flex flex-col gap-2.5">
            <a
              href={getCvUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-mainLight dark:text-content-mainDark"
            >
              <Eye className="w-4 h-4 text-denim-600 dark:text-denim-400" />
              <span>{t.nav.viewCv}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-navy hover:bg-navy-card text-navy-text"
            >
              <span>{t.nav.contactMe}</span>
              <Send className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.linkedinAria}
                className="p-2 rounded-xl border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark hover:text-denim-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.githubAria}
                className="p-2 rounded-xl border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark hover:text-denim-600 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
