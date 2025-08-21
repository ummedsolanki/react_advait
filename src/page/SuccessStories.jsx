import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../assets/Jash.jpg";
import person2 from "../assets/Jay.jpg";
import person3 from "../assets/Priy.jpg";
import person4 from "../assets/Hanisha.jpg";
import person5 from "../assets/Vyom.jpg";
import person6 from "../assets/Yug.jpg";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
    swipe: false,
    touchMove: false,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const data = [
    {
      img: person1,
      text: "We're the largest dedicated UK pre-seed fund, helping founders reshape how we work, play and learn.",
      name: "Jash",
      position: "Position, Company",
    },
    {
      img: person2,
      text: "We're the largest dedicated UK pre-seed fund, helping founders reshape how we work, play and learn.",
      name: "Jay",
      position: "Position, Company",
    },
    {
      img: person3,
      text: "We're the largest dedicated UK pre-seed fund, helping founders reshape how we work, play and learn.",
      name: "Priy",
      position: "Position, Company",
    },
    {
      img: person4,
      text: "We're the largest dedicated UK pre-seed fund, helping founders reshape how we work, play and learn.",
      name: "Hanisha",
      position: "Position, Company",
    },
    {
      img: person5,
      text: "We're the largest dedicated UK pre-seed fund, helping founders reshape how we work, play and learn.",
      name: "Vyom",
      position: "Position, Company",
    },
    {
      img: person6,
      text: "We're the largest dedicated UK pre-seed fund, helping founders reshape how we work, play and learn.",
      name: "Yug",
      position: "Position, Company",
    },
  ];

  return (
    <div style={{ margin: "auto", width: "100%" }}>
      <Slider {...settings}>
        {data.map((item, i) => (
          <div key={i} style={{ padding: "15px" }}>
            <div
              style={{
                borderRadius: "12px",
                background: "#f8f9fa", // soft gray background
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: "100%",
                  height: "240px",
                  overflow: "hidden",
                  borderRadius: "12px 12px 0 0",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Text + Details */}
              <div style={{ padding: "16px", textAlign: "left" }}>
                <p
                  style={{
                    fontSize: "15px",
                    margin: "0 0 12px 0",
                    lineHeight: "1.6",
                    color: "#333",
                  }}
                >
                  {item.text}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    margin: "0 0 4px 0",
                    color: "#111",
                  }}
                >
                  {item.name}
                </p>
                <p style={{ fontSize: "13px", margin: 0, color: "#555" }}>
                  {item.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
