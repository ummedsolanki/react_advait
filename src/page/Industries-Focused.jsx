import industryVideo from "../assets/industry.mp4";

export default function Industries() {
  return (
    <section className="industries-section about-margin header-margin">
      <div className="video-banner">
        <video
          className="video-bg"
          src={industryVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="video-overlay">
          <h1 className="industries-title">INDUSTRIES</h1>
        </div>
      </div>

      <div className="industries-content">
        <div className="industries-heading">
          <h2>
            <strong>Industry-Focused</strong> <span className="mobile-br"><br /> </span> Solutions.
            Tailored for <span className="mobile-br"><br /> </span><strong>Your Success.</strong>
          </h2>
        </div>
        <div className="industries-text">
          <p>
            Advait Business Solutions specializes in delivering tailored digital
            transformation solutions for key industries, including Healthcare,
            Pharma & Life Sciences, Retail, FMCG, Construction, and Chemical
            Manufacturing. Our deep domain knowledge and industry-focused approach
            ensure that each solution is customized to meet the unique operational
            challenges and regulatory requirements of your business, driving
            efficiency, compliance, and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
