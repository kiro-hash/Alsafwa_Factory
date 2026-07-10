import { useTranslation } from "react-i18next";
import heroimg from "../assets/triangles.png"
import cowBanner from "../assets/farm-hero.jpg"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import './styles/Home.css'
import { Link } from "react-router-dom";
import GlassBoxHero from "../components/GlassBoxHero";

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
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="home">
      <button className="lang-fab" onClick={changeLanguage}>
        {i18n.language === "en" ? "ع" : "EN"}
      </button>
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

      <section className="partners-row">
        {PARTNERS.map((p) => (
          <img key={p.name} src={p.logo} alt={p.name} className="partner-logo" />
        ))}
      </section>

      <section className="products-section">
        <h2>{t("productstitle", "Products")}</h2>

        <div className="products-showcase">
          <img className="products-bg" src={cowBanner} alt="Al Safwa Factory dairy cows" />
          <div className="products-tags-grid">
            {PRODUCT_IMAGES.map((_, i) => (
              <div className="products-tag-cell" key={i}>
                <Link to="/products" className="view-details">
                  {t("viewdetails", "View Details")}
                </Link>
              </div>
            ))}
          </div>
          <Link to="/products" className="see-more">
            {t("seemore", "See More")}
          </Link>
        </div>
      </section>

      <section className="whyus-section">
        <h2>{t("whyustitle", "Why Us?")}</h2>

        <div className="whyus-top">
          <div className="whyus-copy">
            <p className="whyus-desc">
              {t(
                "whyusdesc",
                "At Al Safwa Factory, quality is more than a promise—it's the foundation of everything we do. From carefully selecting premium ingredients to applying advanced manufacturing techniques, we are committed to producing triangle processed cheese that delivers exceptional taste, consistent quality, and complete customer satisfaction."
              )}
            </p>
          </div>
          <div className="whyus-photo">
            <img src={factoryImg} alt="factory" />
          </div>
        </div>

        <div className="whyus-grid">
          <div className="whyus-card">
            <span className="whyus-icon">✔</span>
            <h3>{t("quality1title", "Premium Quality")}</h3>
            <p>{t("quality1desc", "We use the finest ingredients and highest standards.")}</p>
          </div>
          <div className="whyus-card">
            <span className="whyus-icon">⚙</span>
            <h3>{t("quality2title", "Advanced Technology")}</h3>
            <p>{t("quality2desc", "Modern production lines for superior products.")}</p>
          </div>
          <div className="whyus-card">
            <span className="whyus-icon">🛡</span>
            <h3>{t("quality3title", "Food Safety")}</h3>
            <p>{t("quality3desc", "Strict quality control to ensure your safety.")}</p>
          </div>
          <div className="whyus-card">
            <span className="whyus-icon">🤝</span>
            <h3>{t("quality4title", "Customer Satisfaction")}</h3>
            <p>{t("quality4desc", "We build trust through consistent quality and service.")}</p>
          </div>
        </div>
      </section>

      <section className="countries-card">
        <div className="countries-photo">
          <img src={exportImg} alt="Al Safwa Factory export shipment" />
        <div className="countries-text">
          <span className="eyebrow eyebrow-light">{t("exporting", "Exporting")}</span>
          <h3>{t("exportingdesc", "to multiple countries")}</h3>
          <div className="countries-stats">
            <div className="stat-line">
              <span className="check-icon">✓</span>
              <p>{t("feature1", "High Standards")}</p>
            </div>
            <div className="stat-line">
              <span className="check-icon">✓</span>
              <p>{t("feature2", "Fast Shipping")}</p>
            </div>
            <div className="stat-line">
              <span className="check-icon">✓</span>
              <p>{t("feature3", "International Quality")}</p>
            </div>
          </div>
        </div>
        
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
