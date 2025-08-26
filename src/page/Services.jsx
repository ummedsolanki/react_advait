import service1 from "../assets/card1.jpg";
import service2 from "../assets/card2.jpg";
import service3 from "../assets/card3.jpg";
import { servicesData, servicesText } from "../data/staticData";

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

export default function ServiceSection() {
  return (
    <section className="service-section home-service">
      <div className="home-section-header">
        <div className="section-header home-title">
          <p className="tag">{servicesText.servicesTitle}</p>
          <h2>
            <strong>{servicesText.servicesSubTitle}</strong> {servicesText.servicesSubTitle2}
            <br /> {servicesText.servicesSubTitle3}
          </h2>
        </div>
      </div>
      <div className="workedwith-cards">
        {servicesData.map((item, index) => (
          <div className="workedwith-card" key={index}>
            <div className="workedwith-card-header">
              <h3>{item.title}</h3>
              <div className="arrow-box"></div>

              {/* Notch SVG instead of circle div */}
              <svg
                className="notch"
                width="80"
                height="30"
                viewBox="0 0 80 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,0 C20,0 20,30 40,30 C60,30 60,0 80,0"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p>{item.description}</p>

            <div className="workedwith-src">
              <img src={item.src} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
