import "./ourTeamMobile.css";
import { teamStaticData } from "../../data/aboutUs.data";
import { useState, useEffect } from "react";

export default function OurTeamMobile() {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/our-teams/list?page=1&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        if (data.teams) {
          // Map API fields to your UI fields
          const mappedMembers = data.teams.map((member) => ({
            name: member.name,
            role: member.designation,
            description: member.content,
            linkedin: member.linkedin,
            image: member.imageUrl, // background image
          }));
          setTeamMembers(mappedMembers);
        }
      })
      .catch((err) => console.error(err));
  }, []);
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
