import { teamStaticData } from "../data/aboutUs.data";
import { useState, useEffect } from "react";
import parse from "html-react-parser";

export default function Team() {
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
    <section className="team-section about-margin-0-margin about-margin">
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
                <p className="desc">{parse(member.description)}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <img
                    src={teamStaticData.linkedinImage}
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
