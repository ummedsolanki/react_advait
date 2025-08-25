import "./ourTeamMobile.css";
import { teamMembers, teamStaticData } from "../../data/aboutUs.data";

export default function OurTeamMobile() {
  return (
    <section className="our-team-mobile">
      <h3 className="mobile-section-title">{teamStaticData.title}</h3>
      <p className="mobile-section-subtitle">
        {teamStaticData.subtitle} <strong>{teamStaticData.subtitle2}</strong> {teamStaticData.subtitle3}
      </p>

      <div className="mobile-team-container">
        {teamMembers.map((member, index) => (
          <div className="mobile-team-card" key={index}>
            <div className="mobile-image-container">
              <img
                src={member.image}
                alt={member.name}
                className="mobile-team-img"
              />
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <img
                  src={teamStaticData.linkedinImage}
                  alt="LinkedIn"
                  className="mobile-linkedin-icon"
                />
              </a>
            </div>
            <h4 className="mobile-member-name">{member.name}</h4>
            <p className="mobile-member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
