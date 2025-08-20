import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/i1.png";
import img2 from "../assets/i2.png";
import img3 from "../assets/i3.svg";
import img4 from "../assets/i4.png";
import img5 from "../assets/i5.png";
import img6 from "../assets/gold.svg";
import img7 from "../assets/i7.png";

export default function RtlSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div style={{ margin: "auto", width: "100%" }}>
      <Slider {...settings}>
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              style={{
                height: "120px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
