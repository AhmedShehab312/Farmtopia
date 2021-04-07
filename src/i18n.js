import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from '../src/data/en.json';
import translationAR from '../src/data/ar.json';


let  globalsVariable = {
    currentLang:'en'
}
export const setLang = lang => {
    globalsVariable["currentLang"] = lang;
  };
  
  export const getlang = () => {
    return globalsVariable["currentLang"];
  };

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    ar:
    {
        translation: translationAR
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem("lang") != null ? localStorage.getItem("lang").toLowerCase() : "en",
        // keySeparator: true, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

setLang(localStorage.getItem("lang") != null ? localStorage.getItem("lang").toLowerCase() : "en");
changeLang(getlang(), false);

// change lang method
export function changeLang(newLang, checkLang = true) {
    var html = document.getElementsByTagName("html")[0];
    if (checkLang) {
        if (newLang === "ar") {
            html.classList.add("arabic_version");
            html.setAttribute("dir", "rtl");
        }
        else {
            html.classList.remove("arabic_version");
            html.setAttribute("dir", "ltr");
        }
        i18n.changeLanguage(newLang);
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    }
    else {
        if (newLang === "ar") {
            html.classList.add("arabic_version");
            html.setAttribute("dir", "rtl");
        }
    }
};

export default i18n;