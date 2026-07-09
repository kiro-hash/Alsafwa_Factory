import { useTranslation } from "react-i18next";

const LangBtn = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div>
      <button className="langbtn" onClick={changeLanguage}>
        {i18n.language === "en" ? "ع" : "En"}
      </button>
    </div>
  );
};

export default LangBtn;