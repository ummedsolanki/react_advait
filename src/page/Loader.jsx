import React from "react";

const loaderStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  logoContainer: {
    position: "relative",
    // width: "120px",
    // height: "100px",
  },
  topTriangle: {
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  },
  leftBottomTriangle: {
    position: "absolute",
    bottom: "10px",
    left: "50px",
    zIndex: 1,
  },
  rightBottomTriangle: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    zIndex: 1,
  },
};

const Loader = () => {
  return (
    <div style={loaderStyles.container}>
      <div style={loaderStyles.logoContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="93"
          viewBox="0 0 80 93"
          fill="none"
          style={loaderStyles.topTriangle}
        >
          <path
            d="M0.23988 46.8597L23.1842 0.643282C23.5363 -0.0659125 24.5337 -0.104076 24.939 0.576145L79.0993 91.4882C79.4965 92.1548 79.0162 93 78.2403 93H27.2407C26.8852 93 26.5565 92.8113 26.3772 92.5043L0.272071 47.8087C0.102257 47.5179 0.0901572 47.1613 0.23988 46.8597Z"
            fill="#118A57"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="45"
          viewBox="0 0 80 45"
          fill="none"
          style={loaderStyles.leftBottomTriangle}
        >
          <path
            d="M76.3266 0H24.8045C24.4364 0 24.0982 0.202151 23.9238 0.526263L0.792769 43.5263C0.43439 44.1925 0.916941 45 1.67344 45H53.1955C53.5636 45 53.9018 44.7978 54.0762 44.4737L77.2072 1.47374C77.5656 0.807519 77.0831 0 76.3266 0Z"
            fill="#16593A"
          />
        </svg>
        <svg
          width="40"
          height="35"
          viewBox="0 0 1 `35"
          fill="none"
          style={loaderStyles.rightBottomTriangle}
        >
          <path
            d="M0.884075 44.4938L26.1376 1.4693C26.524 0.810902 27.476 0.810903 27.8624 1.4693L53.1159 44.4938C53.5072 45.1604 53.0265 46 52.2535 46H1.74649C0.973498 46 0.492786 45.1604 0.884075 44.4938Z"
            fill="#118A57"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
