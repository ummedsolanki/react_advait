import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BounceLoader,
  PacmanLoader,
  HashLoader,
  RingLoader,
  PulseLoader,
  GridLoader,
  FadeLoader,
} from "react-spinners";

const loaderList = [
  BounceLoader,
  PacmanLoader,
  HashLoader,
  RingLoader,
  PulseLoader,
  GridLoader,
  FadeLoader,
];

const textList = [
  "Loading... Please Wait",
  "Preparing something awesome...",
  "Almost there...",
  "Hang tight, magic is happening ✨",
  "Warming up the engines 🚀",
  "Fetching data...",
  "Just a moment more ⏳",
];

export default function LoaderShowcase() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(textList[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % loaderList.length;
        let newText;
        do {
          newText = textList[Math.floor(Math.random() * textList.length)];
        } while (newText === text);
        setText(newText);
        return nextIndex;
      });
    }, 2500); 
    return () => clearInterval(timer);
  }, [text]);

  const ActiveLoader = loaderList[index];

  return (
    <div
      className="loader-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0f172a",
        color: "#fff",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index + text}
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: -20 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ActiveLoader color="#36d7b7" size={90} />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ marginTop: "20px", fontSize: "18px", fontWeight: "500" }}
          >
            {text}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
