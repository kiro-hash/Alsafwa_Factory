import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const LangBtn = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);

    const path = location.pathname.replace(/^\/(ar|en)/, "");

    navigate(`/${newLang}${path || "/"}`);
  };

  return (
    <button className="langbtn" onClick={changeLanguage}>
      {i18n.language === "en" ? "ع" : "En"}
    </button>
  );
};

export default LangBtn;