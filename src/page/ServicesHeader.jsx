import ServiceCard from "../components/ServiceCard";
import { servicesProvide, servicesStaticData } from "../data/services.data";
import HeroComponent from "../components/HeroComponent";
import { getHeroData } from "../api/HeroApi";
import { useState, useEffect, useRef } from "react";

export default function Industries() {
  const [heroData, setHeroData] = useState(null);
  const fetched = useRef(false); // track if API already called

  useEffect(() => {
    if (fetched.current) return; // prevent second call
    fetched.current = true;
    getHeroData("Services").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home);
      }
    });
  }, []);

  if (!heroData) return <p>Loading...</p>;
  return (
    <>
      <section className="blog-section header-margin">
        <div>
          <HeroComponent heroData={heroData} />
        </div>

        <div className="industries-content service-content about-margin">
          <div className="industries-heading">
            <h2 className="Service-Header">
              <strong>
                {servicesStaticData.servicesSubTitle}
                <span className="mobile-br">
                  <br />
                </span>{" "}
                {servicesStaticData.servicesSubTitle2}
              </strong>{" "}
              {servicesStaticData.servicesSubTitle3}
              <span className="mobile-br">
                <br />{" "}
              </span>{" "}
              {servicesStaticData.servicesSubTitle4}
            </h2>
          </div>
          <div className="industries-text">
            <p>
              {servicesStaticData.servicesViewAll}
            </p>
          </div>
        </div>
      </section>

      <ServiceCard sectionTitle="Services" sectionTag="WE PROVIDE" data={servicesProvide} />
    </>
  );
}

