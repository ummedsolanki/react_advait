import { teamMembers, teamStaticData } from "../data/aboutUs.data";

export default function Team() {
  return (
    <section className="team-section about-margin-0-margin">
      <div className="team-header">
        <p className="team-subtitle">{teamStaticData.subtitle}</p>
        <h2>
          <strong>
            {teamStaticData.title}
            <br />
            {teamStaticData.subtitle2}
            {teamStaticData.subtitle3} </strong>
        </h2>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="card-inner">
              <div
                className="card-front"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              <div className="card-back">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="desc">{member.description}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <img src={teamStaticData.linkedinImage} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
