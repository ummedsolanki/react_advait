
import card1 from '../assets/our1.jpg';
import card2 from '../assets/our2.jpg';
import card3 from '../assets/our3.jpg';
const missions = [
  {
    title: 'Digital Transformation',
    description:
      'In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative',
    src: card1,
  },
  {
    title: 'SAP Business Solution',
    description:
      'In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative',
    src: card2,
  },
  {
    title: 'SAP BASIS & Security',
    description:
      'In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative',
    src: card3,
  },
];

export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="section-header">
        <p className="tag">Our Missions</p>
        <h2>
          <strong>Tailored Services</strong> to Grow & Expand Your Business
        </h2>
        <a className="view-all" href="#">
          View all Missions <span className="arrow">↗</span>
        </a>
      </div>

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
