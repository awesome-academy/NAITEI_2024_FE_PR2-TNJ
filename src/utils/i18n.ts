import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locale/en.json';
import vi from '../locale/vi.json';

const getLanguage = () => {
  const storedLanguage = localStorage.getItem('language');
  return storedLanguage ? storedLanguage : 'en';
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
  lng: getLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
