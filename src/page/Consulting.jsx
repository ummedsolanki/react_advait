import industryVideo from "../assets/Consuting & Engineering Services.png";
import Consulting1 from '../assets/Consuting.png';
import Consulting2 from '../assets/Data & AI.png';
import Consulting3 from '../assets/Custom Applications.png';
import Consulting4 from '../assets/Design & Engineering.png';
import Consulting5 from '../assets/Integration.png';
import ServiceCard from '../components/ServiceCard';

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
    src: Consulting4,
  },
  {
    title: 'SAP S/4HANA',
    description:
      'Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.',
    src: Consulting5,
  }
];

export default function Consulting() {
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
            <h1 className="industries-title">
              CONSULTING & ENGINEERING SERVICES
            </h1>
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

      <ServiceCard sectionTitle="Tailored Consultings" sectionTag="Our Consultings" data={Consultings} />
    </>
  );
}
