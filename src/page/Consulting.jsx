import industryVideo from "../assets/industry.mp4";
import Consulting1 from '../assets/card1.jpg';
import Consulting2 from '../assets/card2.jpg';
import Consulting3 from '../assets/card3.jpg';

const Consultings = [
  {
    title: 'SAP Analytics Cloud',
    description:
      'Make real-time, data-driven decisions with powerful dashboards and predictive analytics.',
    src: Consulting1,
  },
  {
    title: 'SAP Fiori & UX',
    description:
      'Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.',
    src: Consulting2,
  },
  {
    title: 'SAP S/4HANA',
    description:
      'Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.',
    src: Consulting3,
  },
  {
    title: 'SAP Fiori & UX',
    description:
      'Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.',
    src: Consulting2,
  },
  {
    title: 'SAP S/4HANA',
    description:
      'Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.',
    src: Consulting3,
  }
];

export default function Consulting() {
  return (
    <>
    <section className="consulting-section">
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
          <h1 className="consulting-title">
            CONSULTING & ENGINEERING SERVICES
          </h1>
        </div>
      </div>

      <div className="consulting-content">
        <div className="consulting-heading">
          <h2>
            <strong>Innovative IT Solutions</strong> Tailored
            <br />
            to Your Business Needs.
          </h2>
        </div>
        <div className="consulting-text">
          <p>
            Our SAP Managed Services ensure the seamless operation, maintenance,
            and optimization of your SAP landscape. From system monitoring and
            performance tuning to user support and patch management, we provide
            end-to-end support tailored to your business needs. With proactive
            management and 24/7 support, we help you reduce downtime, lower IT
            costs, and enhance system performance.
          </p>
        </div>
      </div>
    </section>
      <section className="Consulting-section">
      <div className="section-header">
        <p className="tag">Our Consultings</p>
        <h2>
          <strong>Tailored Consultings</strong> to Grow & Expand Your Business
        </h2>
      </div>

      <div className="Consulting-cards">
        {Consultings.map((Consulting, index) => (
          <div className="Consulting-card" key={index}>
            <div className="Consulting-header">
              <h3>{Consulting.title}</h3>
              <div className="arrow-box"></div>
            </div>
            <p>{Consulting.description}</p>
            <div className="Consulting-src">
              <img src={Consulting.src} alt={Consulting.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
