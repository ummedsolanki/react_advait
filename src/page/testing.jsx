import { useState, useEffect, useRef } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { getHeroData } from "../api/HeroApi";
import HeroComponent from "../components/HeroComponent";

// Form component that uses the reCAPTCHA token
function JoinUsForm({ onClose }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    message: "",
    recaptchaToken: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      alert("Recaptcha not ready");
      return;
    }

    const token = await executeRecaptcha("submit_application");

    if (!token) {
      alert("Failed to verify reCAPTCHA.");
      return;
    }

    setFormData((prev) => ({ ...prev, recaptchaToken: token }));

    console.log("Form submitted with token:", {
      ...formData,
      recaptchaToken: token,
    });

    // Send this to your backend for verification
    // Example:
    // await fetch('/api/submit-application', { method: 'POST', body: JSON.stringify({ ...formData, recaptchaToken: token }) })

    onClose();
  };

  return (
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
          <div className="file-upload">
            <input type="file" id="resume" name="resume" />
          </div>

          <div className="popup-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function JoinUs() {
  const [showPopup, setShowPopup] = useState(false);
  const [images, setImages] = useState([]);
  const [heroData, setHeroData] = useState(null);
  const fetched = useRef(false);

  useEffect(() => {
    const sizeClasses = [
      "big",
      "medium",
      "small",
      "small",
      "small",
      "mediums",
      "mediums",
      "small",
    ];
    fetch(
      `${import.meta.env.VITE_BACKEND_API_URL}/api/culture-highlights/list?page=1&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.highlights && data.highlights.length > 0) {
          const allImagesWithSize = data.highlights.flatMap((highlight) =>
            highlight.images.map((img, index) => ({
              src: img.url,
              id: sizeClasses[index % sizeClasses.length],
            }))
          );
          setImages(allImagesWithSize);
        }
      })
      .catch((err) => console.error("Error fetching culture highlights:", err));
  }, []);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;
    getHeroData("Join Us").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home);
      }
    });
  }, []);

  if (!heroData) return <p>Loading...</p>;

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
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <section className="about-section header-margin">
        <div>
          <HeroComponent heroData={heroData} />
        </div>
      </section>

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

      <h2 className="culture-title">Culture Highlights</h2>
      <div className="gallery-container">
        {images.map((img, i) => (
          <div key={i} className={`gallery-item ${img.id}`}>
            <img src={img.src} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>

      {showPopup && <JoinUsForm onClose={() => setShowPopup(false)} />}
    </GoogleReCaptchaProvider>
  );
}
