import { useTranslation } from "react-i18next";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ExportFeature from "../components/ExportFeature";
import LangBtn from "../components/LangBtn";
import { Helmet } from "react-helmet-async";

import "./styles/Export.css";

import productsimg from "../assets/productss.png";
import worldmap from "../assets/images.jpg";

import {
  Award,
  ShieldCheck,
  Globe,
  Handshake,
  Earth,
} from "lucide-react";

const Export = () => {
  const { t ,i18n} = useTranslation();

  return (
    <>
      <NavBar />
      <LangBtn />
      <Helmet>
        <title>
          {i18n.language === "ar"
            ? "التصدير | مصنع الصفوة"
            : "Export | Alsafwa Factory"}
        </title>

        <meta
          name="description"
          content={
            i18n.language === "ar"
              ? "تعرّف على خدمات التصدير العالمية التي يقدمها مصنع الصفوة ومنتجات الجبن عالية الجودة."
              : "Learn about Alsafwa Factory's export services and premium processed cheese products for international markets."
          }
        />

        <link
          rel="canonical"
          href={`https://alsafwafactory.com/${i18n.language}/export`}
        />
      </Helmet>

      <section className="export-page">
        <div className="export-overlay"></div>

        <img src={worldmap} className="world-map" alt="" />

        <div className="export-container">
          <div className="export-left">
            <h1>{t("exportHeroTitle")}</h1>

            <div className="line"></div>

            <p>{t("exportHeroDescription")}</p>

            <div className="features">
              <ExportFeature
                icon={<Award size={42} strokeWidth={2} />}
                title={t("exportFeature1")}
              />

              <ExportFeature
                icon={
                  <ShieldCheck size={42} strokeWidth={2} />
                }
                title={t("exportFeature2")}
              />

              <ExportFeature
                icon={<Globe size={42} strokeWidth={2} />}
                title={t("exportFeature3")}
              />

              <ExportFeature
                icon={
                  <Handshake size={42} strokeWidth={2} />
                }
                title={t("exportFeature4")}
              />
            </div>

            <button className="export-btn">
              <Earth size={24} />
              {t("exportButton")}
            </button>
          </div>

          <div className="export-right">
            <img
              src={productsimg}
              className="products"
              alt={t("exportProductsAlt")}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Export;
