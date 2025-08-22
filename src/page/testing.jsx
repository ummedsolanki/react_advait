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
              <div className="job-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="16"
                  viewBox="0 0 32 16"
                >
                  <path
                    d="M1.00024 7C0.447959 7 0.000244141 7.44772 0.000244141 8C0.000244141 8.55228 0.447959 9 1.00024 9V8V7ZM31.7074 8.70711C32.0979 8.31658 32.0979 7.68342 31.7074 7.29289L25.3434 0.928932C24.9529 0.538408 24.3197 0.538408 23.9292 0.928932C23.5387 1.31946 23.5387 1.95262 23.9292 2.34315L29.586 8L23.9292 13.6569C23.5387 14.0474 23.5387 14.6805 23.9292 15.0711C24.3197 15.4616 24.9529 15.4616 25.3434 15.0711L31.7074 8.70711ZM1.00024 8V9L31.0002 9V8V7L1.00024 7V8Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
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
