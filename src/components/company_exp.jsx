import React from "react";
// import { companyExpData } from "../data/staticData";

const CompanyExp = () => {
  const boxStyle = {
    flex: "1",
    minWidth: "200px",
    maxWidth: "280px",
    height: "244px",
    borderRadius: "20px",
    background: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
    margin: "0 10px",
  };

  const headerStyle = {
    color: "#000",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    margin: "0 0 10px 0",
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "1400px",
    margin: "0 auto",
  };

  return (
    <div style={containerStyle}>
      {companyExpData.map((stat, index) => (
        <div key={index} style={boxStyle}>
          <h2 style={headerStyle}>{stat.number}</h2>
          <p>{stat.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyExp;
