import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Counter({ data }) {
  if (!data) return null;

  const counters = Object.values(data);

  return (
    <div className="counters counter-section">
      {counters.map((item, index) => {
        const numberMatch = item.subText.match(/\d+/);
        const number = numberMatch ? parseInt(numberMatch[0]) : null;

        return (
          <CounterCard key={index} number={number} text={item.text} subText={item.subText} />
        );
      })}
    </div>
  );
}

// Separate component for each card
function CounterCard({ number, text, subText }) {
  const [start, setStart] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true); // start animation
          observer.unobserve(entries[0].target); // only once
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        background: "#fff",
        padding: "30px 20px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        flex: 1,
      }}
    >
      <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
        {number !== null ? (
          <>
            {start ? <CountUp end={number} duration={2} /> : number}
            {subText.replace(/[0-9]/g, "")}
          </>
        ) : (
          subText
        )}
      </h2>
      <p style={{ fontSize: "18px", color: "#555", margin: 0 }}>{text}</p>
    </div>
  );
}

// import CountUp from "react-countup";

// export default function Counter() {
//   return (
//     <div
//       className="counters counter-section"
//     >
//       {/* Card 1 */}
//       <div
//         style={{
//           background: "#fff",
//           padding: "30px 20px",
//           borderRadius: "12px",
//           textAlign: "center",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
//           <CountUp end={12} duration={2} />+ Yr
//         </h2>
//         <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
//           Proven record
//         </p>
//       </div>

//       {/* Card 2 */}
//       <div
//         style={{
//           background: "#fff",
//           padding: "30px 20px",
//           borderRadius: "12px",
//           textAlign: "center",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
//           <CountUp end={30} duration={2} />+
//         </h2>
//         <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
//           Happy Customer
//         </p>
//       </div>

//       {/* Card 3 */}
//       <div
//         style={{
//           background: "#fff",
//           padding: "30px 20px",
//           borderRadius: "12px",
//           textAlign: "center",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
//           <CountUp end={100} duration={2} />+
//         </h2>
//         <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
//           Projects Completed
//         </p>
//       </div>

//       {/* Card 4 */}
//       <div
//         style={{
//           background: "#fff",
//           padding: "30px 20px",
//           borderRadius: "12px",
//           textAlign: "center",
//           boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//         }}
//       >
//         <h2 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 8px" }}>
//           SAP
//         </h2>
//         <p style={{ fontSize: "16px", color: "#555", margin: 0 }}>
//           Certified Consultants
//         </p>
//       </div>
//     </div>
//   );
// }
