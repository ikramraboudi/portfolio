import React, { createContext, useContext, useState, useEffect } from 'react';
import { fr, TranslationKeys } from './fr';
import { en } from './en';
import { Language } from './types';
import { profile } from '../data/profile';
import { getAssetUrl } from '../utils/paths';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationKeys;
  getCvUrl: () => string;
}

const translations: Record<Language, TranslationKeys> = { fr, en };

const STORAGE_KEY = 'portfolio_lang';

const getInitialLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'fr') {
      return saved;
    }
  } catch {
    // Si localStorage bloqué, repli sur français par défaut
  }
  return 'fr';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignorer si localStorage est désactivé
    }
  };

  const t = translations[lang];

  // Helper pour obtenir le chemin correct du CV
  const getCvUrl = (): string => {
    const path = lang === 'en' && profile.hasEnglishCV ? profile.cvPath.en : profile.cvPath.fr;
    return getAssetUrl(path);
  };

  // Synchronisation dynamique du DOM (<html lang>, title, meta, og, json-ld)
  useEffect(() => {
    // 1. Attribut html lang
    document.documentElement.lang = lang;

    // 2. Document title
    document.title = t.meta.title;

    // 3. Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }

    // 4. Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t.meta.ogTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', t.meta.ogDescription);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : 'fr_FR');
    }

    // 5. Twitter tags
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', t.meta.twitterTitle);
    }

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', t.meta.twitterDescription);
    }

    // 6. JSON-LD inLanguage et description
    const scriptJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (scriptJsonLd) {
      try {
        const json = JSON.parse(scriptJsonLd.textContent || '{}');
        json.inLanguage = lang;
        json.jobTitle = t.meta.jsonLdJobTitle;
        json.description = t.meta.jsonLdDescription;
        scriptJsonLd.textContent = JSON.stringify(json, null, 2);
      } catch {
        // En cas d'erreur de parse, ignorer
      }
    }
  }, [lang, t]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getCvUrl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
