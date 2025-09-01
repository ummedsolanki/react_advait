import bannerImage from "../assets/Take Your Business .jpg";
import logo from "../assets/Advait White Logo.svg";
import { heroText } from "../data/staticData";
import { useNavigate } from "react-router-dom";

const styles = {
  heroContainer: {
    position: 'relative',
    width: '90%',
    height: '500px',
    flexShrink: 0,
    aspectRatio: '464/161',
    borderRadius: '20px',
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    padding: '0 5%',
  },
  overlay: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
  },
  headingEm: {
    display: 'block',
    fontStyle: 'italic',
  },
  contactButton: {
    width: '177px',
    height: '60px',
    flexShrink: 0,
    borderRadius: '30px',
    border: '1px solid #000',
    background: '#FFF',
    backdropFilter: 'blur(3px)',
    color: '#000',
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    cursor: 'pointer',
    padding: '0 20px',
  },
  buttonIcon: {
    width: '24px',
    height: '24px',
  },
  heroLogo: {
    position: 'absolute',
    right: '5%',
    top: '80%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    maxWidth: '200px',
  }
};
const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <>
      <section style={styles.heroContainer}>
        <div style={styles.overlay}></div>
        <div className="heroContent">
          <h1 className="mainHeading">
            <span style={styles.headingEm}>{heroText.heroTitle}</span>
            <span style={styles.headingEm}>{heroText.heroSubTitle}</span>
          </h1>
          <p className="subHeading">{heroText.heroSubTitle2}</p>
          <button className="apply-btn" onClick={() => navigate("/contact")}
          >
            <span className="btn-text">{heroText.contactUs}</span>
            <div className="job-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="16"
                viewBox="0 0 32 16"
                fill="currentColor"
              >
                <path d="M1.00024 7C0.447959 7 0.000244141 7.44772 0.000244141 8C0.000244141 8.55228 0.447959 9 1.00024 9V8V7ZM31.7074 8.70711C32.0979 8.31658 32.0979 7.68342 31.7074 7.29289L25.3434 0.928932C24.9529 0.538408 24.3197 0.538408 23.9292 0.928932C23.5387 1.31946 23.5387 1.95262 23.9292 2.34315L29.586 8L23.9292 13.6569C23.5387 14.0474 23.5387 14.6805 23.9292 15.0711C24.3197 15.4616 24.9529 15.4616 25.3434 15.0711L31.7074 8.70711ZM1.00024 8V9L31.0002 9V8V7L1.00024 7V8Z" />
              </svg>
            </div>
          </button>
        </div>
        <img src={logo} alt="Logo" style={styles.heroLogo} />
      </section>
    </>
  );
};

export default HeroBanner;
