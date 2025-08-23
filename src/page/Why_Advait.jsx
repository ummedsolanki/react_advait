import { useState } from "react";
import team from "../assets/Why-Advait.png";
import { whyCardData, whyText } from "../data/staticData";

// Card Component

function FeatureCard({ img, hoverImg, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="sec5_1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="sec5_image">
        <img src={hovered ? hoverImg : img} alt={title} />
      </div>
      <div>
        <div className="sec5_text">
          <p>{title}</p>
        </div>
        <div className="sec5_text_p">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Why() {
  return (
    <>
      {/* Header Section */}
      <section>
        <div
          className="banner-container"
          style={{
            height: "50px",
            background: "white",
            clipPath: "polygon(0px 0px, 50% 0px, 75% 360%, 100% 100%, 0% 100%)",
            paddingTop: "10px",
            overflow: "hidden",
            top: "-30px",
          }}
        >
          <div className="banner-left">
            <p className="banner-subtitle">{whyText.whyAdvait}</p>
            <h1 className="banner-title">
              {whyText.whyAdvaitSub} <br />
              <span className="banner-title-thin">{whyText.whyAdvaitSub2}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section5">
        <div className="section5_left">
          <div className="sec5_cards">
            <div className="section5_grid">
              {whyCardData.map((card, index) => (
                <FeatureCard
                  key={index}
                  img={card.img}
                  title={card.title}
                  desc={card.desc}
                  imgComponent={card.img}
                  hoverImg={card.hoverImg}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="section5_right">
          <div>
            <img src={team} alt="Line6" />
          </div>
        </div>
      </section>
    </>
  );
}
