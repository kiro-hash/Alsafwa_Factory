import { useTranslation } from "react-i18next";
import BranchMap from "../components/BranchMap ";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet-async";

const Branches = () => {
  const {i18n} =useTranslation();
  return (
    <>
      <NavBar />
      <Helmet>
        <title>
          {i18n.language === "ar"
            ? "الفروع | مصنع الصفوة"
            : "Branches | Alsafwa Factory"}
        </title>

        <meta
          name="description"
          content={
            i18n.language === "ar"
              ? "تعرف على مواقع فروع ومصنع الصفوة في مصر، واحصل على معلومات التواصل والعناوين."
              : "Find Alsafwa Factory's branches and factory locations in Egypt, including addresses and contact information."
          }
        />

        <meta
          name="keywords"
          content={
            i18n.language === "ar"
              ? "فروع مصنع الصفوة, عناوين الصفوة, مصنع الصفوة, مصنع جبن, كفر الشيخ, فوه, منتجات الألبان, مصر"
              : "Alsafwa Factory branches, cheese factory locations, dairy factory Egypt, Kafr El Sheikh, Fowa, processed cheese, Alsafwa Factory"
          }
        />

        <link
          rel="canonical"
          href={`https://alsafwafactory.com/${i18n.language}/branches`}
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
