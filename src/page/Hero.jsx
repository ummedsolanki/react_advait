import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../assets/Final Video.mp4";
import logo from "../assets/i3.svg";

export default function Hero() {
  const videoRef = useRef(null);
  const [showHeading, setShowHeading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => {
      setShowHeading(true);
      const timer = setTimeout(() => {
        setShowHeading(false);
      }, 4000);
      return () => clearTimeout(timer);
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play(); // retriggers play -> will trigger handlePlay again
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="hero">
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
              <br/>SAP Solutions & Digital<br/>  Transformation
            </h1>
          )}

          {/* ✅ Silver Partner Logo */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              right: "40px",
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "20px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              display: "inline-block",
              
            }}
          >
            <img
              src={logo}
              alt="Silver Partner"
              style={{
                display: "block",
                // width: "20%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
