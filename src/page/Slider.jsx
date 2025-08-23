import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClientImages } from "../data/staticData";

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

  return (
    <div className="swiper-container">
      <Slider {...settings}>
        {ClientImages.map((src, i) => (
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="swiper-img"
          />
        ))}
      </Slider>
    </div>
  );
}
