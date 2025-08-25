import worked1 from "../assets/ind11.jpg";
import worked2 from "../assets/ind12.jpg";
import worked3 from "../assets/ind13.jpg";

const workedWithe = [
  {
    title: "Company A",
    description:
      "Partnered for delivering enterprise-grade analytics and transformation projects.",
    src: worked1,
  },
  {
    title: "Company B",
    description:
      "Collaborated on user experience optimization and digital workplace solutions.",
    src: worked2,
  },
  {
    title: "Company C",
    description:
      "Implemented modern ERP systems with best-in-class migration strategies.",
    src: worked3,
  },
];

export default function WorkedWithSection() {
  return (
    <section className="workedwith-section">
      <div className="workedwith-header">
        <p className="tag">WORKED WITH</p>
        <h2>
          <strong>Pharma & Life science</strong>
        </h2>
      </div>

      <div className="workedwith-cards">
        {workedWithe.map((item, index) => (
          <div className="workedwith-card" key={index}>
            <div className="workedwith-card-header">
              <h3>{item.title}</h3>
              <div className="arrow-box"></div>
            </div>
            <p>{item.description}</p>
            <div className="workedwith-src">
              <img src={item.src} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}