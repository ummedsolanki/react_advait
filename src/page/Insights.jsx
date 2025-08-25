import industryVideo from "../assets/Insights.mp4";
import Consulting1 from "../assets/Digital Transformation.png";
import Consulting2 from "../assets/SAP Business Solution.png";
import Consulting3 from "../assets/Chemical Industry.png";
import Study1 from "../assets/insights1.jpg";
import Study2 from "../assets/insights2.jpg";
import Study3 from "../assets/insights3.jpg";

const Consultings = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: Consulting1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: Consulting2,
  },
  {
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
    src: Consulting3,
  },
];
const Studies = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: Study1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: Study2,
  },
  {
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
    src: Study3,
  },
];

export default function Insights() {
  return (
    <>
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
            <h1 className="industries-title">CLOUD SOLUTIONS</h1>
          </div>
        </div>
      </section>
      <section className="Consulting-section about-margin">
        <div className="section-header">
          <p className="tag">INSIGHTS</p>
          <h2>
            <strong>Blogs & Articles</strong>
          </h2>
        </div>

        <div className="workedwith-cards">
          {Consultings.map((Consulting, index) => (
            <div className="workedwith-card" key={index}>
              <div className="workedwith-card-header">
                <h3>{Consulting.title}</h3>
                <div className="arrow-box"></div>
              </div>
              <p>{Consulting.description}</p>
              <div className="workedwith-src">
                <img src={Consulting.src} alt={Consulting.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="Consulting-section about-margin">
        <div className="section-header">
          <p className="tag">WORKS</p>
          <h2>
            <strong>Case Studies</strong>
          </h2>
        </div>

        <div className="workedwith-cards">
          {Studies.map((Study, index) => (
            <div className="workedwith-card" key={index}>
              <div className="workedwith-card-header">
                <h3>{Study.title}</h3>
                <div className="arrow-box"></div>
              </div>
              <p>{Study.description}</p>
              <div className="workedwith-src">
                <img src={Study.src} alt={Study.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
