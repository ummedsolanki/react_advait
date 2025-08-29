import privateCloudImage from "../assets/Rise with SAP Private cloud.jpg";
import cyber from "../assets/CYBER.jpg";
import transformationImage from "../assets/transformation.jpg";
import handy from "../assets/handy.jpg";
import digi from "../assets/digi.jpg";

export default function RisePrivateCloud() {
  return (
    <>
      <div className="video-banner mobile-image-wrapper-ext-80">
        <img className="video-bg" src={privateCloudImage} />
        <div className="video-overlay">
          <h1 className="industries-title">Rise with SAP Private cloud</h1>
        </div>
      </div>
      <div className="private-cloud-section">
        {/* Left Content */}
        <div className="content">
          <h2>RISE with SAP in a Private Cloud-</h2>
          <h2>Advait Business Solutions Pvt Ltd:</h2>
          <p>
            Accelerate your journey to an intelligent enterprise with RISE with
            SAP in a Private Cloud.
          </p>
          <p>
            At <b>Advait Business Solutions</b>, we believe that transformation
            should be meaningful, measurable, and sustainable. While enterprises
            understand the vast potential of SAP to drive innovation, the real
            challenge lies in unlocking tangible outcomes—ones that create
            lasting value, streamline operations, and power next-generation
            business models.
          </p>
          <p>
            That's where RISE with SAP - Private Cloud Edition, enabled by
            Advait, makes the difference.
          </p>
        </div>

        {/* Right Content */}
        <div className="video-banner">
          <img className="video-bg" src={cyber} alt="Private Cloud" />
        </div>
      </div>
      <div className="transformation-section">
        {/* Left Image */}
        <div className="image-banner">
          <img
            className="banner-img"
            src={transformationImage}
            alt="Transformation with Purpose"
          />
        </div>

        {/* Right Text */}
        <div className="content">
          <h2>Transformation with Purpose</h2>
          <p>
            SAP's core vision has always been to help businesses win through
            innovation. RISE with SAP is a landmark offering designed to
            accelerate this vision by helping enterprises rethink their approach
            to digital transformation—not by replacing systems, but by
            realigning them for agility, intelligence, and scale.
          </p>
          <p>
            A robust ERP core is the foundation of digital resilience. With RISE
            with SAP in a Private Cloud, organizations can retain control,
            customization, and compliance, while embracing the flexibility and
            speed of the cloud.
          </p>
        </div>
      </div>
      <div className="unique-section">
        <div className="unique-header">
          <h2>
            What Makes{" "}
            <span className="highlight">
              RISE with SAP -<br /> Private Cloud
            </span>{" "}
            Unique with <span className="highlight">Advait</span>?
          </h2>
        </div>

        <div className="cards-grid">
          <div className="card">
            <h3>Tailored Deployment, Total Control</h3>
            <p>
              Deploy SAP S/4HANA in a private cloud environment that suits your
              business and compliance needs—whether hosted on your preferred
              hyperscale or SAP's data centre—with total flexibility.
            </p>
          </div>

          <div className="card">
            <h3>One Offering, Complete Transformation</h3>
            <p>
              RISE with SAP is not just a technical migration. It's a business
              transformation-as-a-service offering that includes software,
              infrastructure, migration tools, business process intelligence,
              and analytic
            </p>
          </div>

          <div className="card">
            <h3>Preserve Investments, Embrace Innovation</h3>
            <p>
              Leverage your existing SAP customizations while gaining access to
              new-age technologies like AI, ML, RPA, and predictive
              analytics—embedded within SAP S/4HANA.
            </p>
          </div>

          <div className="card">
            <h3>Compliance & Data Sovereignty</h3>
            <p>
              Ensure your operations are aligned with industry and geographic
              regulations with the private cloud's secure, dedicated
              infrastructure.
            </p>
          </div>
          <div className="card">
            <h3>Business Outcomes, Not Just IT Upgrades</h3>
            <p>
              With Advait's deep domain expertise, we help you align SAP
              transformation with real business outcomes—be it improved supply
              chain visibility, faster financial closing, or enhanced customer
              experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="partner-section">
        <div className="partner-image">
          <img src={handy} alt="Partner with Advait" />
        </div>

        <div className="partner-content">
          <h2>
            Why Partner <span className="highlight">with Advait</span> for RISE
            with SAP - <span className="highlight">Private Cloud</span>?
          </h2>

          <ul>
            <li>
              Certified SAP Partner with a proven track record in enterprise
              transformation
            </li>
            <li>
              Expert-led SAP S/4HANA migrations and greenfield implementations
            </li>
            <li>
              Deep industry knowledge across manufacturing, retail, services,
              and more
            </li>
            <li>Seamless integration into your existing IT landscape</li>
            <li>
              Dedicated support across the transformation lifecycle—from
              planning to post-go-live optimization
            </li>
          </ul>
        </div>
      </div>
      <div className="future-section">
        <div className="future-content">
          <h2>
            The <span className="highlight">Future is Intelligent.</span>
            <br />
            The <span className="highlight">Platform is RISE.</span>
            <br />
            The <span className="highlight">Partner is Advait.</span>
          </h2>
          <p>
            RISE with SAP Private Cloud is the bridge between where you are
            today and the intelligent enterprise you aspire to become. With
            Advait Business Solutions as your strategic partner, you're not just
            upgrading your ERP—you're transforming your business for tomorrow.
          </p>
        </div>

        <div className="future-image">
          <img src={digi} alt="Future with SAP" />
        </div>
      </div>
    </>
  );
}
