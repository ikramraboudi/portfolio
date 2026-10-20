import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileDown, Send, Linkedin, Github } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { getAssetUrl } from '../../utils/paths';
import { profile } from '../../data/profile';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
              Ikram Raboudi
            </span>
            <span className="text-[11px] font-mono text-content-secLight dark:text-content-secDark -mt-1 hidden sm:inline">
              Licence DSI · PFE 2027
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
          {/* Bascule Thème */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
            className="p-2.5 rounded-full text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark hover:bg-surface-softLight dark:hover:bg-surface-softDark transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-denim-600" />}
          </button>

          {/* Bouton Télécharger CV */}
          <a
            href={getAssetUrl(profile.cvPath)}
            download="CV_Ikram_Raboudi_PFE.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-full border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-mainLight dark:text-content-mainDark hover:bg-surface-softLight dark:hover:bg-surface-softDark transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <FileDown className="w-4 h-4 text-denim-600 dark:text-denim-400" />
            <span>Mon CV</span>
          </a>

          {/* Bouton Me Contacter */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-denim-500 hover:bg-denim-600 text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>Me contacter</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Boutons Mobile (Thème + Hamburger) */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
            className="p-2 rounded-lg text-content-secLight dark:text-content-secDark hover:text-content-mainLight dark:hover:text-content-mainDark"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-denim-600" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
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
              href={getAssetUrl(profile.cvPath)}
              download="CV_Ikram_Raboudi_PFE.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-mainLight dark:text-content-mainDark"
            >
              <FileDown className="w-4 h-4 text-denim-600 dark:text-denim-400" />
              <span>Télécharger mon CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-denim-500 hover:bg-denim-600 text-white"
            >
              <span>Me contacter</span>
              <Send className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn d'Ikram Raboudi"
                className="p-2 rounded-xl border border-line-light dark:border-line-dark bg-surface-light dark:bg-surface-dark text-content-secLight dark:text-content-secDark hover:text-denim-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub d'Ikram Raboudi"
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
