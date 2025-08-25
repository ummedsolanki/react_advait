import ServiceCard from "../components/ServiceCard";
import { servicesProvide, servicesStaticData } from "../data/services.data";

export default function WeProvide() {
  return (
    <>
      <section className="blog-section header-margin">
        <div className="about-image-wrapper mobile-image-wrapper-ext-80">
          <img src={servicesStaticData.servicesBanner} alt="About Us" className="about-image" />
          <div className="about-overlay">
            <h1>{servicesStaticData.servicesTitle}</h1>
          </div>
        </div>

        <div className="industries-content service-content">
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

