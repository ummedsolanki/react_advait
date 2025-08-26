import worked1 from "../assets/ind11.jpg";
import worked2 from "../assets/ind12.jpg";
import worked3 from "../assets/ind13.jpg";
import ServiceCard from "../components/ServiceCard";
const workedWithd = [
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
      <ServiceCard sectionTitle="Manufacturing / Chemicals" sectionTag="WORKED WITH" data={workedWithd} />
    </section>
  );
}