import { useTranslation } from "react-i18next";
import heroimg from "../assets/triangles.png"
import NavBar from "../components/NavBar";
import './styles/Home.css'
import { Link } from "react-router-dom";
import GlassBoxHero from "../components/GlassBoxHero";

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
          <div className="herobtns">
          <Link className="darkbtn" to={"/products"}>{t("productsbtn")}</Link>
          <Link className="lightbtn" to={"/contact"}>{t("contact")}</Link>
        </div>
        <div className="achv">
          <GlassBoxHero t1={t("t01")} t2={t("t02")} t3={t("t03")}/>
          <GlassBoxHero t1={t("t11")} t2={t("t22")} t3={t("t33")}/>
          <GlassBoxHero t1={t("t111")} t2={t("t222")} t3={t("t333")}/>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;