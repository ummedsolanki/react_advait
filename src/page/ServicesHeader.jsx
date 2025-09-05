import ServiceCard from "../components/ServiceCard";
import HeroComponent from "../components/HeroComponent";
import { getHeroData } from "../api/HeroApi";
import { useState, useEffect, useRef } from "react";
import { servicesStaticData } from "../data/services.data";
import { useNavigate } from "react-router-dom";
import { generateSlug } from "../components/GenerateSlug";

export default function Industries() {
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState(null);
  const [servicesProvide, setServicesProvide] = useState([]); // backend services
  const fetched = useRef(false); // track if API already called

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    // get hero data
    getHeroData("Services").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home);
      }
    });

    // fetch services from backend
    fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/services/list?page=1&limit=20 `)
      .then((res) => res.json())
      .then((data) => {
        if (data.services) {
          const updatedServices = data.services.map((item) => ({
            ...item,
            src: item.imageUrl || `${import.meta.env.VITE_BACKEND_API_URL}${item.image}`,
          }));
          setServicesProvide(updatedServices);
        }
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  if (!heroData || servicesProvide.length === 0) return <p>Loading...</p>;

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

      {/* ✅ now this uses backend data */}
      <ServiceCard
        sectionTitle="Services"
        sectionTag="WE PROVIDE"
        data={servicesProvide}
        onCardClick={(service) => {
          navigate(`/services/${generateSlug(service.title)}`, { state: { item: service } });
        }}
      />
    </>
  );
}
