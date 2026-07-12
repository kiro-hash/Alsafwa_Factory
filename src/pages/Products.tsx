import { useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";
import "./styles/Products.css";

import products from "../Data/Products";

const Products = () => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <LangBtn />
      <NavBar />

      <div className="pcontainer">
        <div className="menu">
          <h1>{t("products")}</h1>

          <div className="mproducts">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
              >
                <h3>{t(product.productName)}</h3>
              </button>
            ))}
          </div>
        </div>

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
