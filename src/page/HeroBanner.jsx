
import bannerImage from "../assets/card1.jpg"; 
import logo from "../assets/advaitlogo.svg"; 

const HeroBanner = () => {
  return (
    <div
      className="hero-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          <em>Take Your Business</em>
          <br />
          <em>To Next Level</em>
        </h1>
        <p>Start Your Journey With Us Today</p>
        <button className="contact-btn">
          Contact Us <span>→</span>
        </button>
      </div>

      <img src={logo} alt="Logo" className="hero-logo" />
    </div>
  );
};

export default HeroBanner;
