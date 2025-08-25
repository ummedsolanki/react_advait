import {Consultings, consultingStaticData} from '../data/consulting.data';
import ServiceCard from '../components/ServiceCard';

export default function Consulting() {
  return (
    <>
      <section className="industries-section mobile-image-wrapper-ext-80">
        <div className="video-banner">
          <img
            className="video-bg"
            src={consultingStaticData.video}
            alt="Industry Video"
          />
          <div className="video-overlay">
            <h1 className="industries-title">
             {consultingStaticData.title}
            </h1>
          </div>
        </div>

        <div className="industries-content service-content">
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
