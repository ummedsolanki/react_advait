import React, { useState, useEffect } from "react";

const AdvaitPremiumLoader = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timeline = [
      setTimeout(() => setPhase(1), 500), // Particles appear
      setTimeout(() => setPhase(2), 1600), // Particles converge
      setTimeout(() => setPhase(3), 2800), // Energy burst
      setTimeout(() => setPhase(4), 3800), // Logo forms
      setTimeout(() => setPhase(5), 5200), // Text reveals
    ];
    return () => timeline.forEach(clearTimeout);
  }, []);

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    // background: "radial-gradient(circle at center, #0f172a 0%, #000 100%)",
    position: "relative",
    overflow: "hidden",
  };

  const mainAnimationStyles = {
    position: "relative",
    width: "400px",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // Floating particles that converge
  const particleStyles = (index) => {
    const colors = ["#bacccfff", "#bacccfff", "#bacccfff", "#bacccfff", "#bacccfff"];
    const angles = [0, 72, 144, 216, 288];
    const radius = phase === 1 ? 160 : phase >= 2 ? 0 : 220;
    return {
      position: "absolute",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: colors[index],
      opacity: phase >= 1 ? 1 : 0,
      transform: `rotate(${angles[index]}deg) translateX(${radius}px) rotate(-${angles[index]}deg)`,
      transition:
        phase >= 2
          ? "all 1.3s cubic-bezier(0.4, 0, 0.2, 1)"
          : "all 0.8s ease-out",
      boxShadow: `0 0 25px ${colors[index]}80, 0 0 50px ${colors[index]}40`,
      animation: phase === 1 ? `float${index} 3s ease-in-out infinite` : "none",
    };
  };
  const energyCoreStyles = {
    position: "absolute",
    width: phase >= 3 ? "80px" : "0px",
    height: phase >= 3 ? "80px" : "0px",
    borderRadius: "50%",
    background:
      phase >= 3
        ? "radial-gradient(circle, #22d3ee 0%, #06b6d4 40%, transparent 100%)"
        : "transparent",
    opacity: phase >= 3 ? (phase >= 4 ? 0 : 1) : 0,
    transition: "all 0.7s ease-out",
    boxShadow: phase >= 3 ? "0 0 150px #22d3ee, 0 0 300px #22d3ee40" : "none",
    animation: phase === 3 ? "pulse 0.8s ease-in-out" : "none",
  };

  const logoContainerStyles = {
   opacity: phase >= 4 ? 1 : 0,
    transform:
      phase >= 4 ? "scale(1) rotateY(0deg)" : "scale(0.3) rotateY(180deg)",
    transition: "all 1.4s cubic-bezier(0.68,-0.55,0.27,1.55)",
  };
  const triangleContainerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridTemplateRows: "repeat(2, auto)",
    gap: "12px",
    alignItems: "center",
    justifyItems: "center",
    filter: "drop-shadow(0 10px 30px rgba(16, 185, 129, 0.4))",
    animation: phase >= 4 ? "logoFloat 6s ease-in-out infinite" : "none",
  };

  // Text container
  const textContainerStyles = {
    opacity: phase >= 5 ? 1 : 0,
    transform: phase >= 5 ? "translateY(0px)" : "translateY(40px)",
    transition: "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s",
    filter: "drop-shadow(0 5px 15px rgba(16, 185, 129, 0.3))",
  };

  const backgroundParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4,
  }));

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float0 {
        0%, 100% { transform: rotate(0deg) translateX(150px) rotate(0deg) translateY(0px); }
        50% { transform: rotate(0deg) translateX(150px) rotate(0deg) translateY(-20px); }
      }
      @keyframes float1 {
        0%, 100% { transform: rotate(72deg) translateX(150px) rotate(-72deg) translateY(0px); }
        50% { transform: rotate(72deg) translateX(150px) rotate(-72deg) translateY(-15px); }
      }
      @keyframes float2 {
        0%, 100% { transform: rotate(144deg) translateX(150px) rotate(-144deg) translateY(0px); }
        50% { transform: rotate(144deg) translateX(150px) rotate(-144deg) translateY(-25px); }
      }
      @keyframes float3 {
        0%, 100% { transform: rotate(216deg) translateX(150px) rotate(-216deg) translateY(0px); }
        50% { transform: rotate(216deg) translateX(150px) rotate(-216deg) translateY(-10px); }
      }
      @keyframes float4 {
        0%, 100% { transform: rotate(288deg) translateX(150px) rotate(-288deg) translateY(0px); }
        50% { transform: rotate(288deg) translateX(150px) rotate(-288deg) translateY(-30px); }
      }

      @keyframes energyPulse {
        0% { transform: scale(0) rotate(0deg); }
        50% { transform: scale(1.5) rotate(180deg); }
        100% { transform: scale(1) rotate(360deg); }
      }

      @keyframes logoFloat {
        0%, 100% { 
          transform: translateY(0px) rotateX(0deg);
        }
        33% { 
          transform: translateY(-8px) rotateX(5deg);
        }
        66% { 
          transform: translateY(4px) rotateX(-3deg);
        }
      }

      @keyframes triangleGlow {
        0%, 100% { filter: brightness(1) saturate(1); }
        50% { filter: brightness(1.2) saturate(1.3); }
      }

      @keyframes textShimmer {
        0% { opacity: 0.8; transform: translateX(-2px); }
        50% { opacity: 1; transform: translateX(0px); }
        100% { opacity: 0.8; transform: translateX(2px); }
      }

      @keyframes backgroundFloat {
        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.1; }
        50% { transform: translateY(-20px) scale(1.1); opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div style={containerStyles}>
      {backgroundParticles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: "#10b981",
            opacity: 0.1,
            animation: `backgroundFloat ${particle.duration}s ease-in-out infinite ${particle.delay}s`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div style={mainAnimationStyles}>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} style={particleStyles(i)} />
        ))}

        <div style={energyCoreStyles} />

        <div style={logoContainerStyles}>
          <div style={triangleContainerStyles}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="93"
              viewBox="0 0 80 93"
              fill="none"
              style={{
                gridColumn: "1 / span 2",
                justifySelf: "center",
                animation:
                  phase >= 4 ? "triangleGlow 4s ease-in-out infinite" : "none",
              }}
            >
              <path
                d="M0.23988 46.8597L23.1842 0.643282C23.5363 -0.0659125 24.5337 -0.104076 24.939 0.576145L79.0993 91.4882C79.4965 92.1548 79.0162 93 78.2403 93H27.2407C26.8852 93 26.5565 92.8113 26.3772 92.5043L0.272071 47.8087C0.102257 47.5179 0.0901572 47.1613 0.23988 46.8597Z"
                fill="url(#topGradient)"
              />
              <defs>
                <linearGradient
                  id="topGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="45"
              viewBox="0 0 80 45"
              fill="none"
              style={{
                gridColumn: "1",
                gridRow: "2",
                transform: "translateX(-20px)",
                marginTop: "-10px",
                animation:
                  phase >= 4
                    ? "triangleGlow 4s ease-in-out infinite 0.5s"
                    : "none",
              }}
            >
              <path
                d="M76.3266 0H24.8045C24.4364 0 24.0982 0.202151 23.9238 0.526263L0.792769 43.5263C0.43439 44.1925 0.916941 45 1.67344 45H53.1955C53.5636 45 53.9018 44.7978 54.0762 44.4737L77.2072 1.47374C77.5656 0.807519 77.0831 0 76.3266 0Z"
                fill="url(#leftGradient)"
              />
              <defs>
                <linearGradient
                  id="leftGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#047857" />
                  <stop offset="100%" stopColor="#065f46" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="46"
              viewBox="0 0 53 46"
              fill="none"
              style={{
                gridColumn: "2",
                gridRow: "2",
                marginTop: "-10px",
                transform: "translateX(-5px)",
                animation:
                  phase >= 4
                    ? "triangleGlow 4s ease-in-out infinite 1s"
                    : "none",
              }}
            >
              <path
                d="M0.884075 44.4938L26.1376 1.4693C26.524 0.810902 27.476 0.810903 27.8624 1.4693L53.1159 44.4938C53.5072 45.1604 53.0265 46 52.2535 46H1.74649C0.973498 46 0.492786 45.1604 0.884075 44.4938Z"
                fill="url(#rightGradient)"
              />
              <defs>
                <linearGradient
                  id="rightGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      <div style={textContainerStyles}>
        <svg
          width="400"
          height="45"
          viewBox="0 0 356 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            animation:
              phase >= 5 ? "textShimmer 3s ease-in-out infinite" : "none",
          }}
        >
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          <path
            d="M176.053 37.1503L146.521 4.67276C145.937 4.03042 146.393 3 147.261 3H152.514C152.796 3 153.065 3.11882 153.254 3.32723L176.042 28.3872C176.454 28.8408 177.174 28.8199 177.559 28.3431L197.743 3.37139C197.933 3.1365 198.219 3 198.521 3H203.865C204.713 3 205.176 3.98897 204.633 4.64028L177.561 37.1178C177.173 37.5841 176.462 37.5994 176.053 37.1503Z"
            fill="url(#textGradient)"
          />
          <path
            d="M125.805 3C144.541 3.00021 144.541 37.9422 125.805 37.9424H70.5938C70.0416 37.9422 69.5938 37.4946 69.5938 36.9424V4C69.5938 3.4478 70.0416 3.00013 70.5938 3H125.805ZM75.9473 8.375C75.3952 8.37513 74.9474 8.82289 74.9473 9.375V31.5664C74.9474 32.1185 75.3952 32.5663 75.9473 32.5664H125.958C136.46 32.5664 136.46 8.375 125.958 8.375H75.9473Z"
            fill="url(#textGradient)"
          />
          <path
            d="M31.3261 0.930331L1.40798 35.9757C0.853876 36.6248 1.31511 37.625 2.16853 37.625H7.56893C7.86155 37.625 8.13949 37.4968 8.32948 37.2743L31.3139 10.3508C31.7283 9.86541 32.4852 9.88718 32.8711 10.3956L53.2337 37.2295C53.4228 37.4787 53.7175 37.625 54.0303 37.625H59.5116C60.3451 37.625 60.8128 36.6651 60.2991 36.0087L32.8742 0.963328C32.4846 0.465478 31.7365 0.449533 31.3261 0.930331Z"
            fill="url(#textGradient)"
          />
          <path
            d="M26.7669 32.25C26.7669 27.95 29.4436 26.875 30.782 26.875C32.5664 26.875 36.1353 27.95 36.1353 32.25C36.1353 36.55 32.5664 37.625 30.782 37.625C29.4436 37.625 26.7669 36.55 26.7669 32.25Z"
            fill="url(#textGradient)"
          />
          <path
            d="M234.581 3.82983L204.552 36.3213C203.96 36.9617 204.414 38 205.286 38H210.649C210.928 38 211.195 37.8835 211.384 37.6787L234.569 12.5926C234.981 12.1471 235.691 12.1678 236.076 12.6365L256.613 37.6348C256.803 37.866 257.086 38 257.386 38H262.842C263.694 38 264.156 37.0034 263.605 36.3536L236.078 3.86216C235.69 3.40397 234.988 3.38883 234.581 3.82983Z"
            fill="url(#textGradient)"
          />
          <path
            d="M229.957 33C229.957 29 232.652 28 234 28C235.797 28 239.391 29 239.391 33C239.391 37 235.797 38 234 38C232.652 38 229.957 37 229.957 33Z"
            fill="url(#textGradient)"
          />
          <path
            d="M276 37V4C276 3.44772 276.448 3 277 3H280C280.552 3 281 3.44772 281 4V37C281 37.5523 280.552 38 280 38H277C276.448 38 276 37.5523 276 37Z"
            fill="url(#textGradient)"
          />
          <path
            d="M292 7.71295V4C292 3.44772 292.448 3 293 3H355C355.552 3 356 3.44772 356 4V7.71295C356 8.26524 355.552 8.71295 355 8.71295H337.333C325.685 8.71295 325.338 25.604 326.638 34.2333C326.657 34.3602 326.651 34.4889 326.62 34.6132C325.587 38.6934 323.005 38.2914 321.602 37.4529C321.423 37.346 321.216 37.2896 321.014 37.2394C317.352 36.3308 319.416 19.453 321.118 9.89273C321.228 9.2766 320.755 8.71295 320.129 8.71295H293C292.448 8.71295 292 8.26524 292 7.71295Z"
            fill="url(#textGradient)"
          />
        </svg>
      </div>
      </div>

    </div>
  );
};

export default AdvaitPremiumLoader;
