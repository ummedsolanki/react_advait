import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/twitter.svg";
import InstagramIcon from "../assets/instagram.svg";
import AdvaitLogo from "../assets/Advait-Logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Left */}
      <div className="footer-left">
        <p>© 2025 ADVAIT. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>

      {/* Center */}
      <div className="footer-center">
        <img src={AdvaitLogo} alt="Advait Logo" className="footer-logo" />
      </div>

      {/* Right */}
      <div className="footer-right">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}
