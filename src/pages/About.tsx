import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import productsImg from "../assets/productsImgAboutPage.png";
import "./styles/About.css";
import LangBtn from "../components/LangBtn";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <LangBtn />
      <NavBar />
      <Helmet>
        <title>About | Alsafwa Factory</title>
        <meta
          name="description"
          content="Learn more about Alsafwa Factory."
        />
        <link
          rel="canonical"
          href="https://alsafwafactory.vercel.app/about"
        />
      </Helmet>
      <div className="about-container">
        <section className="about-hero">
          <div className="about-text">
            <span className="eyebrow">
              {t("aboutEyebrow")}
            </span>
            <h1>{t("aboutTitle")}</h1>
            <p>{t("aboutP1")}</p>
            <p>{t("aboutP2")}</p>
            <p>{t("aboutP3")}</p>
          </div>
          <div className="about-image">
            <div className="image-glow" />
            <img
              src={productsImg}
              alt="Al Safwa cheese products"
            />
          </div>
        </section>
        <section className="cert-section">
          <h2>{t("certTitle")}</h2>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h3>ISO 9001</h3>
              <p>{t("iso9001")}</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h3>ISO 18001</h3>
              <h3>ISO 18001</h3>
              <p>{t("iso18001")}</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h3>ISO 22000</h3>
              <p>{t("iso22000")}</p>
            </div>
          </div>
        </section>

        <section className="slogan-section">
          <p className="about-slogan">
            "{t("aboutSlogan")}"
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
