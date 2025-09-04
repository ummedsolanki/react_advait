import React from "react";
import { motion } from "framer-motion";

const ShinyText = ({
  children,
  speed = 2,
  shineWidth = 40,
  baseColor = "#999",
  shineColor = "#fff",
  intensity = 1,
  direction = "left-to-right",
}) => {
  const directionConfig = {
    "left-to-right": {
      backgroundPosition: ["100% 0%", "-100% 0%"],
      backgroundSize: "200% 100%",
      gradientDirection: "90deg",
    },
    "right-to-left": {
      backgroundPosition: ["-100% 0%", "100% 0%"],
      backgroundSize: "200% 100%",
      gradientDirection: "90deg",
    },
    "top-to-bottom": {
      backgroundPosition: ["0% 100%", "0% -100%"],
      backgroundSize: "100% 200%",
      gradientDirection: "180deg",
    },
    "bottom-to-top": {
      backgroundPosition: ["0% -100%", "0% 100%"],
      backgroundSize: "100% 200%",
      gradientDirection: "0deg",
    },
  };

  const config = directionConfig[direction];

  const transparentStartPos = Math.max(0, 50 - shineWidth / 2);
  const transparentEndPos = Math.min(100, 50 + shineWidth / 2);

  const gradient = `linear-gradient(${config.gradientDirection}, ${baseColor}, transparent ${
    transparentStartPos - 5
  }%, ${shineColor} ${transparentStartPos}%, ${shineColor} ${transparentEndPos}%, transparent ${
    transparentEndPos + 5
  }%, ${baseColor})`;

  return (
    <motion.span
      style={{
        display: "inline-block",
        backgroundImage: gradient,
        backgroundSize: config.backgroundSize,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        opacity: intensity,
        fontSize: "-webkit-xxx-large",
      }}
      initial={{ backgroundPosition: config.backgroundPosition[0] }}
      animate={{
        backgroundPosition: config.backgroundPosition[1],
        transition: {
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      {children}
    </motion.span>
  );
};

export default ShinyText;
