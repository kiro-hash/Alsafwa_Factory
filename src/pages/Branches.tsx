import BranchMap from "../components/BranchMap ";
import Footer from "../components/Footer";
import LangBtn from "../components/LangBtn";
import NavBar from "../components/NavBar";

const Branches = () => {
  return (
    <>
      <NavBar />
      <div className="branches-page">
        <BranchMap />
      </div>
      <LangBtn/>
      <Footer />
    </>
  );
};

export default Branches;
