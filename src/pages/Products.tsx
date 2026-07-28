import { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";
import "./styles/Products.css";
import { useSearchParams } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import products from "../Data/Products";

const Products = () => {
  const { t, i18n } = useTranslation();

  const [searchParams] = useSearchParams();

  const productId = Number(searchParams.get("product"));

  const initialIndex = products.findIndex(
    (p) => p.id === productId,
  );

  const [selectedIndex, setSelectedIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0,
  );

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <LangBtn />
      <NavBar />
      <Helmet>
        <html lang={i18n.language} />

        <title>
          {i18n.language === "ar"
            ? "المنتجات | مصنع الصفوة"
            : "Products | Al Safwa Factory"}
        </title>

        <meta
          name="description"
          content={
            i18n.language === "ar"
              ? "اكتشف منتجات مصنع الصفوة من الجبن المطبوخ عالية الجودة."
              : "Explore Al Safwa Factory's premium processed cheese products."
          }
        />

        <link
          rel="canonical"
          href={`https://alsafwafactory.com/${i18n.language}/products`}
        />

        <link
          rel="alternate"
          hrefLang="ar"
          href="https://alsafwafactory.com/ar/products"
        />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://alsafwafactory.com/en/products"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://alsafwafactory.com/ar/products"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={
            i18n.language === "ar"
              ? "المنتجات | مصنع الصفوة"
              : "Products | Al Safwa Factory"
          }
        />

        <meta
          property="og:description"
          content={
            i18n.language === "ar"
              ? "اكتشف منتجات مصنع الصفوة من الجبن المطبوخ عالية الجودة."
              : "Explore Al Safwa Factory's premium processed cheese products."
          }
        />

        <meta
          property="og:url"
          content={`https://alsafwafactory.com/${i18n.language}/products`}
        />

        <meta
          property="og:image"
          content="https://alsafwafactory.com/logo.png"
        />
      </Helmet>

      <div className="pcontainer">
        <button
          className={`products-menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰ {t("products")}
        </button>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <h1>{t("products")}</h1>

          <div className="mproducts">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedIndex(index);
                  setMenuOpen(false);
                }}
              >
                <h3>{t(product.productName)}</h3>
              </button>
            ))}
          </div>
        </div>

        {menuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div className="product">
          <div className="product-top">
            <img
              src={products[selectedIndex].productImg}
              alt={t(products[selectedIndex].productName)}
            />

            <div className="product-info">
              <h2>
                {t(products[selectedIndex].productName)}
              </h2>

              <button className="order-btn">
                {t("orderNow")}
              </button>
            </div>
          </div>

          <p>{t(products[selectedIndex].productDesc)}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
