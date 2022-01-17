import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import English from './constants/Language/English';
import German from './constants/Language/German';

const resources = {
  en: {
    translation: English,
  },
  gr: {
    translation: German,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'gr',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
