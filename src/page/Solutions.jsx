import service1 from "../assets/card1.jpg";
import service2 from "../assets/card2.jpg";
import service3 from "../assets/card3.jpg";

const styles = {
  section: {
    fontFamily: "Open Sans, sans-serif",
    padding: "40px 20px",
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px 0',
    flexWrap: 'wrap',
    gap: '20px',
  },
  tag: {
    color: "#078672",
    fontSize: "25px",
    fontWeight: 600,
    marginBottom: "12px",
  },
  title: {
    color: "#000",
    fontSize: "40px",
    fontWeight: 600,
    marginBottom: "30px",
  },
  viewAll: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "220px",
    height: "60px",
    borderRadius: "30px",
    padding: "0 20px",
    background: "#078672",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  arrowBox: {
    width: "50px",
    height: "50px",
    borderRadius: "30px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowSvg: {
    width: "30px",
    height: "auto",
  },
  serviceCards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "40px",
  },
  serviceCard: {
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: "20px",
    textAlign: "left",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  serviceCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
  },
  serviceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  serviceTitle: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#000",
  },
  serviceDesc: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  serviceImg: {
    width: "100%",
    height: "200px",
    borderRadius: "15px",
    objectFit: "cover",
  },
};

const services = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: service1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: service2,
  },
  {
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
    src: service3,
  },
];

const services1 = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: service1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: service2,
  },
];

export default function SolutionsSection() {
  return (
    <section className="service-section">
      <div style={styles.sectionHeader}>
        <div>
        <p style={styles.tag}>Our Solutions</p>
        <h2 style={styles.title}>
          <strong>Tailored Solutions</strong> to Grow 
           <br /> & Expand Your Business
        </h2>
        </div>
        <div>
        <a style={styles.viewAll} href="#">
          <span>View all solutions</span>
          <div style={styles.arrowBox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
              style={styles.arrowSvg}
            >
              <path
                d="M1.00024 7C0.447959 7 0.000244141 7.44772 0.000244141 8C0.000244141 8.55228 0.447959 9 1.00024 9V8V7ZM31.7074 8.70711C32.0979 8.31658 32.0979 7.68342 31.7074 7.29289L25.3434 0.928932C24.9529 0.538408 24.3197 0.538408 23.9292 0.928932C23.5387 1.31946 23.5387 1.95262 23.9292 2.34315L29.586 8L23.9292 13.6569C23.5387 14.0474 23.5387 14.6805 23.9292 15.0711C24.3197 15.4616 24.9529 15.4616 25.3434 15.0711L31.7074 8.70711ZM1.00024 8V9L31.0002 9V8V7L1.00024 7V8Z"
                fill="black"
              />
            </svg>
          </div>
        </a>
        </div>
      </div>

      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-header">
              <h3>{service.title}</h3>
              <div className="arrow-box"></div>
            </div>
            <p>{service.description}</p>
            <div className="service-src">
              <img src={service.src} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="service-cards" style={{marginTop: "40px"}}>
        {services1.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-header">
              <h3>{service.title}</h3>
              <div className="arrow-box"></div>
            </div>
            <p>{service.description}</p>
            <div className="service-src">
              <img src={service.src} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
