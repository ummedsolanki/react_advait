import bannerImage from "../assets/card1.jpg";
import logo from "../assets/Advait-Logo.svg";
import { heroText } from "../data/staticData";

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
  heroContent: {
    position: 'relative',
    zIndex: 1,
    color: '#FFF',
    maxWidth: '597px',
  },
  mainHeading: {
    fontSize: '60px',
    fontFamily: '"Open Sans", sans-serif',
    fontStyle: 'italic',
    fontWeight: 600,
    lineHeight: 'normal',
    margin: 0,
    marginBottom: '20px',
  },
  headingEm: {
    display: 'block',
    fontStyle: 'italic',
  },
  subHeading: {
    fontSize: '25px',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 400,
    lineHeight: 'normal',
    margin: '0 0 30px 0',
    width: '395px',
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
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    maxWidth: '200px',
  }
};

const HeroBanner = () => {
  return (
    <section style={styles.heroContainer}>
      <div style={styles.overlay}></div>
      <div style={styles.heroContent}>
        <h1 style={styles.mainHeading}>
          <span style={styles.headingEm}>{heroText.heroTitle}</span>
          <span style={styles.headingEm}>{heroText.heroSubTitle}</span>
        </h1>
        <p style={styles.subHeading}>{heroText.heroSubTitle2}</p>
        <button style={styles.contactButton}>
          {heroText.contactUs}
          <svg 
            style={styles.buttonIcon}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <img src={logo} alt="Logo" style={styles.heroLogo} />
    </section>
  );
};

export default HeroBanner;
