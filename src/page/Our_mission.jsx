import { aboutMissions, missionStaticData } from '../data/aboutUs.data';

export default function MissionSection() {
  return (
    <section className="mission-section about-margin-0-margin">
      <div className="mission-cards">
        {aboutMissions.map((mission, index) => (
          <div className="mission-card" key={index}>
            <div className='mission-title'>{missionStaticData.title}</div>
            <div className="mission-header">
              <h3>{mission.title}</h3>
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
