import service1 from "../assets/card1.jpg";
import service2 from "../assets/card2.jpg";
import service3 from "../assets/card3.jpg";
import { servicesData, servicesText } from "../data/staticData";
import parse from "html-react-parser";
import { getHomeData } from "../api/HomeApi";
import { useState, useEffect } from "react";

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

export default function ServiceSection({ data }) {

  if (!data) return null;

  const servicesWithFullSrc = data?.servicesCardsData?.map((item) => ({
    ...item,
    src: item.image ? `${import.meta.env.VITE_BACKEND_API_URL}${item.image}` : "",
  })) || [];

  return (
    <section className="service-section home-service about-margin">
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
        {servicesWithFullSrc.map((item, index) => (
          <div className="workedwith-card" key={index}>
            <div className="workedwith-card-header">
              <h3>{item.title}</h3>
              <div className="card-box ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="12"
                  viewBox="0 0 32 16"
                  fill="black"
                >
                  <path d="M1.00024 7C0.447959 7 0.000244141 7.44772 0.000244141 8C0.000244141 8.55228 0.447959 9 1.00024 9V8V7ZM31.7074 8.70711C32.0979 8.31658 32.0979 7.68342 31.7074 7.29289L25.3434 0.928932C24.9529 0.538408 24.3197 0.538408 23.9292 0.928932C23.5387 1.31946 23.5387 1.95262 23.9292 2.34315L29.586 8L23.9292 13.6569C23.5387 14.0474 23.5387 14.6805 23.9292 15.0711C24.3197 15.4616 24.9529 15.4616 25.3434 15.0711L31.7074 8.70711ZM1.00024 8V9L31.0002 9V8V7L1.00024 7V8Z" />
                </svg>
              </div>
              {/* Notch SVG instead of circle div */}
              <svg
                className="notch"
                width="200"
                height="45"
                viewBox="0 0 300 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,0
       H120
       A40,40 0 0 1 160,40
       A40,40 0 0 0 240,40
       A40,40 0 0 1 280,0
       H400
       
       H0
       Z" fill="#f4f6f4"></path>
              </svg>

            </div>

            <div> {parse(item.description)} </div>

            <div className="workedwith-src">
              <img src={item.src} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section >
  );
}
