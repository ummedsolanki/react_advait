import { useState } from "react";
import why1 from "../assets/Innovation.svg";
import why2 from "../assets/Industries.svg";
import why3 from "../assets/Scalability.svg";
import why4 from "../assets/Cost.svg";

import InnovationBlack from "../assets/Innovationblack.svg";
import IndustriesBlack from "../assets/Industriesblack.svg";
import ScalabilityBlack from "../assets/Scalabilityblack.svg";
import CostBlack from "../assets/Costblack.svg";

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

export default function Why({ data }) {
  if (!data) return <p>Loading...</p>;

  const imgMap = [why1, why2, why3, why4];
  const hoverImgMap = [InnovationBlack, IndustriesBlack, ScalabilityBlack, CostBlack];

  return (
    <>
      {/* Header Section */}
      <section>
        <div
          className="banner-container"
          style={{
            background: "white",
            clipPath: "polygon(0px 0px, 50% 0px, 70% 360%, 100% 100%, 0% 100%)",
            // paddingTop: "10px",
            overflow: "hidden",
          }}
        >
          <div className="banner-left">
            <p className="banner-subtitle">{data.banner}</p>

          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section5">
        <div className="section5_left">
          <h1 className="banner-title">
            {data.heading} <br />
            <span className="banner-title-thin">{data.subHeading}</span>
          </h1>
          <div className="sec5_cards">
            <div className="section5_grid">
              {data.whyCardData.map((card, index) => (
                <FeatureCard
                  key={card._id || index}
                  img={imgMap[index]}
                  title={card.title}
                  desc={card.desc}
                  imgComponent={card.img}
                  hoverImg={hoverImgMap[index]}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="section5_right">
          <div>
            {/* <img src={whySection.image} alt="Line6" /> */}
            <img src={`${import.meta.env.VITE_BACKEND_API_URL}${data.image}`} alt="Why Advait" />

          </div>
        </div>
      </section>
    </>
  );
}
