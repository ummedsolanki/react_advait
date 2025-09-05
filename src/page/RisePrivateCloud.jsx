import privateCloudImage from "../assets/Rise with SAP Private cloud.jpg";
import cyber from "../assets/CYBER.jpg";
import transformationImage from "../assets/transformation.jpg";
import handy from "../assets/handy.jpg";
import digi from "../assets/digi.jpg";

export default function RisePrivateCloud() {
  console.log("transformation", transformationImage);
  return (
    <>
      <div className="future-section">
        <div className="content">
          <h2>
            GROW with SAP - Empowering Growing<br />
            Businesses with Advait Business Solutions:
          </h2>
          <p>
            At <b>Advait Business Solutions Pvt. Ltd.</b>, we understand the unique challenges and opportunities that fast-growing companies face. You need speed, simplicity, and scalability—all without compromising on control or innovation.
          </p>
          <br />
          <p>
            That's where GROW with SAP comes in: a cloud-native ERP solution designed specifically for mid-size and growing enterprises looking to scale efficiently and build a future-ready business foundation. As your trusted SAP partner, Advait helps you unlock the full value of GROW with SAP, tailored to your unique growth journey.
          </p>
          <p>
            That's where RISE with SAP - Private Cloud Edition, enabled by
            Advait, makes the difference.
          </p>
        </div>

        <div className="future-image">
          <img src="/src/assets/grow2.jpg" alt="Future with SAP" />
        </div>
      </div>

      <div className="transformation-section">
        <div className="image-banner">
          <img
            className="banner-img"
            src="/src/assets/grow3.jpg"
            alt="Transformation with Purpose"
          />
        </div>

        <div className="content">
          <h2>What is GROW with SAP?</h2>
          <p>
            GROW with SAP is a ready-to-run cloud ERP solution based on SAP S/4HANA Cloud, Public Edition. It's designed to help businesses go live quickly with industry best practices, embedded AI, and continuous innovation—all in a flexible and scalable cloud environment.
          </p>
          <p>
            It's more than just ERP—it's a growth platform that enables you to innovate fast, stay competitive, and future-proof your operations.
          </p>
        </div>
      </div>
      <div className="unique-section">
        <div className="unique-header">
          <h2>
            Why Choose
            <span className="highlight">
              GROW with SAP? <br />SAP for Your Business?
            </span>
          </h2>
        </div>

        <div className="cards-grid">
          <div className="card">
            <h3>Rapid Time to Value</h3>
            <p>
              Deploy a pre-configured ERP solution built on proven industry practices, helping you go live quickly and start seeing results faster.
            </p>
          </div>

          <div className="card">
            <h3>Scalable Cloud ERP</h3>
            <p>
              Whether you're a local leader or expanding globally, GROW with SAP provides a scalable, secure, and always-updated ERP core to support your journey.
            </p>
          </div>

          <div className="card">
            <h3>Built-in Innovation</h3>
            <p>
              Take advantage of embedded AI, machine learning, and automation tools to streamline operations, reduce manual work, and make smarter decisions.
            </p>
          </div>

          <div className="card">
            <h3>User-Centric Experience</h3>
            <p>
              Intuitive, modern user interfaces make it easy for teams to adopt and get the most from the solution—with minimal training.
            </p>
          </div>
          <div className="card">
            <h3>Continuous Updates</h3>
            <p>
              Stay ahead of the curve with quarterly updates from SAP that bring new features, compliance updates, and performance enhancements—automatically.
            </p>
          </div>
        </div>
      </div>
      <div className="partner-section">
        <div className="partner-image">
          <img src="/src/assets/grow6.jpg" alt="Partner with Advait" />
        </div>

        <div className="partner-content">
          <h2>
            Why Partner <span className="highlight">with Advait</span> for GROW
            with SAP ?
          </h2>
          <p>
            As a trusted SAP partner, Advait Business Solutions offers:
          </p>

          <ul>
            <li>Deep domain knowledge in key industries</li>
            <li>Proven methodologies for rapid cloud ERP deployment</li>
            <li>A dedicated team of SAP-certified consultants</li>
            <li>End-to-end services—from strategy and implementation to training and support</li>
            <li>Ongoing optimization to ensure sustained business value</li>
          </ul>

          <p>With Advait, you're not just implementing ERP—you're investing in a smarter, more agile, and resilient future.</p>
        </div>
      </div>
      <div className="future-section">
        <div className="future-content">
          <h2>
            Who is <b> GROW with SAP For?</b>

          </h2>
          <p>
            <ul>
              <li>Startups and scale-ups aiming to establish a strong digital backbone</li>
              <li>Midsize businesses expanding into new markets or product lines</li>
              <li>Organizations moving from legacy or on-premises systems to the cloud</li>
              <li>Companies looking for rapid ERP deployment with minimal customization</li>
            </ul>

          </p>
        </div>

        <div className="future-image">
          <img src="/src/assets/grow5.jpg" alt="Future with SAP" />
        </div>
      </div>
      <div className="partner-section">
        <div className="partner-image">
          <img src="/src/assets/grow4.jpg" alt="Partner with Advait" />
        </div>

        <div className="partner-content">
          <h2>
            <b>Build. Scale. Lead.</b> <br />
            With GROW and Advait.
          </h2>
          <p>
            At Advait, we help you move beyond operational efficiency to real business transformation. GROW with SAP is your launchpad to an intelligent enterprise—faster, smarter, and ready for tomorrow.          </p>
        </div>
      </div>
    </>
  );
}
