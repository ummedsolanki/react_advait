
import ServiceCard from "../components/ServiceCard";
import { ModernizationStaticData, Modernizations } from "../data/modernizations.data";

export default function Modernization() {
  return (
    <>
      <section className="industries-section header-margin">
        <div className="video-banner mobile-image-wrapper-ext-80">
          <img
            className="video-bg"
            src={ModernizationStaticData.video}
            alt="Industry Video"
          />

          <div className="video-overlay">
            <h1 className="industries-title">{ModernizationStaticData.title}</h1>
          </div>
        </div>

        <div className="industries-content service-content">
          <div className="industries-heading">
            <h2>
              <strong>{ModernizationStaticData.subtitle}</strong>
              <span className="mobile-br"><br /> </span>   {ModernizationStaticData.description}
            </h2>
          </div>
          <div className="industries-text">
            <p>
              {ModernizationStaticData.lineData}
            </p>
          </div>
        </div>
      </section>

      <ServiceCard sectionTitle="Modernization" sectionTag="WE PROVIDE" data={Modernizations} />
    </>
  );
}
