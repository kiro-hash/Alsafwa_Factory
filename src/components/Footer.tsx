import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Al Safwa logo" />
          <h3>Al Safwa</h3>
          <p>Taste the Highest Quality... Honesty in Every Deal.</p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/export">Export</Link>
          <Link to="/branches">Branches</Link>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter X</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Threads</a>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <a href="#">Contact Via WhatsApp</a>
          <a href="#">Send Now</a>
        </div>

        <div className="footer-col">
          <h4>Join Us</h4>
          <a href="#">Be from our partners</a>
          <a href="#">Join Now</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Al Safwa Processed Cheese Factory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;