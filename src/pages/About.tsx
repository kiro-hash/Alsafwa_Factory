import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import productsImg from "../assets/productsImgAboutPage.png";
import "./styles/About.css";

const About = () => {
  return (
    <>
      <NavBar />

      <div className="about-container">
        <section className="about-hero">
          <div className="about-text">
            <span className="eyebrow">Since 1984</span>
            <h1>About Al Safwa</h1>

            <p>
              Al Safwa Processed Cheese Factory is a fully integrated dairy
              manufacturing company operating across various sectors of the
              dairy industry. Since its establishment in 1984, the factory
              has become a leading name in dairy production, utilizing the
              latest Italian production technologies specialized in
              manufacturing a wide range of processed cheese products. Over
              the years, the factory has earned a strong reputation for
              consistently delivering products of exceptional quality.
            </p>

            <p>
              Thanks to our key competitive strengths—high product quality,
              customer satisfaction, and competitive pricing—we have
              successfully built strong and lasting trust with our customers
              throughout our many years of experience.
            </p>

            <p>
              Today, our products are widely distributed across the Egyptian
              market, where they enjoy a strong market presence and
              significant market share while maintaining competitive prices.
              In addition, we export to various Arab and African markets as
              part of our carefully planned and implemented sales strategy.
              This strategy allows us to maximize our high production
              capacity and take full advantage of our factory's advanced
              manufacturing capabilities.
            </p>
          </div>

          <div className="about-image">
            <div className="image-glow" />
            <img src={productsImg} alt="Al Safwa cheese products" />
          
          </div>
        </section>

        <section className="cert-section">
          <h2>
            Since product quality and food safety are among our highest
            priorities, our factory has been awarded the following
            internationally recognized quality and food safety
            certifications:
          </h2>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h3>ISO 9001</h3>
              <p>Quality Management System</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h3>ISO 18001</h3>
              <p>Occupational Health and Safety Management System</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h3>ISO 22000</h3>
              <p>(HACCP) – Food Safety Management System</p>
            </div>
          </div>
        </section>

        <section className="slogan-section">
          <p className="about-slogan">
            "Taste the Highest Quality... Honesty in Every Deal."
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;