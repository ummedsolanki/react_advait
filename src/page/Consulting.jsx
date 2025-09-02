import { Consultings, consultingStaticData } from '../data/consulting.data';
import ServiceCard from '../components/ServiceCard';
import HeroComponent from '../components/HeroComponent';
import { getHeroData } from '../api/HeroApi';
import { useState, useEffect, useRef } from "react";

export default function Industries() {
  const [heroData, setHeroData] = useState(null);
  const fetched = useRef(false); // track if API already called

  useEffect(() => {
    if (fetched.current) return; // prevent second call
    fetched.current = true;
    getHeroData("Consulting").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home[0]);
      }
    });
  }, []);

  if (!heroData) return <p>Loading...</p>;

  return (
    <>
      <section className="industries-section header-margin">
        <div>
          <HeroComponent heroData={heroData} />
        </div>

        <div className="industries-content service-content about-margin">
          <div className="industries-heading">
            <h2>
              <strong>{consultingStaticData.subtitle}</strong>
              <span className="mobile-br"><br /> </span>   {consultingStaticData.description}
            </h2>
          </div>
          <div className="industries-text">
            <p>
              {consultingStaticData.lineData}
            </p>
          </div>
        </div>
      </section>

      <ServiceCard sectionTitle="Tailored Consultings" sectionTag="Our Consultings" data={Consultings} />
    </>
  );
}
