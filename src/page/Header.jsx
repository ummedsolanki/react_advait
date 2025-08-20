import { useState } from "react";
import logo from "../assets/advaitlogo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Advait Logo" />
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Industries</a>
          <a href="#">Services</a>
          <a href="#">Careers</a>
          <a href="#">Insights</a>
          <button className="contact-btn">Contact Us →</button>
        </nav>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
}
