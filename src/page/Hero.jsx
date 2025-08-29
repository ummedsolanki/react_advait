import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/Merge videos project.mp4";
import logo from "../assets/i3.svg";
import Slider from "react-slick";
import src1 from "../assets/i1.png";
import src2 from "../assets/i2.png";
import src3 from "../assets/i1.png";
export default function Hero() {
  const videoRef = useRef(null);
  const [showHeading, setShowHeading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return; // ✅ Prevent null errors

    const startHeadingTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setShowHeading(true);
      timerRef.current = setTimeout(() => {
        setShowHeading(false);
      }, 4000);
    };

    const handlePlay = () => startHeadingTimer();
    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
      startHeadingTimer();
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const data = [
    {
      img: src1,
      text: "Success Story 1",
      name: "Client 1",
      position: "CEO",
    },
    {
      img: src2,
      text: "Success Story 2",
      name: "Client 2",
      position: "CTO",
    },
    {
      img: src3,
      text: "Success Story 3",
      name: "Client 3",
      position: "CFO",
    },
  ];

  return (
    <section className="hero">
      <video ref={videoRef} className="hero-video" autoPlay muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* <Slider>
        {data.map((item, i) => (
          <div key={i}>
            <img src={item.img} alt={item.name} className="success-class" />
          </div>
        ))}
      </Slider> */}
      <div className="hero-overlay">
        <div className="container">
          <h1
            className={`hero-heading ${showHeading ? "show" : "hide"}`}
            style={{
              transition: "opacity 0.6s ease-in-out",
              opacity: showHeading ? 1 : 0,
            }}
          >
            Empowering Businesses with
            <br />
            SAP Solutions & Digital
            <br /> Transformation
          </h1>
        </div>
      </div>

      {/* ✅ Move logo here, direct child of hero */}
      <div className="silver-logo">
        <img src={logo} alt="Silver Partner" />
      </div>
    </section>
  );
}
