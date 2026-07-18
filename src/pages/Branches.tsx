import BranchMap from "../components/BranchMap ";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet-async";

const Branches = () => {
  return (
    <>
      <NavBar />
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
      <div className="branches-page">
        <BranchMap />
      </div>
      <LangBtn />
      <Footer />
    </>
  );
};

export default Branches;
