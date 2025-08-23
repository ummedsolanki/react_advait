import React from "react";
import { footerDetails } from "../data/staticData";

const FooterDetails = () => {
  const footerStyle = {
    width: "100%",
    height: "250px",
    flexShrink: 0,
    borderRadius: "20px 20px 0 0",
    background: "#078672",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 5%",
    boxSizing: "border-box",
    // fontFamily: "'Open Sans', sans-serif !important",
  };

  const contentWrapper = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  };

  const svgContainer = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const svgStyle = {
    width: "209px",
    height: "178px",
    flexShrink: 0,
    fill: "rgba(255, 255, 255, 0.10)",
    backdropFilter: "blur(3px)",
  };

  const contactSection = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "300px",
    color: "#FFF",
    textAlign: "left",
    zIndex: 2,
  };

  const headingStyle = {
    // fontFamily: "'Open Sans', sans-serif !important",
    fontSize: "25px",
    fontWeight: 600,
    margin: "0 0 10px 0",
  };

  const addressStyle = {
    // fontFamily: "'Open Sans', sans-serif !important",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    margin: "0 0 10px 0",
    whiteSpace: "pre-line",
  };

  const contactRow = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    // fontFamily: "'Open Sans', sans-serif !important",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
  };

  const responsiveCSS = `
    @media (max-width: 1024px) {
      footer {
        height: auto !important;
        padding: 20px !important;
      }
      .footer-content-wrapper {
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
      }
      .footer-contact-section {
        align-items: center !important;
        text-align: center !important;
        max-width: 100% !important;
      }
      .footer-contact-section h3 {
        font-size: 22px !important;
      }
      .footer-contact-section p,
      .footer-contact-section div {
        font-size: 14px !important;
      }
      .footer-svg-container {
        top: 0;
        transform: translateX(-50%) translateY(-20%);
      }
    }

    @media (max-width: 768px) {
      footer {
        padding: 15px !important;
        height: auto !important;
      }
      .footer-contact-section h3 {
        font-size: 20px !important;
      }
      .footer-contact-section p,
      .footer-contact-section div {
        font-size: 13px !important;
      }
    }

    @media (max-width: 480px) {
      footer {
        padding: 10px !important;
        height: auto !important;
        
      }
      .footer-contact-section h3 {
        font-size: 18px !important;
      }
      .footer-contact-section p,
      .footer-contact-section div {
        font-size: 12px !important;
      }
      .footer-svg-container svg {
        width: 150px !important;
        height: 120px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>
      <footer style={footerStyle}>
        <div className="footer-content-wrapper" style={contentWrapper}>
          {/* Centered background SVG */}
          <div className="footer-svg-container" style={svgContainer}>
            <svg
              style={svgStyle}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 209 178"
              fill="none"
            >
              <g data-figma-bg-blur-radius="6">
                <path
                  d="M34.1224 178L59.7143 135.108H115.163L89.5714 178H34.1224Z"
                  fill="white"
                  fillOpacity="0.1"
                />
                <path
                  d="M0 130.819L42.6531 57.9036H98.102L53.3163 130.819H0Z"
                  fill="white"
                  fillOpacity="0.1"
                />
                <path
                  d="M153.551 135.108L72.5102 0H130.092L209 135.108H153.551Z"
                  fill="white"
                  fillOpacity="0.1"
                />
              </g>
            </svg>
          </div>

          {/* Contact Section */}
          <div className="footer-contact-section" style={contactSection}>
            <h3 style={headingStyle}>{footerDetails.IndiaHeadOffice}</h3>
            <p style={addressStyle}>{footerDetails.Address}</p>

            {/* Phone */}
            <div style={contactRow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.6659 9.16714H18.3326C18.3326 4.89214 15.1051 1.66797 10.8242 1.66797V3.33464C14.2092 3.33464 16.6659 5.78714 16.6659 9.16714Z"
                  fill="white"
                />
                <path
                  d="M5.12012 3.15527C5.18499 3.15936 5.24643 3.18243 5.29785 3.2207L5.3457 3.26367L8.42578 6.64941C8.48408 6.71343 8.51537 6.79823 8.5127 6.88477C8.50998 6.97121 8.47319 7.05303 8.41113 7.11328L8.41016 7.11426L6.36133 9.10938L6.16992 9.2959L6.21875 9.55957C6.32306 10.117 6.66368 11.1813 7.74023 12.2588V12.2598C8.81705 13.3339 9.8795 13.6735 10.4385 13.7803L10.7021 13.8311L10.8906 13.6377L12.8848 11.5869C12.9452 11.5248 13.0276 11.488 13.1143 11.4854C13.2007 11.4828 13.2846 11.5142 13.3486 11.5723L16.7354 14.6523C16.7994 14.7106 16.8383 14.7915 16.8438 14.8779C16.8478 14.943 16.8326 15.0076 16.8008 15.0635L16.7637 15.1162L15.2324 16.9033C15.1763 16.957 15.1031 16.9898 15.0254 16.9941H15.0234C15.0069 16.9951 14.9137 17 14.7549 17C13.6521 17 9.63502 16.7621 6.43652 13.5645C2.76783 9.89411 2.99552 5.14921 3.00586 4.97656V4.97461C3.01039 4.8963 3.04301 4.82257 3.09668 4.76562L4.88281 3.23438L4.88184 3.2334C4.94766 3.17713 5.03368 3.14987 5.12012 3.15527ZM11.334 5.51953C12.3305 5.59984 13.0671 5.92451 13.5713 6.42871C14.0757 6.93308 14.4003 7.66998 14.4805 8.66699H13.8096C13.7463 7.95278 13.5368 7.34857 13.0947 6.90625C12.6525 6.46405 12.0481 6.25283 11.334 6.18945V5.51953Z"
                  stroke="white"
                />
              </svg>
              {footerDetails.Phone}
            </div>

            {/* Email */}
            <div style={contactRow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.3307 3.33203H1.66406V16.6654H18.3307V3.33203ZM16.6641 6.66536L9.9974 10.832L3.33073 6.66536V4.9987L9.9974 9.16536L16.6641 4.9987V6.66536Z"
                  fill="white"
                />
              </svg>
              {footerDetails.Email}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterDetails;
