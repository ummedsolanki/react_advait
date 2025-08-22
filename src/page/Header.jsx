import { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../assets/Advait-Logo.svg";
import styles from "./Header.css.jsx";
import { modalContent, headerData } from "../data/staticData";

const NavItem = ({ title, children, isOpen, onToggle, isActive }) => {
  const navItemRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navItemRef.current &&
        !navItemRef.current.contains(event.target) &&
        isOpen
      ) {
        onToggle && onToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onToggle && !isOpen) {
      onToggle(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const shouldShowDropdown = (isOpen || isHovered) && onToggle;

  return (
    <li
      ref={navItemRef}
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={title.toLowerCase() === "services" ? "/services" : "/industries"}
        style={{
          ...styles.link,
          ...(isOpen || isHovered || isActive ? styles.activeLink : {}),
        }}
      >
        {title}
      </Link>
      {shouldShowDropdown && children && (
        <div
          style={styles.modal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    if (path === "/") {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  return (
    <div style={styles.navbarContainer}>
      <div className="fixed-nav">
        <nav style={styles.navbar}>
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Advait Logo"
                width={120}
                height={100}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <ul style={styles.links}>
            <li>
              <Link
                to="/"
                style={{
                  ...styles.link,
                  ...(isActive("/") ? styles.activeLink : {}),
                }}
              >
                {headerData.home}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  ...styles.link,
                  ...(isActive("/about") ? styles.activeLink : {}),
                }}
              >
                {headerData.about}
              </Link>
            </li>
            <NavItem
              title="Services"
              isOpen={openDropdown === "services"}
              onToggle={(isOpen) => setOpenDropdown(isOpen ? "services" : null)}
              isActive={isActive("/services")}
            >
              {modalContent?.services.map((item, index) => (
                <div
                  key={index}
                  style={styles.modalItem}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#e6f7ed";
                    e.currentTarget.querySelector("div").style.color =
                      "#008060";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.querySelector("div").style.color = "#333";
                  }}
                >
                  <Link
                    to={item.link}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "block",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div style={styles.modalTitle}>{item.title}</div>
                  </Link>
                </div>
              ))}
            </NavItem>
            <li>
              <Link
                to="/industries"
                style={{
                  ...styles.link,
                  ...(isActive("/industries") ? styles.activeLink : {}),
                }}
              >
                {headerData.industries}
              </Link>
            </li>
            <li>
              <Link
                to="/insights"
                style={{
                  ...styles.link,
                  ...(isActive("/insights") ? styles.activeLink : {}),
                }}
              >
                {headerData.insights}
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                style={{
                  ...styles.link,
                  ...(isActive("/careers") ? styles.activeLink : {}),
                }}
              >
                {headerData.careers}
              </Link>
            </li>
          </ul>
          {/* <div>
            <Link
              to="/contact"
              style={{
                ...styles.getInTouch,
                ...(isActive("/contact") ? styles.activeLink : {}),
              }}
            >
              {headerData.contactUs} <span style={styles.arrow}>{"→"}</span>
            </Link>
          </div> */}
          <button className="contactus-apply-btn" onClick={() => navigate("/contact")}>
            <span className="contactus-btn-text">Contact Us</span>
            <div className="contactus-job-box job-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 32 16"
                fill="currentColor"
              >
                <path d="M1.00024 7C0.447959 7 0.000244141 7.44772 0.000244141 8C0.000244141 8.55228 0.447959 9 1.00024 9V8V7ZM31.7074 8.70711C32.0979 8.31658 32.0979 7.68342 31.7074 7.29289L25.3434 0.928932C24.9529 0.538408 24.3197 0.538408 23.9292 0.928932C23.5387 1.31946 23.5387 1.95262 23.9292 2.34315L29.586 8L23.9292 13.6569C23.5387 14.0474 23.5387 14.6805 23.9292 15.0711C24.3197 15.4616 24.9529 15.4616 25.3434 15.0711L31.7074 8.70711ZM1.00024 8V9L31.0002 9V8V7L1.00024 7V8Z" />
              </svg>
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
