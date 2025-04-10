import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./languages/english";
import hindi from "./languages/hindi";
import nepali from "./languages/nepali";

const resources = {
  english: {
    translation:english
  },
  hindi: {
    translation: hindi
  },
  nepali: {
    translation: nepali
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "english", // default language
  interpolation: { escapeValue: false },
});

export default i18n;
