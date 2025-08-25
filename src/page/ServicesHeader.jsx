import card1 from "../assets/Rise with SAP Private cloud.png";
import card2 from "../assets/Rise with SAP Public cloud.png";
import card3 from "../assets/Grow with Sap.png";
import card4 from "../assets/SAP S4HANA.png";
import card5 from "../assets/SAP CX.png";
import card6 from "../assets/SAP BTP.png";
import card7 from "../assets/Success Factor.png";
import card8 from "../assets/SAP ECC.png";
import card9 from "../assets/Analytic Cloud.png";
import card10 from "../assets/SAP Fiori & UX.png";
import card11 from "../assets/SAP Development.png";
import card12 from "../assets/Mobility.png";
import card13 from "../assets/Managed Services.png";
import card14 from "../assets/Big Data.png";
import servicesBanner from "../assets/SERVICES.png";
import ServiceCard from "../components/ServiceCard";
const provide = [
  {
    title: "Digital Transformation",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card1,
  },
  {
    title: "SAP Business Solution",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card2,
  },
  {
    title: "SAP BASIS & Security",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card3,
  },
  {
    title: "Digital Transformation",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card4,
  },
  {
    title: "SAP Business Solution",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card5,
  },
  {
    title: "SAP BASIS & Security",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card6,
  },
  {
    title: "Digital Transformation",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card7,
  },
  {
    title: "SAP Business Solution",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card8,
  },
  {
    title: "SAP BASIS & Security",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card9,
  },
  {
    title: "Digital Transformation",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card10,
  },
  {
    title: "SAP Business Solution",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card11,
  },
  {
    title: "SAP BASIS & Security",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card12,
  },
  {
    title: "SAP Business Solution",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card13,
  },
  {
    title: "SAP BASIS & Security",
    description:
      "In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative",
    src: card14,
  },
];

export default function WeProvide() {
  return (
    <>
      <section className="blog-section header-margin">
        <div className="about-image-wrapper">
          <img src={servicesBanner} alt="About Us" className="about-image" />
          <div className="about-overlay">
            <h1>SERVICES/BUSINESS SOLUTION</h1>
          </div>
        </div>

        <div className="industries-content service-content">
          <div className="industries-heading">
            <h2 className="Service-Header">
              <strong>
                Innovative IT Solutions
                <span className="mobile-br">
                  <br />
                </span>{" "}
                Tailored
              </strong>{" "}
              to Your Business
              <span className="mobile-br">
                <br />{" "}
              </span>{" "}
              Needs.
            </h2>
          </div>
          <div className="industries-text">
            <p>
              Our SAP Managed Services ensure the seamless operation,
              maintenance, and optimization of your SAP landscape. From system
              monitoring and performance tuning to user support and patch
              management, we provide end-to-end support tailored to your
              business needs. With proactive management and 24/7 support, we
              help you reduce downtime, lower IT costs, and enhance system
              performance.
            </p>
          </div>
        </div>
      </section>

      <ServiceCard
        sectionTitle="Services"
        sectionTag="WE PROVIDE"
        data={provide}
      />
    </>
  );
}
