import { useState } from "react";
import "./styles/Contact.css";
import NavBar from "../components/NavBar";
import LangBtn from "../components/LangBtn";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [message, setMessage] = useState("");

  const phoneNumber = "201023236000";

  const { t ,i18n} = useTranslation();

  const sendToWhatsApp = () => {
    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <NavBar />
      <LangBtn />
      <Helmet>
        <title>
          {i18n.language === "ar"
            ? "اتصل بنا | مصنع الصفوة"
            : "Contact | Alsafwa Factory"}
        </title>

        <meta
          name="description"
          content={
            i18n.language === "ar"
              ? "تواصل مع مصنع الصفوة للاستفسارات، الشراكات، التصدير، وطلبات منتجات الجبن عالية الجودة."
              : "Contact Alsafwa Factory for inquiries, partnerships, export opportunities, and premium processed cheese products."
          }
        />

        <meta
          name="keywords"
          content={
            i18n.language === "ar"
              ? "اتصل بمصنع الصفوة, تواصل معنا, مصنع الصفوة, مصنع جبن, منتجات الألبان, تصدير الجبن, مصر"
              : "Contact Alsafwa Factory, contact us, cheese factory, dairy products, cheese export, Egypt"
          }
        />

        <link
          rel="canonical"
          href={`https://alsafwafactory.com/${i18n.language}/contact`}
        />
      </Helmet>
      <div className="contact-container">
        <div className="contact-card">
          <h2>{t("contact")}</h2>

          <textarea
            placeholder={t("contactplaceholder")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={sendToWhatsApp}>
            {t("sendbtn")}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
