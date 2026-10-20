import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { StatsBar } from './components/sections/StatsBar';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { PfeBanner } from './components/sections/PfeBanner';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Mise à jour des balises Open Graph et canonical selon VITE_SITE_URL (sans faux domaine)
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    if (siteUrl && !siteUrl.includes('example.com')) {
      const cleanSiteUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
      
      // Mise à jour de og:url
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', `${cleanSiteUrl}/`);

      // Mise à jour de og:image avec URL absolue
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', `${cleanSiteUrl}/assets/ikram.png`);
      }

      // Mise à jour du lien canonical
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', `${cleanSiteUrl}/`);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bg-light dark:bg-bg-dark text-content-mainLight dark:text-content-mainDark transition-colors duration-300">
      {/* Barre de progression du scroll */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Contenu principal */}
      <main id="main-content" className="flex-1">
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <PfeBanner />
        <Contact />
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
};

export default App;
