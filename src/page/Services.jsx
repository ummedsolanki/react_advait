import service1 from '../assets/card1.jpg';
import service2 from '../assets/card2.jpg';
import service3 from '../assets/card3.jpg';

const services = [
  {
    title: 'SAP Analytics Cloud',
    description:
      'Make real-time, data-driven decisions with powerful dashboards and predictive analytics.',
    src: service1,
  },
  {
    title: 'SAP Fiori & UX',
    description:
      'Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.',
    src: service2,
  },
  {
    title: 'SAP S/4HANA',
    description:
      'Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.',
    src: service3,
  },
];

export default function ServiceSection() {
  return (
    <section className="service-section">
      <div className="section-header">
        <p className="tag">Our Services</p>
        <h2>
          <strong>Tailored Services</strong> to Grow & Expand Your Business
        </h2>
        <a className="view-all" href="#">
          View all services <span className="arrow">↗</span>
        </a>
      </div>

      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-header">
              <h3>{service.title}</h3>
              <div className="arrow-box"></div>
            </div>
            <p>{service.description}</p>
            <div className="service-src">
              <img src={service.src} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
