import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

// Import all images
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import digital from "../assets/Digital Transformation.jpg";
import city from "../assets/city.jpg";
import Seamless from "../assets/laser.jpg";
import future from "../assets/future.jpg";
import Opportunities from "../assets/Opportunities.jpg";
import privateCloudImage from "../assets/Rise with SAP Private cloud.jpg";
import cyber from "../assets/CYBER.jpg";
import transformationImage from "../assets/transformation.jpg";
import handy from "../assets/handy.jpg";
import digi from "../assets/digi.jpg";
import chemical from "../assets/Chemical.jpg";
import lab from "../assets/lab.jpg";
import operations from "../assets/operations.jpg";
import sustainability from "../assets/sustain.jpg";
import challenges from "../assets/challenges.jpg";

const blogSections = [
  {
    title: "Revamp Your ERP Strategy with SAP S/4HANA: ",
    content1: `Transform. Simplify. Accelerate.`,
    content: `At Advait Business Solutions Pvt. Ltd., we help businesses unlock new levels of agility and innovation with SAP S/4HANA—SAP’s next-generation intelligent ERP suite. Built on an advanced in-memory platform, SAP S/4HANA delivers unmatched performance, real-time analytics, and streamlined processes to future-proof your digital core. <br/><br/>
Whether you're planning a greenfield implementation or a brownfield migration from SAP ECC/R/3, Advait is your trusted partner in executing a seamless, value-driven transformation. `,
    image: card1,
  },
  {
    title: "Why SAP S/4HANA? ",
    content1: `SAP S/4HANA is one of the most trusted and widely adopted ERP platforms globally offering:`,
    content: `Modern, future-ready architecture<br/>Real-time analytics & intelligent automation <br/>Streamlined processes and simplified IT landscapes <br/>Rapid decision-making powered by live business data<br/>Flexible deployment options—on-premises, cloud, or hybrid <br/>A clear and scalable roadmap from SAP ECC to S/4HANA`,
    image: card2,
  },
  {
    title: "How Advait Enables SAP S/4HANA Success",
    content1: `As a growing force in SAP consulting and ERP transformation, Advait Business Solutions brings deep domain experience, industry-specific insights, and robust delivery capabilities to every S/4HANA engagement.`,
    content: `With over 100+ successful SAP project experiences across our team, we enable organizations to: <br/>
Reimagine business processes<br/>
Minimize disruption through proven migration strategies<br/>
Optimize ERP investments through smart, phased rollouts<br/>
Ensure rapid value realization through our SAP S/4HANA accelerators`,
    image: card1,
  },
  {
    title: "Our SAP S/4HANA Expertise Includes:",
    content1: `Greenfield & Brownfield Implementations`,
    content: `SAP ECC to S/4HANA Migrations<br/>
On-Premises, Private Cloud, and Public Cloud Deployments<br/>
Industry-specific Best Practices & Templates<br/>
custom development & integration services<br/>
post-go-live optimization & support`,
    image: card2,
  },
  {
    title: "Built for the Future, Delivered by Advait",
    content1: `Our dedicated SAP S/4HANA Centre of Excellence (CoE) has developed a suite of tools, accelerators, and migration frameworks to ensure:`,
    content: `Reduced implementation timelines<br/>
Minimal business disruption<br/>
High adoption across business units<br/>
Scalable and secure ERP landscape`,
    image: card2,
  },
  {
    title: "Built for the Future, Delivered by Advait",
    content1: `Begin Your S/4HANA Journey with Confidence`,
    content: `No matter where you are on your transformation journey, Advait Business Solutions is here to help you drive measurable business outcomes with SAP S/4HANA.`,
    image: card2,
  },
];
const digitalSections = [
  {
    title: "Silver Strategies for Digital Success: Partnering with SAP in Transformation",
    content: `In today's fast-paced digital landscape, organizations are under increasing pressure to innovate, streamline operations, and stay competitive. At the heart of this transformation is SAP (Systems, Applications, and Products in Data Processing), a global leader in enterprise software solutions. As a Silver Partner, we've had the privilege of seeing firsthand how SAP empowers businesses across industries to thrive in the digital age.`,
    image: city,
  },
  {
    title: "Understanding Digital Transformation",
    content: `Digital transformation is more than just a buzzword — it's a strategic imperative. It involves integrating digital technologies into every aspect of a business, fundamentally reshaping how organizations operate and deliver value to customers. From cloud computing and artificial intelligence to data analytics and automation, the digital era offers a vast toolbox of technologies that can drive meaningful change.`,
    image: city,
  },
  {
    title: "The SAP Advantage",
    content: `SAP stands as a cornerstone of digital transformation thanks to its comprehensive suite of enterprise solutions. Whether it's Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), or advanced analytics, SAP's integrated platform enables businesses to build a resilient and scalable digital core.<br/><br/>
As a Silver Partner, we've seen how SAP's flexible technology stack allows organizations to optimize processes, improve productivity, and innovate with confidence.`,
    image: city,
  },
  {
    title: "Seamless Integration and Interoperability",
    content: `One of SAP's standout strengths lies in its ability to unify disparate systems. In many organizations, digital transformation is challenged by siloed platforms and fragmented data. SAP's open architecture and API-driven ecosystem enable seamless integration, breaking down these silos and creating a connected, collaborative environment.`,
    image: Seamless,
  },
  {
    title: "Data-Driven Decision Making",
    content: `In today's digital economy, data is one of the most valuable assets a business can have. SAP excels at turning raw data into actionable insights through advanced analytics and business intelligence tools. We've seen firsthand how organizations can make smarter, faster decisions by leveraging SAP's real-time data capabilities — driving innovation and optimizing operations.`,
    image: Seamless,
  },
  {
    title: "Scalability and Agility with Cloud Solutions",
    content: `Successful digital transformation requires solutions that can scale with growth and adapt to change. SAP's cloud-based offerings deliver the scalability and flexibility businesses need — whether they're startups, scaling midsize companies, or large global enterprises. These cloud solutions allow businesses to respond rapidly to evolving market dynamics while supporting long-term innovation.`,
    image: future,
  },
  {
    title: "Enhancing Customer Experience",
    content: `Customer experience is now a critical differentiator in every industry. SAP helps businesses take a customer-first approach by delivering 360-degree visibility into customer journeys through its CRM and customer experience tools. We've helped clients implement SAP solutions that streamline customer interactions and create personalized, data-driven engagements — leading to stronger relationships and higher satisfaction.`,
    image: future,
  },
  {
    title: "Challenges and Opportunities in Transformation",
    content: `While SAP offers a powerful platform for transformation, the journey isn't without its challenges. Common obstacles include integration complexity, organizational change management, and the need for skilled resources. However, these challenges also create opportunities for partners like us to deliver real value.<br/><br/>
As a Silver Partner, we provide expert guidance, implementation support, and customized solutions to help clients navigate their transformation journey smoothly and successfully.`,
    image: Opportunities,
  },
  {
    title: "The Role of a Silver Partner",
    content: `Our role goes beyond software implementation. As strategic advisors, we work closely with clients to understand their unique needs and design tailored SAP solutions that align with their business goals. From system integration and data migration to user training and ongoing support, our partnership with SAP enables us to help organizations unlock their full digital potential.`,
    image: Opportunities,
  },
];

function Sap() {
  return (
    <>
      <div className="about-image-wrapper mobile-image-wrapper-ext-80 header-margin">
        <img src={card1} alt="About Us" className="about-image" />
        <div className="about-overlay">
          <h1>SAP S/4 HANA</h1>
        </div>
      </div>
      <div className="sap-background">
        <div className="sap-container">
          {blogSections.map((section, idx) => (
            <div
              key={idx}
              className={`sap-section ${
                idx % 2 === 0 ? "row-normal bg-green" : "row-reverse bg-white"
              }`}
            >
              <div className="sap-text">
                <h2>{section.title}</h2>
                <div className="sap-content">
                  <p>
                    <b>{section.content1}</b>
                  </p>
                  <p>{parse(section.content)}</p>
                </div>
              </div>
              <div className="sap-img-wrap">
                <img
                  src={section.image}
                  alt={section.title}
                  className="sap-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DigitalTransformation() {
  return (
    <>
      <div className="video-banner mobile-image-wrapper-ext-80">
        <img className="video-bg" src={digital} alt="Digital Transformation" />
        <div className="video-overlay">
          <h1 className="industries-title">DIGITAL TRANSFORMATION</h1>
        </div>
      </div>
      <div className="silver-strategies">
        <h2>
          Silver Strategies for Digital Success: Partnering with SAP in
          Transformation
        </h2>
        <p>
          In today's fast-paced digital landscape, organizations are under
          increasing pressure to innovate, streamline operations, and stay
          competitive. At the heart of this transformation is SAP (Systems,
          Applications, and Products in Data Processing), a global leader in
          enterprise software solutions. As a Silver Partner, we've had the
          privilege of seeing firsthand how SAP empowers businesses across
          industries to thrive in the digital age.
        </p>
      </div>
      <div className="digital-transformation">
        <div className="content">
          <h2>Understanding Digital Transformation</h2>
          <p>
            Digital transformation is more than just a buzzword — it's a
            strategic imperative. It involves integrating digital technologies
            into every aspect of a business, fundamentally reshaping how
            organizations operate and deliver value to customers. From cloud
            computing and artificial intelligence to data analytics and
            automation, the digital era offers a vast toolbox of technologies
            that can drive meaningful change.
          </p>

          <h2>The SAP Advantage</h2>
          <p>
            SAP stands as a cornerstone of digital transformation thanks to its
            comprehensive suite of enterprise solutions. Whether it's Enterprise
            Resource Planning (ERP), Customer Relationship Management (CRM), or
            advanced analytics, SAP's integrated platform enables businesses to
            build a resilient and scalable digital core.
          </p>
          <p>
            As a Silver Partner, we've seen how SAP's flexible technology stack
            allows organizations to optimize processes, improve productivity,
            and innovate with confidence.
          </p>
        </div>

        <div className="image">
          <img src={city} alt="Digital Transformation" />
        </div>
      </div>
      <div className="integration-decision">
        <div className="image">
          <img src={Seamless} alt="Seamless Integration" />
        </div>

        <div className="content">
          <h2>Seamless Integration and Interoperability</h2>
          <p>
            One of SAP's standout strengths lies in its ability to unify
            disparate systems. In many organizations, digital transformation is
            challenged by siloed platforms and fragmented data. SAP's open
            architecture and API-driven ecosystem enable seamless integration,
            breaking down these silos and creating a connected, collaborative
            environment.
          </p>

          <h2>Data-Driven Decision Making</h2>
          <p>
            In today's digital economy, data is one of the most valuable assets
            a business can have. SAP excels at turning raw data into actionable
            insights through advanced analytics and business intelligence tools.
            We've seen firsthand how organizations can make smarter, faster
            decisions by leveraging SAP's real-time data capabilities — driving
            innovation and optimizing operations.
          </p>
        </div>
      </div>
      <div className="cloud-customer">
        <div className="content">
          <h2>Scalability and Agility with Cloud Solutions</h2>
          <p>
            Successful digital transformation requires solutions that can scale
            with growth and adapt to change. SAP's cloud-based offerings deliver
            the scalability and flexibility businesses need — whether they're
            startups, scaling midsize companies, or large global enterprises.
            These cloud solutions allow businesses to respond rapidly to
            evolving market dynamics while supporting long-term innovation.
          </p>

          <h2>Enhancing Customer Experience</h2>
          <p>
            Customer experience is now a critical differentiator in every
            industry. SAP helps businesses take a customer-first approach by
            delivering 360-degree visibility into customer journeys through its
            CRM and customer experience tools. We've helped clients implement
            SAP solutions that streamline customer interactions and create
            personalized, data-driven engagements — leading to stronger
            relationships and higher satisfaction.
          </p>
        </div>

        <div className="image">
          <img src={future} alt="Cloud Solutions and Customer Experience" />
        </div>
      </div>
      <div className="transformation-partner">
        <div className="image">
          <img
            src={Opportunities}
            alt="Challenges and Opportunities in Transformation"
          />
        </div>

        <div className="content">
          <h2>Challenges and Opportunities in Transformation</h2>
          <p>
            While SAP offers a powerful platform for transformation, the journey
            isn't without its challenges. Common obstacles include integration
            complexity, organizational change management, and the need for
            skilled resources. However, these challenges also create
            opportunities for partners like us to deliver real value.
          </p>
          <p>
            As a Silver Partner, we provide expert guidance, implementation
            support, and customized solutions to help clients navigate their
            transformation journey smoothly and successfully.
          </p>

          <h2>The Role of a Silver Partner</h2>
          <p>
            Our role goes beyond software implementation. As strategic advisors,
            we work closely with clients to understand their unique needs and
            design tailored SAP solutions that align with their business goals.
            From system integration and data migration to user training and
            ongoing support, our partnership with SAP enables us to help
            organizations unlock their full digital potential.
          </p>
        </div>
      </div>
    </>
  );
}

function RisePrivateCloud() {
  return (
    <>
      <div className="video-banner mobile-image-wrapper-ext-80">
        <img
          className="video-bg"
          src={privateCloudImage}
          alt="Rise with SAP Private cloud"
        />
        <div className="video-overlay">
          <h1 className="industries-title">Rise with SAP Private cloud</h1>
        </div>
      </div>
      <div className="private-cloud-section">
        {/* Left Content */}
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

        {/* Right Content */}
        <div className="video-banner">
          <img className="video-bgs" src={cyber} alt="Private Cloud" />
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

function TransformingChemicalIndustry() {
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

// Main component that combines all blog components
function AllBlogData() {
  const { slug } = useParams();

  const pages = {
    "sap-business-solutions": <Sap />,
    "digital-transformation": <DigitalTransformation />,
    "rise-private-cloud": <RisePrivateCloud />,
    "transforming-chemical-industry": <TransformingChemicalIndustry />,
  };

  return (
    <div className="all-blog-container">
      {pages[slug] || <h2>404 - Blog Not Found</h2>}
    </div>
  );
}

export default AllBlogData;
