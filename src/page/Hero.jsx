import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/i3.svg";
import parse from "html-react-parser";
import ShinyText from "../components/Shinytext";

export default function Hero({ data }) {
  const videoRef = useRef(null);
  const [currentHero, setCurrentHero] = useState({ heroVideo: "", text: "" });
  const [showHeading, setShowHeading] = useState(false);
  const timerRef = useRef(null);

  // Set first active hero from props
  useEffect(() => {
    if (data?.length) {
      const activeSections = data.filter((s) => s.isActive);
      if (activeSections.length > 0) {
        setCurrentHero(activeSections[0]);
      }
    }
  }, [data]);

  // Video event handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentHero.heroVideo?.endsWith(".mp4")) return;

    const startHeadingTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setShowHeading(true);
      timerRef.current = setTimeout(() => setShowHeading(false), 4000);
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
  }, [currentHero]);

  const isVideo = currentHero.heroVideo?.endsWith(".mp4");
  const mediaSrc = currentHero.heroVideo
    ? `${import.meta.env.VITE_BACKEND_API_URL}${currentHero.heroVideo}`
    : "";

  return (
    <section className="hero">
      {isVideo ? (
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          poster="fallback.jpg"
          onError={() => setShowHeading(true)}
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      ) : currentHero.heroVideo ? (
        <img src={mediaSrc} alt="Hero" className="hero-video" />
      ) : null}
      {/* 
      <div className="hero-overlay">
        <div className="container">
          <h1
            className={`hero-heading ${showHeading ? "show" : "hide"}`}
            style={{
              transition: "opacity 0.6s ease-in-out",
              opacity: showHeading ? 1 : 0,
            }}
          >
            {parse(currentHero.text)}
          </h1>
        </div>
      </div> */}

      <div className="silver-logo">
        <img src={logo} alt="Silver Partner" />
      </div>

      <ShinyText
        shineWidth={40} // give shine some visible width
        speed={2} // how fast the shine moves
        intensity={1} // opacity of shine
        baseColor="#999" // fallback base color
        shineColor="#fff" // bright shine color
        direction="left-to-right"
      >
        One Platform Infinite Possibilities{" "}
      </ShinyText>
    </section>
  );
}

// import React, { useEffect, useRef, useState } from "react";
// import logo from "../assets/i3.svg";
// import { getHomeData } from "../api/HomeApi"; // import your API helper

// export default function Hero() {
//   const videoRef = useRef(null);
//   const [currentHero, setCurrentHero] = useState({ heroVideo: "", text: "" });
//   const [showHeading, setShowHeading] = useState(false);
//   const timerRef = useRef(null);

//   // Fetch hero data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       const homeData = await getHomeData();
//       if (homeData?.heroSections) {
//         const activeSections = homeData.heroSections.filter((s) => s.isActive);
//         if (activeSections.length > 0) {
//           setCurrentHero(activeSections[0]); // first active hero section
//         }
//       }
//     };
//     fetchData();
//   }, []);

//   // Video event handling
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video || !currentHero.heroVideo.endsWith(".mp4")) return;

//     const startHeadingTimer = () => {
//       if (timerRef.current) clearTimeout(timerRef.current);
//       setShowHeading(true);
//       timerRef.current = setTimeout(() => setShowHeading(false), 4000);
//     };

//     const handlePlay = () => startHeadingTimer();
//     const handleEnded = () => {
//       video.currentTime = 0;
//       video.play();
//       startHeadingTimer();
//     };

//     video.addEventListener("play", handlePlay);
//     video.addEventListener("ended", handleEnded);

//     return () => {
//       video.removeEventListener("play", handlePlay);
//       video.removeEventListener("ended", handleEnded);
//       if (timerRef.current) clearTimeout(timerRef.current);
//     };
//   }, [currentHero]);

//   const isVideo = currentHero.heroVideo.endsWith(".mp4");
//   const mediaSrc = `${import.meta.env.VITE_BACKEND_API_URL}${currentHero.heroVideo}`;

//   return (
//     <section className="hero">
//       {isVideo && currentHero.heroVideo ? (
//         // <video ref={videoRef} className="hero-video" autoPlay muted playsInline>
//         //   <source src={mediaSrc} type="video/mp4" />
//         // </video>

//         // <video
//         //   ref={videoRef}
//         //   className="hero-video"
//         //   autoPlay
//         //   muted
//         //   playsInline
//         //   onError={() => setShowHeading(true)} // show text if video fails
//         // >
//         //   <source src={mediaSrc} type="video/mp4" />
//         // </video>

//         <video
//           ref={videoRef}
//           className="hero-video"
//           autoPlay
//           muted
//           playsInline
//           poster="fallback.jpg" // optional
//           onError={() => setShowHeading(true)}
//         >
//           <source src={mediaSrc} type="video/mp4" />
//         </video>

//       ) : (
//         <img src={mediaSrc} alt="Hero" className="hero-video" />
//       )}

//       <div className="hero-overlay">
//         <div className="container">
//           <h1
//             className={`hero-heading ${showHeading ? "show" : "hide"}`}
//             style={{
//               transition: "opacity 0.6s ease-in-out",
//               opacity: showHeading ? 1 : 0,
//             }}
//           >
//             {currentHero.text}
//           </h1>
//         </div>
//       </div>
//       {/* <div className="hero-overlay">
//         <div className="container">
//           <h1
//             className="hero-heading"
//             style={{
//               transition: "opacity 0.6s ease-in-out",
//               opacity: showHeading || !currentHero.heroVideo ? 1 : 0,
//             }}
//           >
//             {currentHero.text}
//           </h1>
//         </div>
//       </div> */}

//       <div className="silver-logo">
//         <img src={logo} alt="Silver Partner" />
//       </div>
//     </section>
//   );
// }
