import {Link} from "react-router-dom"
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png"
import './styles/NavBar.css'
import { PanelsTopLeft} from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const {t} = useTranslation();
  const [isopened,setisopened] = useState(false);
  return (
    <div className="container">
      <button className="menu-btn"  onClick={()=>{setisopened(!isopened)}}>
        <PanelsTopLeft  color="#393939" strokeWidth={2}/>
      </button>
      <div className={isopened? "navbar active":"navbar"}>
        <img src={logo} alt="logo" />
        <div className="links">
          <Link className="navlink" to="/">{t("home")}</Link>
          <Link className="navlink" to="/about">{t("about")}</Link>
          <Link className="navlink" to="/branches">{t("branches")}</Link>
          <Link className="navlink" to="/products">{t("products")}</Link>
          <Link className="navlink" to="/export">{t("export")}</Link>
        </div>
        <Link className="navlink contactbtn" to="/contact">{t("contact")}</Link>
      </div>
    </div>
  )
}

export default NavBar
