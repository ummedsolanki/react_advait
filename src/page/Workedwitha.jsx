import worked1 from "../assets/ind1.jpg";
import worked2 from "../assets/ind2.jpg";
import worked3 from "../assets/ind3.jpg";
import ServiceCard from "../components/ServiceCard";
const workedWitha = [
  {
    title: "Company A",
    subtitle:
      "Partnered for delivering enterprise-grade analytics and transformation projects.",
    src: worked1,
  },
  {
    title: "Company B",
    subtitle:
      "Collaborated on user experience optimization and digital workplace solutions.",
    src: worked2,
  },
  {
    title: "Company C",
    subtitle:
      "Implemented modern ERP systems with best-in-class migration strategies.",
    src: worked3,
  },
];

export default function WorkedWithSection() {
  return (
    <section className="workedwith-section">
      <ServiceCard sectionTitle="Utility /Power Generation" sectionTag="WORKED WITH" data={workedWitha} />
    </section>
  );
}