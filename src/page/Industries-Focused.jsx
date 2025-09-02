import HeroComponent from "../components/HeroComponent";
import { getHeroData } from "../api/HeroApi";
import { useState, useEffect, useRef } from "react";

export default function Industries() {
  const [heroData, setHeroData] = useState(null);
  const fetched = useRef(false); // track if API already called

  useEffect(() => {
    if (fetched.current) return; // prevent second call
    fetched.current = true;
    getHeroData("Industries").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home[0]);
      }
    });
  }, []);

  if (!heroData) return <p>Loading...</p>;

  return (
    <section className="industries-section header-margin">
      <div>
        <HeroComponent heroData={heroData} />
      </div>

      <div className="industries-content about-margin">
        <div className="industries-heading">
          <h2>
            <strong>Industry-Focused</strong> <span className="mobile-br"><br /> </span> Solutions.
            Tailored for <span className="mobile-br"><br /> </span><strong>Your Success.</strong>
          </h2>
        </div>
        <div className="industries-text">
          <p>
            Advait Business Solutions specializes in delivering tailored digital
            transformation solutions for key industries, including Healthcare,
            Pharma & Life Sciences, Retail, FMCG, Construction, and Chemical
            Manufacturing. Our deep domain knowledge and industry-focused approach
            ensure that each solution is customized to meet the unique operational
            challenges and regulatory requirements of your business, driving
            efficiency, compliance, and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
