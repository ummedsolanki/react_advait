import aboutImage from "../assets/About-us.jpg";

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-image-wrapper">
        <img src={aboutImage} alt="About Us" className="about-image" />
        <div className="about-overlay">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h2>
            <strong>Empowering Your Digital <span className="mobile-br"><br /> </span>Journey
            </strong> with Clarity and <span className="mobile-br"><br /></span>Confidence
          </h2>
        </div>

        <div className="about-right">
          <p>
            Advait Business Solutions is a trusted global technology partner
            with over 13 years of experience in delivering innovative,
            scalable enterprise solutions. Headquartered in Ahmedabad, India,
            the company supports organizations worldwide in their digital
            transformation journeys. Advait specializes in implementing and
            optimizing advanced technologies including SAP S/4HANA, RISE with
            SAP, Microsoft Dynamics, Odoo ERP, Analytics, AI/ML, and Custom
            Application Development.
          </p>
          <p>
            With a deep commitment to quality and a customer-first mindset,
            Advait empowers businesses across industries to enhance operational
            efficiency, embrace digital innovation, and achieve measurable
            business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
