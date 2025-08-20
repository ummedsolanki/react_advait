import { useState } from "react";
import logo from "../assets/Advait-Logo.svg";

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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/industries">Industries</a>
          <a href="/services">Services</a>
          <a href="/careers">Careers</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Contact Us</a>
        </nav>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
}
