import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import servicesBanner from "../assets/handshake.jpg";

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
];

export default function WeProvide() {
  return (
    <section className="blog-section">
      <div className="about-image-wrapper">
        <img src={servicesBanner} alt="About Us" className="about-image" />
        <div className="about-overlay">
          <h1>SERVICES/BUSINESS SOLUTION</h1>
        </div>
      </div>

      <div className="industries-content">
        <div className="industries-heading">
          <h2>
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
            Our SAP Managed Services ensure the seamless operation, maintenance,
            and optimization of your SAP landscape. From system monitoring and
            performance tuning to user support and patch management, we provide
            end-to-end support tailored to your business needs. With proactive
            management and 24/7 support, we help you reduce downtime, lower IT
            costs, and enhance system performance.
          </p>
        </div>
      </div>

      <div className="section-header">
        <p className="tag">WE PROVIDE</p>
        <h2>
          <strong>Services</strong>
        </h2>
      </div>

      <div className="workedwith-cards">
        {provide.map((service, index) => (
          <div className="workedwith-card" key={index}>
            <div className="workedwith-card-header">
              <h3>{service.title}</h3>
              <div className="arrow-box"></div>
            </div>
            <p>{service.description}</p>
            <div className="workedwith-src">
              <img src={service.src} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
