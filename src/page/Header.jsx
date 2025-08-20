import { useState, useRef, useEffect } from "react";
import logo from "../assets/advaitlogo.svg";
import styles from "./Navbar.css.jsx"; // Make sure this exports a JS object

const NavItem = ({ title, children, isOpen, onToggle }) => {
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

  // Change: handle link navigation
  const handleLinkClick = (e) => {
    e.preventDefault();
    if (title === "Industries") {
      window.location.href = "/industries";
    } else if (title === "Services") {
      window.location.href = "/services";
    }
  };

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
      <a
        href="#"
        onClick={handleLinkClick}
        style={{
          ...styles.link,
          ...(isOpen || isHovered ? styles.activeLink : {}),
        }}
      >
        {title}
      </a>
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
  const modalContent = {
    industries: [
      { title: "Healthcare", link: "/industries/healthcare" },
      { title: "Finance", link: "/industries/finance" },
      { title: "Education", link: "/industries/education" },
      { title: "Retail", link: "/industries/retail" },
    ],
    services: [
      { title: "Services", link: "/services" },
      { title: "Cloud Solution", link: "/services/cloud-solution" },
      {
        title: "Consulting & Engineering Services",
        link: "/services/consulting",
      },
      { title: "Modernization", link: "/services/modernization" },
      { title: "Solutions", link: "/services/solutions" },
      { title: "Infra", link: "/services/infra" },
    ],
  };

  return (
    <nav style={styles.navbar}>
      <div>
        <img
          src={logo}
          alt="Advait Logo"
          width={150}
          height={40}
          className="h-10 w-auto"
        />
      </div>
      <ul style={styles.links}>
        <li>
          <a href="/" style={{ ...styles.link, ...styles.activeLink }}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" style={styles.link}>
            About
          </a>
        </li>
        <NavItem
          title="Industries"
          isOpen={openDropdown === "industries"}
          onToggle={(isOpen) => setOpenDropdown(isOpen ? "industries" : null)}
        >
          {modalContent.industries.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="dropdown-link"
              style={styles.modalItem}
            >
              <div style={styles.modalTitle}>{item.title}</div>
            </a>
          ))}
        </NavItem>
        <NavItem
          title="Services"
          isOpen={openDropdown === "services"}
          onToggle={(isOpen) => setOpenDropdown(isOpen ? "services" : null)}
        >
          {modalContent.services.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="dropdown-link"
              style={styles.modalItem}
            >
              <div style={styles.modalTitle}>{item.title}</div>
            </a>
          ))}
        </NavItem>
        <li>
          <a href="#" style={styles.link}>
            Careers
          </a>
        </li>
        <li>
          <a href="#" style={styles.link}>
            Insights
          </a>
        </li>
      </ul>
      <div>
        <a href="#" style={styles.getInTouch}>
          Get in Touch <span style={styles.arrow}>{"→"}</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
