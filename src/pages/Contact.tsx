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

  const { t } = useTranslation();

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
        <title>About | Alsafwa Factory</title>
        <meta
          name="description"
          content="Learn more about Alsafwa Factory."
        />
        <link
          rel="canonical"
          href="https://alsafwafactory.vercel.app/about"
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
