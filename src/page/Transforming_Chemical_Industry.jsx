import chemical from "../assets/Chemical.jpg";
import lab from "../assets/lab.jpg";
import operations from "../assets/operations.jpg";
import sustainability from "../assets/sustain.jpg";
import challenges from "../assets/challenges.jpg";
export default function TransformingChemicalIndustry() {
  return (
    <>
      {/* Banner with Image */}
      <div className="video-banner mobile-image-wrapper-ext-80">
        <img className="video-bg" src={chemical} alt="Chemical Industry" />
        <div className="video-overlay">
          <h1 className="industries-title">Transforming Chemical Industry</h1>
        </div>
      </div>

      {/* Text Content Section */}
      <section className="chemical-industry">
        <h2>
          Transforming the Chemical Industry: SAP Solutions Driving Efficiency
          and Sustainable Growth
        </h2>
        <p>
          The chemical industry stands at a critical juncture — navigating
          increasing regulatory pressures, evolving customer demands, supply
          chain volatility, and growing calls for sustainability. In this
          complex and fast-changing environment, digital transformation has
          become a strategic imperative rather than a choice. At the heart of
          this transformation is SAP, offering industry-specific solutions that
          drive operational efficiency, innovation, and sustainable growth.
        </p>
        <p>
          As organizations seek to modernize and future-proof their operations,
          SAP remains a trusted technology partner, empowering chemical
          companies to lead in a digitally connected world.
        </p>
      </section>
      <div className="digital-transformation">
        {/* Left Side Content */}
        <div className="content">
          <h2>Embracing Digital Transformation in Chemicals</h2>
          <p>
            Digital technologies are revolutionizing how the chemical industry
            operates — from R&amp;D and manufacturing to supply chain and
            customer engagement. With tools like AI, IoT, predictive analytics,
            and cloud computing, businesses are now able to unlock deeper
            insights, streamline complex processes, and accelerate
            time-to-market.
          </p>
          <p>
            For chemical manufacturers, the promise of digital transformation
            lies not only in productivity gains but also in the ability to
            create more agile, resilient, and customer-centric business models.
            SAP is uniquely positioned to support this shift with an integrated,
            end-to-end digital platform.
          </p>

          <h2>SAP: Catalyst for Innovation in Chemicals</h2>
          <p>
            SAP offers a comprehensive suite of solutions purpose-built for the
            chemical industry, enabling organizations to innovate across the
            entire product lifecycle. From Product Lifecycle Management (PLM) to
            Asset Performance Management and Predictive Maintenance, SAP
            empowers companies to:
          </p>

          <ul>
            <li>Identify emerging market trends</li>
            <li>Accelerate product development</li>
            <li>Collaborate seamlessly across departments</li>
            <li>Launch high-quality, compliant products faster</li>
          </ul>

          <p>
            These capabilities are particularly critical in an industry where
            innovation cycles are long, and regulatory requirements are
            stringent.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="image">
          <img src={lab} alt="Digital Transformation in Chemicals" />
        </div>
      </div>
      <div className="digital-transformation reverse">
        {/* Left Side Image */}
        <div className="image">
          <img src={operations} alt="Streamlining Operations in Chemicals" />
        </div>

        {/* Right Side Content */}
        <div className="content">
          <h2>Streamlining Operations for Maximum Efficiency</h2>
          <p>
            Efficiency is non-negotiable in the chemicals sector, where margins
            can be razor-thin and operational complexity is high. SAP helps
            companies:
          </p>

          <ul>
            <li>Integrate siloed systems</li>
            <li>Automate core business processes</li>
            <li>Enhance visibility across plants and global operations</li>
            <li>Eliminate redundancies and reduce operational waste</li>
          </ul>

          <p>
            Through SAP S/4HANA, chemical manufacturers gain real-time insights
            and decision-making power that drives agility and cost optimization.
          </p>

          <h2>Optimizing Supply Chain Performance</h2>
          <p>
            Supply chain reliability is a cornerstone of success in the chemical
            industry. SAP's intelligent supply chain solutions help companies:
          </p>

          <ul>
            <li>Forecast demand with greater accuracy</li>
            <li>Streamline procurement and logistics</li>
            <li>Improve supplier collaboration</li>
            <li>Manage inventory more efficiently</li>
          </ul>

          <p>
            Using real-time data and predictive analytics, SAP enables chemical
            companies to build more responsive, resilient supply chains that
            mitigate risks and deliver consistent value to customers.
          </p>
        </div>
      </div>
      <div className="digital-transformations">
        {/* Left Side Content */}
        <div className="contents">
          <h2>Driving Sustainability and Regulatory Compliance</h2>
          <p>
            With increasing emphasis on sustainability, chemical companies are
            under pressure to reduce their environmental footprint and comply
            with global regulations. SAP supports this by offering tools to:
          </p>

          <ul>
            <li>Track and manage emissions and waste</li>
            <li>Ensure end-to-end regulatory compliance</li>
            <li>Increase transparency into material sourcing and usage</li>
            <li>
              Align operations with ESG (Environmental, Social, Governance)
              goals
            </li>
          </ul>

          <p>
            Solutions like SAP EHS (Environment, Health &amp; Safety) and
            Product Compliance help organizations turn sustainability into a
            competitive advantage.
          </p>

          <h2>Leveraging Cloud and Digital Platforms</h2>
          <p>
            The transition to cloud and digital platforms is reshaping how
            chemical companies operate and innovate. With SAP S/4HANA Cloud and
            SAP Business Technology Platform, organizations benefit from:
          </p>

          <ul>
            <li>Scalable infrastructure for future growth</li>
            <li>Enhanced system agility and real-time updates</li>
            <li>Lower total cost of ownership</li>
            <li>Faster innovation cycles</li>
          </ul>

          <p>
            These platforms provide a solid foundation for building next-gen
            digital capabilities such as AI-powered analytics, digital twins,
            and smart manufacturing.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="images">
          <img
            src={sustainability}
            alt="Sustainability and Digital Platforms in Chemicals"
          />
        </div>
      </div>
      <div className="transformation-challenges">
        {/* Left Side Image */}
        <div className="image">
          <img src={challenges} alt="Overcoming Transformation Challenges" />
        </div>

        {/* Right Side Content */}
        <div className="content">
          <h2>Overcoming Transformation Challenges</h2>
          <p>
            Despite the clear benefits, digital transformation in chemicals
            comes with challenges: data integration, legacy system migration,
            cybersecurity, and the need for skilled talent. However, SAP
            provides robust support, domain-specific best practices, and a
            partner ecosystem that helps chemical companies navigate these
            complexities with confidence.
          </p>

          <p>
            With a deep understanding of the industry's unique demands, SAP
            delivers not just software, but strategic enablement for long-term
            success.
          </p>

          <p>
            Absolutely! Here's a well-structured, professionally crafted
            expert-level blog based on your content, designed to inform and
            engage business and IT decision-makers on the SAP Business
            Technology Platform (SAP BTP):
          </p>
        </div>
      </div>
    </>
  );
}
