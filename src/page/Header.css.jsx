const styles = {
  navbarContainer: {
    width: '100%',
    height: '80px',
    '& .fixed-nav': {
      position: 'fixed',
      width: '100%',
      height: '80px',
      top: 0,
      left: 0,
      backgroundColor: 'white',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    '@media (min-width: 768px)': {
      height: '100px',
      '& .fixed-nav': {
        height: '100px'
      }
    },
    '@media (min-width: 1440px)': {
      maxWidth: '100%',
      margin: '0 auto',
      '& .fixed-nav': {
        maxWidth: '100%',
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e6f9e6',
    padding: '10px 20px',
    height: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    '@media (min-width: 768px)': {
      padding: '10px 50px',
    }
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
    '@media (min-width: 768px)': {
      gap: '30px'
    },
    '@media (max-width: 767px)': {
      position: 'fixed',
      top: '80px',
      left: 0,
      right: 0,
      backgroundColor: '#e6f9e6',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 0',
      gap: '10px',
      transform: 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out',
      '&.mobile-visible': {
        transform: 'translateY(0)'
      }
    }
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500,
    padding: '8px 12px',
    borderRadius: '20px',
    display: 'block',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    fontSize: '14px',
    '@media (min-width: 768px)': {
      padding: '10px 15px',
      fontSize: '16px',
    },
    '@media (max-width: 767px)': {
      width: '100%',
      padding: '12px 15px',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.05)',
      }
    }
  },
  linkHover: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  modalTitle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
  },
  modalDescription: {
    fontSize: "14px",
    color: "#666",
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
  modalResponsive: {
    width: "280px",
    minHeight: "auto",
    borderRadius: "20px",
  },
  activeLink: {
    backgroundColor: "#008060", // ✅ green background like video
    color: "white",             // ✅ white text when active
    fontWeight: "600",
  },
  modal: {
    position: "absolute",
    top: "calc(100% + 8px)", // ✅ little gap below nav item (same as video)
    left: "0",
    width: "250px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    padding: "8px 0",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
  },
  modalItem: {
    padding: "12px 15px",
    transition: "background 0.2s ease",
    cursor: "pointer",
    textDecoration: "none",
  },
  modalItemHover: {
    backgroundColor: "#f5f5f5",
  }
};

export default styles;
