import worked1 from "../assets/ind4.jpg";
import worked2 from "../assets/ind5.jpg";
import worked3 from "../assets/ind6.jpg";
import ServiceCard from "../components/ServiceCard";
const workedWithb = [
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
      <ServiceCard sectionTitle="Automotive" sectionTag="WORKED WITH" data={workedWithb} />
    </section>
  );
}