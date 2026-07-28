import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LanguageHandler() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang === "ar" || lang === "en") {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return null;
}