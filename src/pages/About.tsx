import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import productsImg from "../assets/productsImgAboutPage.png";
import "./styles/About.css";
import LangBtn from "../components/LangBtn";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <LangBtn />
      <NavBar />
      <Helmet>
        <html lang={i18n.language} />

        <title>
          {i18n.language === "ar"
            ? "من نحن | مصنع الصفوة"
            : "About | Al Safwa Factory"}
        </title>

        <meta
          name="description"
          content={
            i18n.language === "ar"
              ? "تعرف على مصنع الصفوة، أحد أبرز مصانع الجبن المطبوخ في مصر، والتزامه بالجودة والابتكار وخدمة الأسواق المحلية والعالمية."
              : "Learn about Al Safwa Factory, a leading processed cheese manufacturer in Egypt, committed to quality, innovation, and serving local and international markets."
          }
        />

        <link
          rel="canonical"
          href={`https://alsafwafactory.com/${i18n.language}/about`}
        />

        <link
          rel="alternate"
          hrefLang="ar"
          href="https://alsafwafactory.com/ar/about"
        />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://alsafwafactory.com/en/about"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://alsafwafactory.com/ar/about"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={
            i18n.language === "ar"
              ? "من نحن | مصنع الصفوة"
              : "About | Al Safwa Factory"
          }
        />

        <meta
          property="og:description"
          content={
            i18n.language === "ar"
              ? "تعرف على مصنع الصفوة، أحد أبرز مصانع الجبن المطبوخ في مصر، والتزامه بالجودة والابتكار وخدمة الأسواق المحلية والعالمية."
              : "Learn about Al Safwa Factory, a leading processed cheese manufacturer in Egypt, committed to quality, innovation, and serving local and international markets."
          }
        />

        <meta
          property="og:url"
          content={`https://alsafwafactory.com/${i18n.language}/about`}
        />

        <meta
          property="og:image"
          content="https://alsafwafactory.com/logo.png"
        />

        <meta
          property="og:site_name"
          content="Al Safwa Factory"
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
