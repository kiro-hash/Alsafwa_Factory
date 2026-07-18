import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./styles/Home.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GlassBoxHero from "../components/GlassBoxHero";
import LangBtn from "../components/LangBtn";

import heroimg from "../assets/triangles.png";
import cowBanner from "../assets/farm-hero.jpg";

import factoryImg from "../assets/factory.jpg";
import exportImg from "../assets/export-ship.jpg";
import products from "../Data/Products";

const Home = () => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "ar";

  return (
    <div className={`home ${isRTL ? "rtl" : "ltr"}`}>
      <LangBtn />

      <NavBar />

      {/* ================= HERO ================= */}

      <section className="hero">
        <img src={heroimg} alt="Hero" />

        <div className="herotext">
          <h1>{t("heroheader")}</h1>

          <p>{t("herodesc")}</p>

          <div className="herobtns">
            <Link className="darkbtn" to="/products">
              {t("productsbtn")}
            </Link>

            <Link className="lightbtn" to="/contact">
              {t("contact")}
            </Link>
          </div>

          <div className="achv">
            <GlassBoxHero
              t1={t("t01")}
              t2={t("t02")}
              t3={t("t03")}
            />

            <GlassBoxHero
              t1={t("t11")}
              t2={t("t22")}
              t3={t("t33")}
            />

            <GlassBoxHero
              t1={t("t111")}
              t2={t("t222")}
              t3={t("t333")}
            />
          </div>
        </div>
      </section>

      <section className="products-section">
        <h2>{t("productstitle")}</h2>
        <div className="products-showcase">
          <img
            className="products-bg"
            src={cowBanner}
            alt={t("productstitle")}
          />
          <div className="products-tags-grid">
            {products.map((product, index) => (
              <div
                className="products-tag-cell"
                key={index}
              >
                <div className="pimg">
                  <img
                    src={product.productImg}
                    alt={product.name}
                  />
                </div>

                <Link
                  to="/products"
                  className="view-details"
                >
                  {t("viewdetails")}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile List */}
          <div className="products-mobile-list">
            {products.map((product, index) => (
              <div
                className="product-mobile-card"
                key={index}
              >
                <img
                  src={product.productImg}
                  alt={product.name}
                />

                <Link
                  to="/products"
                  className="view-details"
                >
                  {t("viewdetails")}
                </Link>
              </div>
            ))}
          </div>

          <Link to="/products" className="see-more">
            {t("seemore")}
          </Link>
        </div>
      </section>

      <section className="whyus-section">
        <h2>{t("whyustitle")}</h2>

        <div className="whyus-top">
          <div className="whyus-copy">
            <p className="whyus-desc">{t("whyusdesc")}</p>
          </div>

          <div className="whyus-photo">
            <img src={factoryImg} alt={t("whyustitle")} />
          </div>
        </div>

        <div className="whyus-grid">
          <div className="whyus-card">
            <span className="whyus-icon">✔</span>

            <h3>{t("quality1title")}</h3>

            <p>{t("quality1desc")}</p>
          </div>

          <div className="whyus-card">
            <span className="whyus-icon">⚙</span>

            <h3>{t("quality2title")}</h3>

            <p>{t("quality2desc")}</p>
          </div>

          <div className="whyus-card">
            <span className="whyus-icon">🛡</span>

            <h3>{t("quality3title")}</h3>

            <p>{t("quality3desc")}</p>
          </div>

          <div className="whyus-card">
            <span className="whyus-icon">🤝</span>

            <h3>{t("quality4title")}</h3>

            <p>{t("quality4desc")}</p>
          </div>
        </div>
      </section>

      <section className="countries-card">
        <div className="countries-photo">
          <img src={exportImg} alt={t("exporting")} />

          <div className="countries-text">
            <span className="eyebrow eyebrow-light">
              {t("exporting")}
            </span>

            <h3>{t("exportingdesc")}</h3>

            <div className="countries-stats">
              <div className="stat-line">
                <span className="check-icon">✓</span>

                <p>{t("feature1")}</p>
              </div>

              <div className="stat-line">
                <span className="check-icon">✓</span>

                <p>{t("feature2")}</p>
              </div>

              <div className="stat-line">
                <span className="check-icon">✓</span>

                <p>{t("feature3")}</p>
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
