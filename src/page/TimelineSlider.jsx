import Slider from "react-slick";

const timelineData = [
  {
    year: "2014 - 2015",
    text: "Revenue Grew by 160% & Team Grew by 25% since inception and there was a considerable amount of revenue growth & team during 2014-2015."
  },
  {
    year: "2016",
    text: "Delivery Centre Setup in Ahmedabad, Gujarat. India Inaugurated a new office in Ahmedabad for setting up a delivery center for Gujarat."
  },
  {
    year: "2017",
    text: "Attained CMMi Level 3 certification for non-SAP practices, Recognition by DIPP for an upcoming startup from the government."
  }
];

export default function TimelineSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 7000,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: false,
    swipe: false, 
    touchMove: false, 
    arrows: false,
    pauseOnHover: false
  };

  return (
    <div className="timeline-slider">
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
