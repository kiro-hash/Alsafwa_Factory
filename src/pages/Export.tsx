import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import exportbg from "../assets/exportbg.png";
import callimg from "../assets/material-symbols_call.png"
import "./styles/Export.css";

const Export = () => {
  return (
    <>
      <NavBar />
      <div className="export">
        <img src={exportbg} alt="" />
        <div className="row">
            <div className="circle">
                <img src={callimg} alt="phone" />
            </div>
          <p>Exporting Manager 01023235000/01023236000</p>
          <a href="">Via Whatsapp</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Export;
