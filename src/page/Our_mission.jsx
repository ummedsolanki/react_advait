
import card1 from '../assets/our1.jpg';
import card2 from '../assets/our2.jpg';
import card3 from '../assets/our3.jpg';
const missions = [
  {
    title: 'Driving Digital Transformation Globally',
    description:
      'With over 13 years of experience, our mission is to guide businesses through successful digital transformation journeys using cutting-edge technologies like SAP S/4HANA, Microsoft Dynamics, Odoo ERP, and AI/ML.',
    src: card1,
  },
  {
    title: 'SAP Business Solution',
    description:
      'From ERP implementation to custom application development, we provide end-to-end services that drive operational efficiency, adaptability, and measurable outcomes.',
    src: card2,
  },
  {
    title: 'SAP BASIS & Security',
    description:
      'Our customer-centric approach and strong technical expertise allow us to build long-term partnerships and deliver consistent business value across industries.',
    src: card3,
  },
];

export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-cards">
        {missions.map((mission, index) => (
          <div className="mission-card" key={index}>
            <div className="mission-header">
              <h3>{mission.title}</h3>
              <div className="arrow-box"></div>
            </div>
            <p>{mission.description}</p>
            <div className="mission-src">
              <img src={mission.src} alt={mission.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
