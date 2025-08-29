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
      <div className="workedwith-cards about-margin">
        {aboutMissions.map((mission, index) => (
          <div className="workedwith-card" key={index}>

            <div className="workedwith-card-header mission-header">
              <p className='mission-title'>{missionStaticData.title}</p>
              <h3>{mission.title}</h3>
              {/* <div className="arrow-box"></div> */}

              {/* Notch SVG instead of circle div */}
              <svg
                className="notch"
                width="200"
                height="45"
                viewBox="0 0 300 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,0
       H120
       A40,40 0 0 1 160,40
       A40,40 0 0 0 240,40
       A40,40 0 0 1 280,0
       H400
       
       H0
       Z" fill="#f4f6f4"></path>
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
