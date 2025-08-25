import ServiceCard from "../components/ServiceCard";
import { cloudStaticData, CloudSolution } from "../data/cloudSolutions.data";

export default function CloudSolutions() {
  return (
    <>
      <section className="industries-section mobile-image-wrapper-ext-80">
        <div className="video-banner">
          <img
            className="video-bg"
            src={cloudStaticData.industryVideo}
            alt="Cloud Solutions"
            playsInline
          />
          <div className="video-overlay">
            <h1 className="industries-title">{cloudStaticData.title}</h1>
          </div>
        </div>

        <div className="industries-content service-content">
          <div className="industries-heading">
            <h2>
              <strong>{cloudStaticData.description}</strong>
              <span className="mobile-br">
                <br />{" "}
              </span>{" "}
              {cloudStaticData.Tailored}
            </h2>
          </div>
          <div className="industries-text">
            <p>
             {cloudStaticData.lineData}
            </p>
          </div>
        </div>
      </section>
      <ServiceCard
        sectionTitle={cloudStaticData.title}
        sectionTag="WE PROVIDE"
        data={CloudSolution}
      />
    </>
  );
}
