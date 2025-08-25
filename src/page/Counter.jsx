import CountUp from "react-countup";

export default function Counter() {
  return (
    <div
      className="counters counter-section"
    >
      {/* Card 1 */}
      <div
        style={{
          background: "#fff",
          padding: "30px 20px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
          <CountUp end={12} duration={2} />+ Yr
        </h2>
        <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
          Proven record
        </p>
      </div>

      {/* Card 2 */}
      <div
        style={{
          background: "#fff",
          padding: "30px 20px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
          <CountUp end={30} duration={2} />+
        </h2>
        <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
          Happy Customer
        </p>
      </div>

      {/* Card 3 */}
      <div
        style={{
          background: "#fff",
          padding: "30px 20px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
          <CountUp end={100} duration={2} />+
        </h2>
        <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
          Projects Completed
        </p>
      </div>

      {/* Card 4 */}
      <div
        style={{
          background: "#fff",
          padding: "30px 20px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
          SAP
        </h2>
        <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
          Certified Consultants
        </p>
      </div>
    </div>
  );
}
