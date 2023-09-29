import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // Make sure to import this properly

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    resources: {
      tr: {
        translation: require("./locales/tr/translation.json")
      },
      en: {
        translation: require("./locales/en/translation.json")
      },
    },
  });

export default i18n;
