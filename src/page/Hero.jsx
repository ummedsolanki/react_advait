import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/Merge videos project.mp4";
import logo from "../assets/i3.svg";

export default function Hero() {
  const videoRef = useRef(null);
  const [showHeading, setShowHeading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

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

  return (
    <section className="hero">
      <video ref={videoRef} className="hero-video" autoPlay muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

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
