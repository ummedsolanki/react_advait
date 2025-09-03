import Consulting1 from "../assets/Digital Transformation.jpg";
import Consulting2 from "../assets/SAP Business Solution.jpg";
import Consulting3 from "../assets/Chemical Industry.jpg";
import Study1 from "../assets/insights1.jpg";
import Study2 from "../assets/insights2.jpg";
import Study3 from "../assets/insights3.jpg";
import ServiceCard from "../components/ServiceCard";
import TestimonialSlider from "./SuccessStories";
import HeroComponent from "../components/HeroComponent";
import { useState, useEffect, useRef } from "react";
import { getHeroData } from "../api/HeroApi";

const Consultings = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: Consulting1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: Consulting2,
  },
  {
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
    src: Consulting3,
  },
];
const Studies = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: Study1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: Study2,
  },
  {
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
    src: Study3,
  },
];

export default function Insights() {
  const [heroData, setHeroData] = useState(null);
  const fetched = useRef(false); // track if API already called
  const [blogs, setblogs] = useState([]); // backend services

  useEffect(() => {
    if (fetched.current) return; // prevent second call
    fetched.current = true;
    getHeroData("Insights").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home);
      }
    });

    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/blogs/list?page=1&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs) {
          const updatedBlogs = data.blogs.map((item) => ({
            ...item,
            src: item.imageUrl || `${import.meta.env.VITE_BACKEND_API_URL}${item.image}`,
          }));
          setblogs(updatedBlogs);
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err));

  }, []);

  if (!heroData || blogs.length === 0) return <p>Loading...</p>;
  return (
    <>
      <section className="industries-section header-margin">
        <div>
          <HeroComponent heroData={heroData} />
        </div>
      </section>
      <ServiceCard sectionTitle="INSIGHTS" sectionTag="Blogs & Articles" data={blogs} />
      <ServiceCard sectionTitle="WORKS" sectionTag="Case Studies" data={Studies} />
      <TestimonialSlider />
    </>
  );
}
