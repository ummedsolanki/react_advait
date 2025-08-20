import industryVideo from "../assets/industry.mp4";
import Modernization1 from "../assets/card1.jpg";
import Modernization2 from "../assets/card2.jpg";

const Modernizations = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: Modernization1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: Modernization2,
  }
];

export default function Modernization() {
  return (
    <>
      <section className="modernization-section">
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
            <h1 className="modernization-title">SOLUTIONS</h1>
          </div>
        </div>

        <div className="modernization-content">
          <div className="modernization-heading">
            <h2>
              <strong>Innovative IT Solutions</strong> Tailored
              <br />
              to Your Business Needs.
            </h2>
          </div>
          <div className="modernization-text">
            <p>
              Our SAP Managed Services ensure the seamless operation,
              maintenance, and optimization of your SAP landscape. From system
              monitoring and performance tuning to user support and patch
              management, we provide end-to-end support tailored to your
              business needs. With proactive management and 24/7 support, we
              help you reduce downtime, lower IT costs, and enhance system
              performance.
            </p>
          </div>
        </div>
      </section>
      <section className="modernization-section">
        <div className="section-header">
          <p className="tag">WE PROVIDE</p>
          <h2>
            <strong> Modernizations</strong>
          </h2>
        </div>

        <div className="modernization-cards">
          {Modernizations.map((Modernization, index) => (
            <div className="modernization-card" key={index}>
              <div className="modernization-header">
                <h3>{Modernization.title}</h3>
                <div className="arrow-box"></div>
              </div>
              <p>{Modernization.description}</p>
              <div className="modernization-src">
                <img src={Modernization.src} alt={Modernization.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
