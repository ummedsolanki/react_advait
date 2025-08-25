import industryVideo from "../assets/Insights.mp4";
import Consulting1 from "../assets/Digital Transformation.png";
import Consulting2 from "../assets/SAP Business Solution.png";
import Consulting3 from "../assets/Chemical Industry.png";
import Study1 from "../assets/insights1.jpg";
import Study2 from "../assets/insights2.jpg";
import Study3 from "../assets/insights3.jpg";
import ServiceCard from "../components/ServiceCard";

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
      <section className="industries-section header-margin">
        <div className="video-banner mobile-image-wrapper-ext-80">
          <video
            className="video-bg"
            src={industryVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="video-overlay">
            <h1 className="industries-title">INSIGHTS</h1>
          </div>
        </div>
      </section>
      <ServiceCard sectionTitle="INSIGHTS" sectionTag="Blogs & Articles" data={Consultings} />
      <ServiceCard sectionTitle="WORKS" sectionTag="Case Studies" data={Studies} />
    </>
  );
}
