import Slider from "react-slick";
import { useState, useEffect } from "react";
import { timelineData } from "../data/aboutUs.data";

export default function TimelineSlider() {
  const [isWebView, setIsWebView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWebView(window.innerWidth >= 768); // e.g., >=768px considered "web"
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 10000, // duration of one full slide movement
    autoplaySpeed: 0,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    touchMove: false,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
    variableWidth: isWebView,
  };

  return (
    <div className="timeline-slider about-margin-0-margin">
      <div className="timeline-line"></div>
      <Slider {...settings}>
        {timelineData.map((item, index) => (
          <div className="timeline-slide" key={index}>
            <div className="timeline-top">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-card">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
