import { useTranslation } from "react-i18next";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ExportFeature from "../components/ExportFeature";
import LangBtn from "../components/LangBtn";

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
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <LangBtn />

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
                icon={<ShieldCheck size={42} strokeWidth={2} />}
                title={t("exportFeature2")}
              />

              <ExportFeature
                icon={<Globe size={42} strokeWidth={2} />}
                title={t("exportFeature3")}
              />

              <ExportFeature
                icon={<Handshake size={42} strokeWidth={2} />}
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