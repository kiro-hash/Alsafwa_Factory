import { useTranslation } from "react-i18next";
import heroimg from "../assets/triangles.png"
import cowBanner from "../assets/farm-hero.jpg"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import './styles/Home.css'
import { Link } from "react-router-dom";
import GlassBoxHero from "../components/GlassBoxHero";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";

import fathallaLogo from "../assets/partner-fathalla.png";
import carrefourLogo from "../assets/partner-carrefour.png";
import spinneysLogo from "../assets/partner-spinneys.png";
import seoudiLogo from "../assets/partner-seoudi.png";


import productPhoto from "../assets/triangles.png";
import placeholderImg from "../assets/placeholder.png";

import factoryImg from "../assets/factory.jpg";
import exportImg from "../assets/export-ship.jpg";

const PARTNERS = [
  { name: "Seoudi", logo: seoudiLogo },
  { name: "Fathalla", logo: fathallaLogo },
  { name: "Carrefour", logo: carrefourLogo },
  { name: "Spinneys", logo: spinneysLogo },
  { name: "Seoudi", logo: seoudiLogo },
];

const PRODUCT_IMAGES = [
  productPhoto,
  placeholderImg,
  placeholderImg,
  placeholderImg,
  placeholderImg,
  placeholderImg,
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <LangBtn/>
      <NavBar/>
      <div className="hero">
        <img src={heroimg} alt="heroimg" />
        <div className="herotext">
          <h1>{t("heroheader", "AL SAFWA FACTORY")}</h1>
          <p>{t("herodesc", "Crafting premium, farm-fresh cheese with traditional expertise and uncompromising quality—bringing authentic flavor to every table.")}</p>
          <div className="herobtns">
          <Link className="darkbtn" to={"/products"}>{t("productsbtn", "Explore Our Products")}</Link>
          <Link className="lightbtn" to={"/contact"}>{t("contact", "Contact Us")}</Link>
        </div>
        <div className="achv">
          <GlassBoxHero t1={t("t01")} t2={t("t02")} t3={t("t03")}/>
          <GlassBoxHero t1={t("t11")} t2={t("t22")} t3={t("t33")}/>
          <GlassBoxHero t1={t("t111")} t2={t("t222")} t3={t("t333")}/>
        </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default Home;
