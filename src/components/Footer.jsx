import React from "react";
import AdvaitLogo from "../assets/Advait-Logo.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import InstagramIcon from "../assets/instagram.svg";

const styles = {
  footer: {
    width: "100%",
    height: "105px",
    background: "#FFF",
    display: "flex",
    alignItems: "center", // ✅ vertically centers all children
    justifyContent: "space-between",
    padding: "0 40px",
    boxSizing: "border-box",
  },
  footerLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  footerText: {
    color: "#078672",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "25.5px",
    margin: "2px 0",
    textDecoration: "none",
  },
  footerCenter: {
    flex: 1, // ✅ allows center to stretch equally
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // ✅ logo stays perfectly centered
  },
  footerLogo: {
    height: "60px",
    objectFit: "contain",
  },
  footerRight: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  footerIcon: {
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Left Section */}
      <div style={styles.footerLeft}>
        <p style={styles.footerText}>
          © 2025 ADVAIT BUSINESS SOLUTION. All rights reserved.
        </p>
        <a href="#" style={styles.footerText}>Privacy Policy</a>
      </div>

      {/* Center Logo */}
      <div style={styles.footerCenter}>
        <img src={AdvaitLogo} alt="Advait Logo" style={styles.footerLogo} />
      </div>

      {/* Right Icons */}
      <div style={styles.footerRight}>
        <a href="#"><img src={LinkedInIcon} alt="LinkedIn" style={styles.footerIcon} /></a>
        <a href="#"><img src={TwitterIcon} alt="Twitter" style={styles.footerIcon} /></a>
        <a href="#"><img src={InstagramIcon} alt="Instagram" style={styles.footerIcon} /></a>
      </div>
    </footer>
  );
};

export default Footer;
