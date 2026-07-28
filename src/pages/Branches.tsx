import { useTranslation } from "react-i18next";
import BranchMap from "../components/BranchMap ";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet-async";

const Branches = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <NavBar />
      <Helmet>
        <html lang={i18n.language} />

        <title>
          {i18n.language === "ar"
            ? "الفروع | مصنع الصفوة"
            : "Branches | Al Safwa Factory"}
        </title>

        <meta
          name="description"
          content={
            i18n.language === "ar"
              ? "تعرف على مواقع فروع ومصنع الصفوة في مصر، واحصل على معلومات التواصل والعناوين."
              : "Find Al Safwa Factory's branches and factory locations in Egypt, including addresses and contact information."
          }
        />

        <link
          rel="canonical"
          href={`https://alsafwafactory.com/${i18n.language}/branches`}
        />

        <link
          rel="alternate"
          hrefLang="ar"
          href="https://alsafwafactory.com/ar/branches"
        />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://alsafwafactory.com/en/branches"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://alsafwafactory.com/ar/branches"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={
            i18n.language === "ar"
              ? "الفروع | مصنع الصفوة"
              : "Branches | Al Safwa Factory"
          }
        />

        <meta
          property="og:description"
          content={
            i18n.language === "ar"
              ? "تعرف على مواقع فروع ومصنع الصفوة في مصر، واحصل على معلومات التواصل والعناوين."
              : "Find Al Safwa Factory's branches and factory locations in Egypt, including addresses and contact information."
          }
        />

        <meta
          property="og:url"
          content={`https://alsafwafactory.com/${i18n.language}/branches`}
        />

        <meta
          property="og:image"
          content="https://alsafwafactory.com/logo.png"
        />

        <meta
          property="og:site_name"
          content="Al Safwa Factory"
        />
      </Helmet>
      <div className="branches-page">
        <BranchMap />
      </div>
      <LangBtn />
      <Footer />
    </>
  );
};

export default Branches;
