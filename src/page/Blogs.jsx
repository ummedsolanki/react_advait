import { blogText, blogData } from "../data/staticData";
import ServiceCard from "../components/ServiceCard";
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

export default function BlogSection() {
  return (
    <>

      <section className="service-section home-service about-margin">
        <div className="home-section-header">
          <div className="section-header home-section-title ">
            <p className="tag">{blogText.blogTitle}</p>
            <h2>
              <strong>{blogText.blogSubTitle}</strong> {blogText.blogSubTitle2}
              <span className="mobile-br"><br /> </span> {blogText.blogSubTitle3}
            </h2>
          </div>
          <button className="apply-btn">
            <span className="btn-text">{blogText.blogViewAll}</span>
            <div className="job-box solutions-arrow">
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
      </section>
      <ServiceCard
        data={blogData}
        className="home-section"
      />
    </>
  );
}
