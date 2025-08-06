import React from "react";
import CountUp from "react-countup";
import woman from "../images/sofia.jpg"
// import "./Services.css"; // Optional: For styling

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        {/* 🔢 Animated Counters */}
        <div
          className="counters"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "20px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <div style={{ gridColumn: "span 3", borderRight: "1px solid #ccc" }}>
            <h2 className="counter-title">
              <CountUp end={12} duration={2} />+ Yr
            </h2>
            <p className="counter-header">Proven records</p>
          </div>
          <div style={{ gridColumn: "span 3", borderRight: "1px solid #ccc" }}>
            <h2 className="counter-title">
              <CountUp end={30} duration={2} />+
            </h2>
            <p className="counter-header">Happy Customers</p>
          </div>
          <div style={{ gridColumn: "span 3", borderRight: "1px solid #ccc" }}>
            <h2 className="counter-title">
              <CountUp end={100} duration={2} />+
            </h2>
            <p className="counter-header">Projects Completed</p>
          </div>
          <div style={{ gridColumn: "span 3" }}>
            <h2 className="counter-title">SAP</h2>
            <p className="counter-header">Certified Consultants</p>
          </div>
        </div>

        <section className="section3">
          <div className="section3_background"></div>
          <div className="section3_content">
            <div className="section3_text">
              <h1>
                Ready To Scale Your Brand?
                <br />
                Let’s Build Something <br />
                Extraordinary.
              </h1>
              <button className="section3_button">
                Get In Touch <span>→</span>
              </button>
            </div>
            <div className="section3_image">
              <img src={woman} alt="Smiling woman" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
