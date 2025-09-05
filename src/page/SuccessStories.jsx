import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider() {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/success-stories/list?page=1&limit=20`)
      .then((res) => res.json())
      .then((result) => {
        if (result.successStories) {
          const formatted = result.successStories.map((story) => ({
            img: story.imageUrl,
            text: story.content, // already HTML <p>...</p>
            name: story.name,
            position: story.designation,
          }));
          setData(formatted);
        }
      })
      .catch((err) => console.error("Error fetching success stories:", err));
  }, []);

  return (
    <>
      <div className="success about-margin"><h2>Success Stories</h2></div>
      <div style={{ width: "100%" }} className="success-section">
        <Slider {...settings}>
          {data.map((item, i) => (
            <div key={i} style={{ padding: "15px" }}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "16px",
                  textAlign: "left",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="success-class"
                  />
                </div>

                {/* since API sends <p> tags, we parse safely */}
                <div style={{ fontSize: "14px", marginBottom: "8px" }} dangerouslySetInnerHTML={{ __html: item.text }} />
                <p style={{ fontWeight: "bold", margin: 0 }}>{item.name}</p>
                <p style={{ fontSize: "12px", margin: 0, color: "#555" }}>
                  {item.position}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}