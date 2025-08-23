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

    const handlePlay = () => {
      startHeadingTimer();
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play(); // restart video
      startHeadingTimer(); // restart heading timer too
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
    <section className="hero" style={{ marginTop: "20px" }}>
      {/* 🔁 Background Video */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        playsInline
       
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔁 Overlay Content */}
      <div className="hero-overlay">
        <div className="container">
          {/* ⏱️ Heading shows for 4 sec every time video starts */}
          {showHeading && (
            <h1>
              Empowering Businesses with
              <br />
              SAP Solutions & Digital
              <br /> Transformation
            </h1>
          )}

          {/* ✅ Silver Partner Logo */}
          <div
            style={{
              position: "absolute",
              top: "300px",
              right: "30px",
              height: "55px",
              width: "auto",
              backgroundColor: "#fff",
              padding: "6px 12px",
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            }}
          >
            <img
              src={logo}
              alt="Silver Partner"
              style={{
                display: "block",
                // width: "20%",
                height: "55px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
