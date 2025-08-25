import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/Merge videos project.mp4";
import logo from "../assets/i3.svg";

export default function Hero() {
  const videoRef = useRef(null);
  const [showHeading, setShowHeading] = useState(false);
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

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
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      className="hero"
      style={{
        marginTop: isMobile ? "80px" : "20px",
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      {isMobile ? (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          style={{
            width: "100%",
            height: isMobile ? "105%" : "auto",
            objectFit: isMobile ? "cover" : "contain",
            marginTop: isMobile ? "-15px" : "0px",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <video ref={videoRef} className="hero-video" autoPlay muted playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
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

          <div
            style={{
              position: "absolute",
              top: isMobile ? "auto" : "300px",
              bottom: isMobile ? "225px" : "auto",
              right: isMobile ? "-5px" : "30px",
              height: isMobile ? "80px" : "55px",
              width: isMobile ? "80px" : "auto",
              backgroundColor: isMobile ? "transparent" : "#fff",
              padding: isMobile ? "3px 8px" : "6px 12px",
              borderRadius: "16px",
            }}
          >
            <img
              src={logo}
              alt="Silver Partner"
              style={{
                display: "block",
                height: isMobile ? "80px" : "55px",
                width: isMobile ? "80px" : "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
