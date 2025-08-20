import industryVideo from "../assets/industry.mp4";

export default function CloudSolutions() {
  return (
    <section className="cloud-solutions-section">
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
          <h1 className="cloud-title">CLOUD SOLUTIONS</h1>
        </div>
      </div>

      <div className="cloud-solutions-content">
        <div className="cloud-solutions-heading">
          <h2>
            <strong>Innovative IT Solutions</strong> Tailored
            <br />
           to Your Business Needs.
          </h2>
        </div>
        <div className="cloud-solutions-text">
          <p>
            Accelerate operational efficiency, enhance business agility, and
            drive digital transformation with our end-to-end SAP solutions. From
            strategic consulting to seamless implementation and ongoing support,
            we help you get the most value from your SAP investments.
            <br />
            Whether you're starting your SAP journey or optimizing an existing
            environment, our expert team ensures scalable, future-ready
            solutions tailored to your business goals.
          </p>
        </div>
      </div>
    </section>
  );
}
