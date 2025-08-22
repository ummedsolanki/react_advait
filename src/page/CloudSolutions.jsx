import industryVideo from "../assets/industry.mp4";
import Modernization1 from "../assets/card1.jpg";
import Modernization2 from "../assets/card2.jpg";
import ServiceCard from "../components/ServiceCard";

const CloudSolution = [
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

export default function CloudSolutions() {
  return (
    <>
      <section className="industries-section about-margin">
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

        <div className="industries-content service-content">
          <div className="industries-heading">
            <h2>
              <strong>Innovative IT Solutions</strong>
              <span className="mobile-br"><br /> </span>   Tailored           to Your Business Needs.
            </h2>
          </div>
          <div className="industries-text">
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
      <ServiceCard sectionTitle="Cloud Solutions" sectionTag="WE PROVIDE" data={CloudSolution} />
    </>
  );
}
