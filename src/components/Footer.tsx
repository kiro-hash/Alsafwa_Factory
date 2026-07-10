import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import "./styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <img src={logo} alt="logo" className="footer-logo" />

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
          <a href="#" target="_blank" rel="noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noreferrer">Twitter / X</a>
          <a href="#" target="_blank" rel="noreferrer">{t("products")}</a>
        </div>

        <div className="footer-col">
          <h4>{t("footerContact")}</h4>
          <a href="#">{t("footerContactWhatsapp")}</a>
          <a href="#">{t("footerSendMessage")}</a>
        </div>

        <div className="footer-col">
          <h4>{t("footerJoin")}</h4>
          <a href="#">{t("footerBecomePartner")}</a>
          <a href="#">{t("footerJoinNow")}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footerCopyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;
