import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translateData from "./translate.json";
// Avvalgi kodda savedLanguage va fallbackLng noto'g'ri qiymatlarda edi
// To'g'ri ishlashi uchun quyidagicha bo'lishi kerak:
const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';

i18n.use(initReactI18next).init({
  resources: translateData,
  lng: savedLanguage,
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;