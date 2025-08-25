import industryVideo from "../assets/Modernization.png";
import Modernization1 from "../assets/Application Migration Services.png";
import Modernization2 from "../assets/Cloud Transformation Services.png";
import Modernization3 from "../assets/Data Analytics.png";
import Modernization4 from "../assets/Application Managed Services.png";
import Modernization5 from "../assets/Sofware Development.png";
import ServiceCard from "../components/ServiceCard";

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
  },
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: Modernization3,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: Modernization4,
  },
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: Modernization5,
  }]

export default function Modernization() {
  return (
    <>
      <section className="industries-section about-margin">
        <div className="video-banner">
          <img
            className="video-bg"
            src={industryVideo}
            alt="Industry Video"
          />
           
          <div className="video-overlay">
            <h1 className="industries-title">MODERNIZATION</h1>
          </div>
        </div>

        <div className="industries-content service-content">
          <div className="industries-heading">
            <h2>
              <strong>Innovative IT Solutions</strong>
              <span className="mobile-br"><br /> </span>   Tailored           to Your Business Needs.
            </h2>
          </div>
          <div className="industries-text">
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

      <ServiceCard sectionTitle="Modernization" sectionTag="WE PROVIDE" data={Modernizations} />
    </>
  );
}
