import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'mr';

interface Translations {
  [key: string]: {
    en: string;
    mr: string;
  };
}

const translations: Translations = {
  'nav.home': {
    en: 'Home',
    mr: 'मुख्यपृष्ठ'
  },
  'nav.menu': {
    en: 'Menu Items',
    mr: 'मेनू आयटम'
  },
  'nav.about': {
    en: 'Our Story',
    mr: 'आमची कहाणी'
  },
  'nav.contact': {
    en: 'Contact Us',
    mr: 'संपर्क करा'
  },
  'nav.order': {
    en: 'Order',
    mr: 'ऑर्डर करा'
  },
  'nav.join': {
    en: 'Join',
    mr: 'सामील व्हा'
  },
  'hero.title': {
    en: 'Taste Tradition Since 1957 at Amar Ragda',
    mr: '१९५७ पासून अमर रगडाची परंपरा चाखा'
  },
  'hero.subtitle': {
    en: 'Welcome to Amar Ragda, where every bite is a celebration of flavor and heritage.',
    mr: 'अमर रगडा मध्ये आपले स्वागत आहे, जिथे प्रत्येक घास चवीचा आणि वारसाचा उत्सव आहे.'
  },
  'hero.explore': {
    en: 'Explore',
    mr: 'शोध घ्या'
  },
  'hero.contact': {
    en: 'Contact',
    mr: 'संपर्क'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};