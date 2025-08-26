import { aboutMissions, missionStaticData } from '../data/aboutUs.data';

export default function MissionSection() {
  return (
    <section className="mission-section about-margin-0-margin">
      {/* <div className="mission-cards">
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
      </div> */}
      <div className="workedwith-cards">
        {aboutMissions.map((mission, index) => (
          <div className="workedwith-card" key={index}>

            <div className="workedwith-card-header mission-header">
              <p className='mission-title'>{missionStaticData.title}</p>
              <h3>{mission.title}</h3>
              {/* <div className="arrow-box"></div> */}

              {/* Notch SVG instead of circle div */}
              <svg
                className="notch"
                width="80"
                height="30"
                viewBox="0 0 80 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,0 C20,0 20,30 40,30 C60,30 60,0 80,0"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p>{mission.description}</p>

            <div className="workedwith-src">
              <img src={mission.src} alt={mission.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
