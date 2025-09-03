// import { aboutMissions, missionStaticData } from '../data/aboutUs.data';

import card1 from '../assets/about1.jpg';
import card2 from '../assets/about3.jpg';
import parse from 'html-react-parser';

const blogSections = [
  {
    title: 'Our Mission',
    // content1: `Transform. Simplify. Accelerate.`,
    content: `At Advait Business Solutions Pvt. Ltd., At WDP Technologies, we have a single goal: Help business owners and executives use the latest technology and the Internet to measurably improve their brand value and ROI.
    <br/><br/>
    Our Mission is to provide the satisfactory result to all our clients by providing them cost-effective and efficient services. We endeavor for a modern website and Mobile application with high search engine rankings and also strive for greater customer and employee satisfaction.
    <br/><br/>
    We give the regular update and do effective communications and to our clients makes us conversant with the needs of our clients who in turn look up to us for effective management and executions of projects of all volumes and complexity.`,
    image: card1,
  },
  {
    title: 'Our Vision',
    // content1: `SAP S/4HANA is one of the most trusted and widely adopted ERP platforms globally offering:`,
    content: `Our Vision is to be the top global technology service provider offering a complete spectrum of IT field and expand your business through a strong online presence. We understand the aspirations of the clients and align our goals and objectives in accordance.`,
    image: card2,
  },

];
export default function MissionSection() {
  return (
    <section className="mission-section about-margin-0-margin">
      {/* <div className="workedwith-cards about-margin">
        {aboutMissions.map((mission, index) => (
          <div className="workedwith-card" key={index}>

            <div className="workedwith-card-header mission-header">
              <p className='mission-title'>{missionStaticData.title}</p>
              <h3>{mission.title}</h3>
              <svg
                className="notch"
                width="200"
                height="45"
                viewBox="0 0 300 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,0
       H120
       A40,40 0 0 1 160,40
       A40,40 0 0 0 240,40
       A40,40 0 0 1 280,0
       H400
       
       H0
       Z" fill="#f4f6f4"></path>
              </svg>
            </div>

            <p>{mission.description}</p>

            <div className="workedwith-src">
              <img src={mission.src} alt={mission.title} />
            </div>
          </div>
        ))}
      </div> */}
      <div className="sap-background">
        <div className="sap-container">

          {blogSections.map((section, idx) => (
            <div
              key={idx}
              className={
                `sap-section ${idx % 2 === 0 ? 'row-normal bg-green' : 'row-reverse'}`
              }
            >
              <div className="sap-text">
                <h2>{section.title}</h2>
                <div className='sap-content'>
                  <p><b>{section.content1}</b></p>
                  <p>{parse(section.content)}</p>
                </div>
              </div>
              <div className="sap-img-wrap">
                <img src={section.image} alt={section.title} className="sap-img" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section >
  );
}
