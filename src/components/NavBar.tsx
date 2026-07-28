import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PanelsTopLeft } from "lucide-react";
import { useState } from "react";

import logo from "../assets/logo.png";
import "./styles/NavBar.css";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [isopened, setisopened] = useState(false);

  const lang = i18n.language;

  const closeMenu = () => setisopened(false);

  return (
    <div className="container">
      <button
        className="menu-btn"
        onClick={() => setisopened((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        <PanelsTopLeft color="#238639" strokeWidth={3} />
      </button>

      <div className={isopened ? "navbar active" : "navbar"}>
        <Link to={`/${lang}`} onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </Link>

        <div className="links">
          <Link className="navlink" to={`/${lang}`} onClick={closeMenu}>
            {t("home")}
          </Link>

          <Link className="navlink" to={`/${lang}/about`} onClick={closeMenu}>
            {t("about")}
          </Link>

          <Link
            className="navlink"
            to={`/${lang}/branches`}
            onClick={closeMenu}
          >
            {t("branches")}
          </Link>

          <Link
            className="navlink"
            to={`/${lang}/products`}
            onClick={closeMenu}
          >
            {t("products")}
          </Link>

          <Link
            className="navlink"
            to={`/${lang}/export`}
            onClick={closeMenu}
          >
            {t("export")}
          </Link>
        </div>

        <Link
          className="navlink contactbtn"
          to={`/${lang}/contact`}
          onClick={closeMenu}
        >
          {t("contact")}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;