import img1 from "../assets/ind1.jpg";
import img2 from "../assets/ind2.jpg";
import img3 from "../assets/ind3.jpg";
import img4 from "../assets/ind4.jpg";
import img5 from "../assets/ind5.jpg";
import img6 from "../assets/ind6.jpg";
import img7 from "../assets/ind7.jpg";
import img8 from "../assets/ind4.jpg";
import aboutImage from "../assets/About-us.jpg";

const JoinUs = () => {
  const images = [
    { src: img1, id: "big" },
    { src: img2, id: "medium" },
    { src: img3, id: "small" },
    { src: img4, id: "small" },
    { src: img5, id: "small" },
    { src: img7, id: "mediums" },
    { src: img6, id: "mediums" },
    { src: img8, id: "small" },
  ];
  const roles = [
    {
      title: "Senior Software Developer",
      location: "Ahmedabad, India",
      type: "Full Time",
    },
    {
      title: "Senior Software Developer",
      location: "Ahmedabad, India",
      type: "Full Time",
    },
    {
      title: "Senior Software Developer",
      location: "Ahmedabad, India",
      type: "Full Time",
    },
  ];

  return (
    <>
      <section className="about-section about-margin">
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="About Us" className="about-image" />
          <div className="about-overlay">
            <h1>JOIN US</h1>
          </div>
        </div>
      </section>
      <div className="section-header about-margin job-section">
        <h2 className="job-header">
          Our Open Roles
        </h2>
      </div>
      <div className="job-section about-margin">
        {roles.map((role, index) => (
          <div key={index} className="job-card">
            <div>
              <p className="job-label">OPEN ROLE</p>
              <h3 className="job-position">{role.title}</h3>
              <p className="job-info">
                <span>{role.type}</span>
                <span className="for-phone">•</span>
                <span>{role.location}</span>
              </p>
            </div>
            <button className="apply-btn">
              <span className="btn-text">Submit Application</span>
              <div className="job-box"></div>
            </button>
          </div>
        ))}
      </div>
      <h2 className="culture-title about-margin">Culture highlights</h2>
      <div className="gallery-container about-margin">
        {images.map((img, i) => (
          <div key={i} className={`gallery-item ${img.id}`}>
            <img src={img.src} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default JoinUs;
