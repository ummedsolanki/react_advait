import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/main-copy.css";
import "../styles/vars.css";

// Images
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card5 from "../images/card5.jpg";

const serviceCards = [
  {
    image: card1,
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
  },
  {
    image: card2,
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
  },
  {
    image: card3,
    title: "Rise with SAP",
    description:
      "Leverage cloud agility with SAP’s bundled offering. We help you adopt RISE with SAP with speed, flexibility, and business value.",
  },
  {
    image: card4,
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
  },
  {
    image: card5,
    title: "Custom SAP Development",
    description:
      "Enhance SAP functionality through custom reports, forms, workflows, and third-party integrations.",
  },
];

export default function ServiceSlider() {
  return (
    <div className="container py-5">
      <div className="frame-1000002218">
        <div className="group-1000002128">
          <div className="what-we-offer">WHAT WE OFFER</div>
          <div className="explore-the-services">Explore the services</div>
        </div>

        <div className="frame-1000002219">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
            //   disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            // navigation={true}
            modules={[Autoplay, Navigation]}
            className="component-49"
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {serviceCards.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="frame-1000002160">
                  <div className="rectangle-3919"></div>
                  <div className="frame-1000002098">
                    <img
                      className="modern-workspace-with-computer-1"
                      src={service.image}
                      alt={service.title}
                    />
                    <img
                      className="group-1000002031"
                      src="group-10000020310.svg"
                      alt="Decoration"
                    />
                  </div>
                  <div className="make-real-time-data-driven-decisions-with-powerful-dashboards-and-predictive-analytics">
                    {service.description}
                  </div>
                  <div className="sap-analytics-cloud">
                    <div className="sap-analytics-cloud2">{service.title}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
