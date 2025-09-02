import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RtlSlider({ data }) {
  if (!data || !data.companyListData) return null;

  const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    draggable: false,
    swipe: false,
    touchMove: false,
    arrows: false,
    pauseOnHover: false,
    variableWidth: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="swiper-container">
      <Slider {...settings}>
        {data.companyListData.map((item, i) => {
          // prepend backend URL if relative
          const imgSrc = item.image.startsWith("http")
            ? item.image
            : `${BASE_URL}${item.image}`;

          return (
            <img
              key={i} // key added
              src={imgSrc}
              alt={item.name}
              className="swiper-img"
              onError={(e) => (e.target.src = "/fallback-logo.png")}
            />
          );
        })}
      </Slider>
      {/* <Slider {...settings}>
        {data.companyListData.map((item, i) => {
          const imgSrc = item.image.startsWith("http")
            ? item.image
            : `${BASE_URL}${item.image}`;

          return (
            <div key={i} className="swiper-div">
              <img
                src={imgSrc}
                alt={item.name}
                className="swiper-img"
                onError={(e) => (e.target.src = "/fallback-logo.png")}
              />
            </div>
          );
        })}
      </Slider> */}

    </div>
  );
}
