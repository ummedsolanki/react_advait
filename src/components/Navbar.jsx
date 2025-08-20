import logo from "../images/Advait-Logo.svg";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#e6f9e6",
      padding: "10px 50px",
    },
    logoImg: {
      height: "40px",
    },
    links: {
      listStyle: "none",
      display: "flex",
      gap: "30px",
      margin: 0,
      padding: 0,
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontWeight: 500,
      padding: "10px 15px",
      borderRadius: "20px",
    },
    activeLink: {
      backgroundColor: "white",
    },
    getInTouch: {
      backgroundColor: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "30px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#333",
      textDecoration: "none",
    },
    arrow: {
      backgroundColor: "#dcffcc",
      borderRadius: "30px",
      width: "30px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div>
        <img src={logo} alt="Advait Logo" style={styles.logoImg} />
      </div>
      <ul style={styles.links}>
        <li>
          <a href="#" style={{ ...styles.link, ...styles.activeLink }}>
            Home
          </a>
        </li>
        <li>
          <a href="#" style={styles.link}>
            About
          </a>
        </li>
        <li>
          <a href="#" style={styles.link}>
            Industries
          </a>
        </li>
        <li>
          <a href="#" style={styles.link}>
            Services
          </a>
        </li>
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
          Get in Touch <span style={styles.arrow}>→</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
