import img1 from "../assets/team1.jpg";
import img1Hover from "../assets/team1.jpg";
import img2 from "../assets/team2.jpg";
import img2Hover from "../assets/team1.jpg";
import img3 from "../assets/team3.jpg";
import img3Hover from "../assets/team1.jpg";

const teamMembers = [
  {
    name: "James Carter",
    role: "Senior Dev",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: img1,
    hoverImage: img1Hover,
    linkedin: "#",
  },
  {
    name: "Sarah Williams",
    role: "UI/UX Designer",
    description:
      "Designing experiences that are intuitive, efficient, and delightful. Passionate about turning ideas into reality.",
    image: img2,
    hoverImage: img2Hover,
    linkedin: "#",
  },
  {
    name: "Emma Johnson",
    role: "Marketing Head",
    description:
      "Leading marketing strategies that create brand impact and growth.",
    image: img3,
    hoverImage: img3Hover,
    linkedin: "#",
  },
];

export default function Team() {
  return (
    <section className="team-section">
      <div className="team-header">
        <p className="team-subtitle">Our Team</p>
        <h2>
          A team of <strong>experts<br/></strong> dedicated to your success.
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
                  <img src="/linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
