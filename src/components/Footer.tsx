import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import './styles/Footer.css'
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Al Safwa logo" />
          <h3>{t("footerBrand")}</h3>
          <p>{t("footerDesc")}</p>
        </div>

        <div className="footer-col">
          <h4>{t("footerNav")}</h4>
          <Link to="/">{t("home")}</Link>
          <Link to="/about">{t("about")}</Link>
          <Link to="/products">{t("products")}</Link>
          <Link to="/export">{t("export")}</Link>
          <Link to="/branches">{t("branches")}</Link>
        </div>

        <div className="footer-col">
          <h4>{t("footerFollow")}</h4>
          <a href="#">{t("facebook")}</a>
          <a href="#">{t("instagram")}</a>
          <a href="#">{t("twitter")}</a>
          <a href="#">{t("threads")}</a>
        </div>

        <div className="footer-col">
          <h4>{t("footerContact")}</h4>
          <a href="#">{t("whatsapp")}</a>
          <a href="#">{t("sendNow")}</a>
        </div>

        <div className="footer-col">
          <h4>{t("footerJoin")}</h4>
          <a href="#">{t("partners")}</a>
          <a href="#">{t("joinNow")}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {t("copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer