import digital from "../assets/Digital Transformation.jpg";
import city from "../assets/city.jpg";
import Seamless from "../assets/laser.jpg";
import future from "../assets/future.jpg";
import Opportunities from "../assets/Opportunities.jpg";

export default function DigitalTransformation() {
  return (
    <>
      <div className="future-section">
        <div className="content">
          <h2>
            RISE with SAP in a Private Cloud-
            <br />
            Advait Business Solutions Pvt Ltd:
          </h2>
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

        <div className="future-image">
          <img src={digital} alt="Future with SAP" />
        </div>
      </div>

      <div className="transformation-section">
        {/* Left Image */}
        <div className="image-banner">
          <img
            className="banner-img"
            src={city}
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

      <div className="partner-section">
        <div className="partner-image">
          <img src={Seamless} alt="Partner with Advait" />
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
          <img src={future} alt="Future with SAP" />
        </div>
      </div>
    </>
  );
}
