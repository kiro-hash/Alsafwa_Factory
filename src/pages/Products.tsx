import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";

const Products = () => {
    const {t} = useTranslation();
  return (
    <>
      <LangBtn />
      <NavBar />
      <div className="menu">
        <h1>{t("products")}</h1>
      </div>
      <Footer />
    </>
  );
};

export default Products;
