import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Advait-Logo.svg";
import closeNav from "../assets/close_nav.svg";
import threeLine from "../assets/3_line.svg";
import "./HeaderMobile.css";
import { headerData, modalContent } from "../data/staticData";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
    document.body.style.overflow = "auto";
  };

  const toggleSubmenu = (item) => {
    setOpenSubmenu(openSubmenu === item ? null : item);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navItems = [
    { title: headerData.home, path: "/" },
    { title: headerData.about, path: "/about" },
    {
      title: headerData.services,
      path: "/services",
      submenu: modalContent.MobileServices,
    },
    { title: headerData.industries, path: "/industries" },
    { title: headerData.insights, path: "/insights" },
    { title: headerData.careers, path: "/careers" },
  ];

  return (
    <>
      <header className="mobile-header">
        <div className="mobile-header-container">
          <Link to="/" className="mobile-logo" onClick={closeMenu}>
            <img src={logo} alt="Advait Logo" />
          </Link>

          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? closeNav : threeLine}
              alt={isOpen ? "Close menu" : "Open menu"}
              className={`menu-icon ${isOpen ? "close-icon" : ""}`}
            />
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <div className="mobile-nav-scroll">
            <ul className="mobile-nav-list">
              {navItems
                .filter((item) => item.title !== "Contact Us")
                .map((item) => (
                  <li
                    key={item.title}
                    className={`mobile-nav-item ${
                      openSubmenu === item.title ? "active" : ""
                    }`}
                  >
                    {item.submenu ? (
                      <>
                        <button
                          className="mobile-nav-link"
                          onClick={() => toggleSubmenu(item.title)}
                          aria-expanded={openSubmenu === item.title}
                          aria-controls={`submenu-${item.title}`}
                        >
                          {item.title}
                        </button>
                        <ul
                          id={`submenu-${item.title}`}
                          className="mobile-submenu"
                          aria-hidden={openSubmenu !== item.title}
                        >
                          {item.submenu.map((subItem) => (
                            <li
                              key={subItem.title}
                              className="mobile-submenu-item"
                            >
                              <Link
                                to={subItem.link}
                                className="mobile-submenu-link"
                                onClick={closeMenu}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="mobile-nav-link"
                        onClick={closeMenu}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
            <div className="mobile-contact-button-container">
              <Link to="/contact" className="mobile-contact-button" onClick={closeMenu}>
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderMobile;
