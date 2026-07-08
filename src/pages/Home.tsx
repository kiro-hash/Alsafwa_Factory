import { useTranslation } from "react-i18next";
import heroimg from "../assets/triangles.png"
import NavBar from "../components/NavBar";
import './styles/Home.css'

const Home = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <>
      <button onClick={changeLanguage}>
        {i18n.language === "en" ? "العربية" : "English"}
      </button>
      <NavBar/>
      <div className="hero">
        <img src={heroimg} alt="heroimg" />
        <div className="herotext">
          <h1>{t("heroheader")}</h1>
          <p>{t("herodesc")}</p>
        </div>
      </div>
    </>
  );
};

export default Home;