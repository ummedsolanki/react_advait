import { useState, useEffect, useRef } from "react";
import img1 from "../assets/ind1.jpg";
import img2 from "../assets/ind2.jpg";
import img3 from "../assets/ind3.jpg";
import img4 from "../assets/ind4.jpg";
import img5 from "../assets/ind5.jpg";
import img6 from "../assets/ind6.jpg";
import img7 from "../assets/ind7.jpg";
import img8 from "../assets/ind4.jpg";
import { getHeroData } from "../api/HeroApi";
import HeroComponent from "../components/HeroComponent";

export default function JoinUs() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(false);
  };

  const [heroData, setHeroData] = useState(null);
  const fetched = useRef(false); // track if API already called

  useEffect(() => {
    if (fetched.current) return; // prevent second call
    fetched.current = true;
    getHeroData("Join Us").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home);
      }
    });
  }, []);

  if (!heroData) return <p>Loading...</p>;
  return (
    <>
      <section className="about-section header-margin">
        <div>
          <HeroComponent heroData={heroData} />
        </div>
      </section>

      {/* Open Roles */}
      <div className="section-header job-section about-margin">
        <h2 className="job-header">Our Open Roles</h2>
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
            <button className="apply-btn" onClick={() => setShowPopup(true)}>
              <span className="btn-text">Submit Application</span>
              <div className="job-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="32"
                  height="16"
                  viewBox="0 0 32 16"
                  fill="currentColor"
                  className="job-button"
                >
                  <path d="M1.00024 7C0.447959 7 0.000244141 7.44772 0.000244141 8C0.000244141 8.55228 0.447959 9 1.00024 9V8V7ZM31.7074 8.70711C32.0979 8.31658 32.0979 7.68342 31.7074 7.29289L25.3434 0.928932C24.9529 0.538408 24.3197 0.538408 23.9292 0.928932C23.5387 1.31946 23.5387 1.95262 23.9292 2.34315L29.586 8L23.9292 13.6569C23.5387 14.0474 23.5387 14.6805 23.9292 15.0711C24.3197 15.4616 24.9529 15.4616 25.3434 15.0711L31.7074 8.70711ZM1.00024 8V9L31.0002 9V8V7L1.00024 7V8Z" />
                </svg>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Culture */}
      <h2 className="culture-title">Culture highlights</h2>
      <div className="gallery-container">
        {images.map((img, i) => (
          <div key={i} className={`gallery-item ${img.id}`}>
            <img src={img.src} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Submit Application</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First-Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last-Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone-Number"
                value={formData.number}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              {/* File Upload */}
              <div className="file-upload">
                <input type="file" id="resume" name="resume" />
              </div>

              {/* Fake reCAPTCHA UI */}
              <div className="fake-recaptcha">
                <div className="recaptcha-check">
                  <input type="checkbox" id="notRobot" required />
                  <label htmlFor="notRobot">I'm not a robot</label>
                </div>
                <div className="recaptcha-logo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 116.79"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M101.42 40.78c0-.59-.02-1.17-.04-1.75V5.88l-9.16 9.17C84.72 5.86 73.31 0 60.53 0c-13.3 0-25.12 6.35-32.59 16.18l15.02 15.18a19.95 19.95 0 0 1 6.08-6.83c2.62-2.05 6.34-3.72 11.48-3.72.62 0 1.1.07 1.45.21 6.37.5 11.89 4.02 15.14 9.12L66.48 40.77c13.47-.05 28.69-.08 34.94.01"
                      fill="#1c3aa9"
                    />
                    <path
                      d="M60.29 0c-.59 0-1.17.02-1.75.04H25.38l9.17 9.16C25.37 16.71 19.5 28.12 19.5 40.9c0 13.3 6.35 25.12 16.18 32.59l15.18-15.02a19.95 19.95 0 0 1-6.83-6.08c-2.05-2.62-3.72-6.34-3.72-11.48 0-.62.07-1.1.21-1.45.5-6.37 4.02-11.89 9.12-15.14l10.63 10.63c-.04-13.48-.08-28.69.02-34.95"
                      fill="#4285f4"
                    />
                    <path
                      d="M19.51 40.9c0 .59.02 1.17.04 1.75V75.8l9.16-9.16c7.5 9.18 18.91 15.04 31.69 15.04 13.3 0 25.12-6.35 32.59-16.18L77.97 50.32a19.95 19.95 0 0 1-6.08 6.83c-2.62 2.05-6.34 3.72-11.48 3.72-.62 0-1.1-.07-1.45-.21-6.37-.5-11.89-4.02-15.14-9.12l10.63-10.63c-13.47.05-28.69.08-34.94-.01"
                      fill="#ababab"
                    />
                  </svg>
                  <p>
                    reCAPTCHA <span>Privacy</span> - <span>Terms</span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="popup-buttons">
                <button type="button" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
