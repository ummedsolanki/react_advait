import React from 'react';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import parse from 'html-react-parser';

const blogSections = [
    {
        title: 'Revamp Your ERP Strategy with SAP S/4HANA: ',
        content1: `Transform. Simplify. Accelerate.`,
        content: `At Advait Business Solutions Pvt. Ltd., we help businesses unlock new levels of agility and innovation with SAP S/4HANA—SAP’s next-generation intelligent ERP suite. Built on an advanced in-memory platform, SAP S/4HANA delivers unmatched performance, real-time analytics, and streamlined processes to future-proof your digital core. <br/><br/>
Whether you're planning a greenfield implementation or a brownfield migration from SAP ECC/R/3, Advait is your trusted partner in executing a seamless, value-driven transformation. `,
        image: card1,
    },
    {
        title: 'Why SAP S/4HANA? ',
        content1: `SAP S/4HANA is one of the most trusted and widely adopted ERP platforms globally offering:`,
        content: `Modern, future-ready architecture<br/>Real-time analytics & intelligent automation <br/>Streamlined processes and simplified IT landscapes <br/>Rapid decision-making powered by live business data<br/>Flexible deployment options—on-premises, cloud, or hybrid <br/>A clear and scalable roadmap from SAP ECC to S/4HANA`,
        image: card2,
    },
    {
        title: 'How Advait Enables SAP S/4HANA Success',
        content1: `As a growing force in SAP consulting and ERP transformation, Advait Business Solutions brings deep domain experience, industry-specific insights, and robust delivery capabilities to every S/4HANA engagement.`,
        content: `With over 100+ successful SAP project experiences across our team, we enable organizations to: <br/>
Reimagine business processes<br/>
Minimize disruption through proven migration strategies<br/>
Optimize ERP investments through smart, phased rollouts<br/>
Ensure rapid value realization through our SAP S/4HANA accelerators`,
        image: card1,
    },
    {
        title: 'Our SAP S/4HANA Expertise Includes:',
        content1: `Greenfield & Brownfield Implementations`,
        content: `SAP ECC to S/4HANA Migrations<br/>
On-Premises, Private Cloud, and Public Cloud Deployments<br/>
Industry-specific Best Practices & Templates<br/>
custom development & integration services<br/>
post-go-live optimization & support`,
        image: card2,
    },
    {
        title: 'Built for the Future, Delivered by Advait',
        content1: `Our dedicated SAP S/4HANA Centre of Excellence (CoE) has developed a suite of tools, accelerators, and migration frameworks to ensure:`,
        content: `Reduced implementation timelines<br/>
Minimal business disruption<br/>
High adoption across business units<br/>
Scalable and secure ERP landscape`,
        image: card2,
    },
    {
        title: 'Built for the Future, Delivered by Advait',
        content1: `Begin Your S/4HANA Journey with Confidence`,
        content: `No matter where you are on your transformation journey, Advait Business Solutions is here to help you drive measurable business outcomes with SAP S/4HANA.`,
        image: card2,
    },
];
// function Sap() {
//     return (
//         <>
//             {/* <div className="hero mobile-image-wrapper-ext-80">
//                 <img src={card1} alt="About Us" className="hero-video" />
//                 <div className="hero-overlay">
//                     <h1>SAP S/4 HANA</h1>
//                 </div>
//             </div> */}
//             <div className="video-banner mobile-image-wrapper-ext-80">
//                 <img className="video-bg" src={card1} alt="Digital Transformation" />
//                 <div className="video-overlay">
//                     <h1 className="industries-title">SAP S/4 HANA</h1>
//                 </div>
//             </div>
//             <div className="sap-background">
//                 <div className="sap-container">

//                     <div
//                         key={idx}
//                         className={
//                             `sap-section ${idx % 2 === 0 ? 'row-normal bg-green' : 'row-reverse bg-white'}`
//                         }
//                     >
//                         <div className="sap-text">
//                             <h2>Our SAP S/4HANA Expertise Includes</h2>
//                             <div className='sap-content'>
//                                 <p>SAP ECC to S/4HANA Migrations<br />
//                                     On-Premises, Private Cloud, and Public Cloud Deployments<br />
//                                     Industry-specific Best Practices & Templates<br />
//                                     custom development & integration services<br />
//                                     post-go-live optimization & support`,</p>
//                                 <p>SAP ECC to S/4HANA Migrations<br />
//                                     On-Premises, Private Cloud, and Public Cloud Deployments<br />
//                                     Industry-specific Best Practices & Templates<br />
//                                     custom development & integration services<br />
//                                     post-go-live optimization & support</p>
//                             </div>
//                         </div>
//                         <div className="sap-text">
//                             <h2>Our SAP S/4HANA Expertise Includes</h2>
//                             <div className='sap-content'>
//                                 <p>SAP ECC to S/4HANA Migrations<br />
//                                     On-Premises, Private Cloud, and Public Cloud Deployments<br />
//                                     Industry-specific Best Practices & Templates<br />
//                                     custom development & integration services<br />
//                                     post-go-live optimization & support`,</p>
//                                 <p>SAP ECC to S/4HANA Migrations<br />
//                                     On-Premises, Private Cloud, and Public Cloud Deployments<br />
//                                     Industry-specific Best Practices & Templates<br />
//                                     custom development & integration services<br />
//                                     post-go-live optimization & support</p>
//                             </div>
//                         </div>
//                         <div className="sap-img-wrap">
//                             <img src={card1} alt="" className="sap-img" />
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </>
//     );
// }
function Sap() {
    return (
        <>
            {/*-----sap-hana-----*/}
            {/* <div className="sap-background">
                <div className="sap-container">

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>Revamp Your ERP Strategy with SAP S /4HANA:</h2>
                            <div className="sap-content">
                                <p><b>Transform. Simplify. Accelerate.</b></p>
                                <p>
                                    At Advait Business Solutions Pvt. Ltd., we help businesses unlock new levels of agility and innovation with SAP S/4HANA—SAP’s next-generation intelligent ERP suite. Built on an advanced in-memory platform, SAP S/4HANA delivers unmatched performance, real-time analytics, and streamlined processes to future-proof your digital core.
                                    <br />
                                    <br />
                                    Whether you're planning a greenfield implementation or a brownfield migration from SAP ECC/R/3, Advait is your trusted partner in executing a seamless, value-driven transformation.
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/sap2.jpg" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-reverse bg-white">
                        <div className="sap-text">
                            <h2>Why SAP S/4HANA?</h2>
                            <div className="sap-content">
                                <p><b>SAP S/4HANA is one of the most trusted and widely adopted ERP platforms globally offering:</b></p>
                                <p>
                                    <li>Modern, future-ready architecture</li>
                                    <li>Real-time analytics & intelligent automation</li>
                                    <li>Streamlined processes and simplified IT landscapes
                                    </li>
                                    <li>Rapid decision-making powered by live business data
                                    </li>
                                    <li>Flexible deployment options—on-premises, cloud, or hybrid
                                    </li>
                                    <li>A clear and scalable roadmap from SAP ECC to S/4HANA
                                    </li>

                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/sap3.jpg" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>How Advait Enables SAP S/4HANA Success</h2>
                            <div className="sap-content">
                                <p>As a growing force in SAP consulting and ERP transformation, Advait Business Solutions brings deep domain experience, industry-specific insights, and robust delivery capabilities to every S/4HANA engagement.</p>
                                <br />
                                <p>
                                    With over 100+ successful SAP project experiences across our team, we enable organizations to:
                                    <br />
                                    <ul>
                                        <li>Reimagine business processes</li>
                                        <li>Minimize disruption through proven migration strategies</li>
                                        <li>Optimize ERP investments through smart, phased rollouts</li>
                                        <li>Ensure rapid value realization through our SAP S/4HANA accelerators</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/sap4.jpg" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-reverse bg-white">
                        <div className="sap-text">
                            <h2>Our SAP S/4HANA Expertise Includes:</h2>
                            <div className="sap-content">
                                <p>Greenfield & Brownfield Implementations</p>
                                <p>
                                    <ul>
                                        <li>SAP ECC to S/4HANA Migrations</li>
                                        <li>On-Premises, Private Cloud, and Public Cloud Deployments</li>
                                        <li>Industry-specific Best Practices & Templates</li>
                                        <li>Custom Development & Integration Services</li>
                                        <li>Post-Go-Live Optimization & Support</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/sap5.jpg" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>Built for the Future, Delivered by Advait</h2>
                            <div className="sap-content">
                                <p>Our dedicated SAP S/4HANA Centre of Excellence (CoE) has developed a suite of tools, accelerators, and migration frameworks to ensure:</p>
                                <br />
                                <p>
                                    <ul>
                                        <li>Reduced implementation timelines</li>
                                        <li>Minimal business disruption</li>
                                        <li>High adoption across business units</li>
                                        <li>Scalable and secure ERP landscape</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/sap6.jpg" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-reverse bg-white">
                        <div className="sap-text">
                            <h2>Begin Your S/4HANA Journey with Confidence</h2>
                            <div className="sap-content">
                                <p>No matter where you are on your transformation journey, Advait Business Solutions is here to help you drive measurable business outcomes with SAP S/4HANA.</p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/sap7.jpg" alt="" className="sap-img" />
                        </div>
                    </div>

                </div>
            </div > */}

            {/*------ sap-btp ------*/}
            {/* <div className="sap-background">
                <div className="sap-container">

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>Modernize and Extend Your SAP Landscape with BTP</h2>
                            <div className="sap-content">
                                <p>
                                    Utilize SAP Business Technology Platform (SAP BTP) and cloud-native services to build, integrate, and extend applications seamlessly enabling real-time insights, intelligent workflows, and scalable innovation within your SAP ecosystem.
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/btp3.png" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-reverse bg-white">
                        <div className="sap-text">
                            <h2>Scale Innovation and Integration with SAP Business Technology Platform</h2>
                            <div className="sap-content">
                                <p>
                                    SAP BTP empowers organizations to seamlessly integrate systems, extend core functionalities, and rapidly develop cloud-native applications using the latest SAP technologies. Whether you're modernizing a legacy SAP landscape, embedding AI into your SAP S/4HANA strategy, or building modular solutions on SAP's industry cloud, our expert team accelerates your innovation journey through rapid prototyping, low-code development, and real-time data orchestration.
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/btp4.png" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>Accelerate Digital Transformation with Advait BS and SAP BTP</h2>
                            <div className="sap-content">
                                <p>
                                    Advait Business Solutions leverages deep SAP BTP expertise to help enterprises extend, integrate, and innovate across their SAP landscape. By unifying data, analytics, and AI on a single platform, we enable the development of intelligent, event-driven applications that automate core processes and deliver real-time business insights.
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/btp5.png" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-reverse bg-white">
                        <div className="sap-text">
                            <h2>Maintain a Clean Core and Drive Intelligent Automation with SAP BTP</h2>
                            <div className="sap-content">
                                <p>Leverage SAP Business Technology Platform to extend and customize your SAP applications without disrupting your core system. By integrating diverse business processes and system landscapes, SAP BTP enables scalable innovation and real-time responsiveness.</p>
                                <p> <b>Advait Business Solutions supports your transformation with advanced SAP BTP services, including:</b></p>
                                <p>
                                    <ul>
                                        <li>
                                            <b>Application Development & Automation</b> - Rapidly build, deploy, and orchestrate custom applications and automated workflows using low-code/no-code tools and event-driven architectures.
                                        </li>
                                        <li>
                                            <b>Extended Planning & Analysis</b> - Unify financial and operational planning for real-time forecasting and cross-functional alignment.
                                        </li>
                                        <li>
                                            <b>Data & Analytics</b> - Consolidate and model data across sources, enabling embedded analytics and actionable insights.
                                        </li>
                                        <li>
                                            <b>Integration Suite</b> - Connect SAP and non-SAP systems through APIs, event mesh, and prebuilt connectors to ensure end-to-end process continuity.
                                        </li>
                                        <li>
                                            <b>Artificial Intelligence & Machine Learning</b> - Embed intelligent services and predictive models into business applications to enhance decision-making and operational efficiency.
                                        </li>
                                    </ul>

                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/btp6.png" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>Orchestrate the power of SAP BTP to / Operationalize data-driven applications via SAP BTP to</h2>
                            <div className="sap-content">

                                <p>
                                    <ul>
                                        <li>
                                            Integrate disparate systems and applications for seamless data flow
                                        </li>
                                        <li>
                                            Build scalable extensions for SAP S/4HANA and industry cloud solutions
                                        </li>
                                        <li>
                                            Enable real-time analytics and predictive modelling for proactive decision-making
                                        </li>
                                        <li>
                                            Automate repetitive tasks to improve efficiency and resource utilization
                                        </li>
                                        <li>
                                            Drive agility with modular, cloud-native services and low-code tools
                                        </li>
                                    </ul>

                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/btp2.png" alt="" className="sap-img" />
                        </div>
                    </div>

                </div>
            </div > */}

            {/*------ sap signavio ------*/}

            <div className="sap-background">
                <div className="sap-container">

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>Transform Your Business Processes with SAP Signavio</h2>
                            <div className="sap-content">
                                <p>
                                    SAP Signavio is a comprehensive suite of business process management (BPM) tools designed to help organizations model, analyse, and optimize their processes. By leveraging SAP Signavio, businesses can achieve greater efficiency, compliance, and agility, ensuring they stay competitive in an ever-changing market.
                                </p>
                                <p>
                                    <ol>
                                        <li>Process Analysis</li>
                                        <li>Collaboration</li>
                                        <li>Process Mining</li>
                                        <li>Governance and Compliance</li>
                                        <li>Continuous Improvement</li>
                                    </ol>
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/ss2.png" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-reverse bg-white">
                        <div className="sap-text">
                            <h2>Advantages of SAP Signavio</h2>
                            <div className="sap-content">
                                <p>
                                    SAP Signavio is a comprehensive suite of business process management (BPM) tools designed to help organizations model, analyse, and optimize their processes. By leveraging SAP Signavio, businesses can achieve greater efficiency, compliance, and agility, ensuring they stay competitive in an ever-changing market.
                                </p>
                                <p>
                                    <ol>
                                        <li>
                                            <b>Enhanced Efficiency:</b> Streamline your operations by identifying and eliminating inefficiencies in your processes. SAP Signavio helps you optimize workflows and resource allocation.
                                        </li>
                                        <br />
                                        <li>
                                            <b>Improved Compliance:</b> Ensure adherence to regulatory standards and internal policies, reducing the risk of non-compliance and associated penalties.
                                        </li>
                                        <br />
                                        <li>
                                            <b>Greater Agility:</b> Quickly adapt to market changes and new business requirements with flexible, scalable process management tools.
                                        </li>
                                        <br />
                                        <li>
                                            <b>Increased Collaboration:</b> Promote cross-functional collaboration and alignment, ensuring all stakeholders are engaged and informed throughout the process lifecycle.
                                        </li>
                                        <br />
                                        <li>
                                            <b>Data-Driven Decisions:</b> Leverage real-time data and analytics to make informed decisions about process improvements and strategic initiatives.
                                        </li>
                                    </ol>

                                    <p>
                                        Whether you are looking to improve operational efficiency, ensure compliance, or drive continuous improvement, SAP Signavio offers the tools and insights you need to succeed. Transform your business processes with SAP Signavio and achieve greater organizational excellence.
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/ss3.png" alt="" className="sap-img sap-simg" />
                        </div>
                    </div>

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>Why Choose SAP Signavio ?</h2>
                            <div className="sap-content">
                                <p>
                                    SAP Signavio empowers organizations to take control of their business processes, driving efficiency, compliance, and agility. With its comprehensive suite of BPM tools, SAP Signavio provides the capabilities needed to model, analyse, and optimize processes, ensuring you can respond to changing business environments and stay competitive.
                                    <br />
                                    <br />
                                    For more information, contact your Advait BS representative or request a demo today.
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/ss4.png" alt="" className="sap-img" />
                        </div>
                    </div>

                </div>
            </div >

            {/*------ sap-analytics-cloud ------*/}
            {/* <div className="sap-background">
                <div className="sap-container">

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>Empower Your Business with Real-Time Insights</h2>
                            <div className="sap-content">
                                <p>
                                    SAP Analytics Cloud (SAC) is a comprehensive, cloud-based analytics solution designed to meet the needs of modern enterprises. By integrating business intelligence, planning, and predictive analytics into a single platform, SAC enables organizations to make data-driven decisions and drive better business outcomes.
                                </p>
                                <p>
                                    <ol>
                                        <li>Business Intelligence</li>
                                        <li>Planning and Forecasting</li>
                                        <li>Predictive Analytics</li>
                                        <li>Data Integration</li>
                                        <li>Collaboration Tools</li>
                                    </ol>
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/sac2.png" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-reverse bg-white">
                        <div className="sap-text">
                            <h2>Advantages of SAP Signavio</h2>
                            <div className="sap-content">
                                <p>
                                    Advantages of SAP Analytics Cloud
                                </p>
                                <p>
                                    <ol>
                                        <li>
                                            <b>Faster Decision-Making:</b> Gain access to real-time data and insights, allowing you to make informed decisions quickly and confidently.
                                        </li>
                                        <li>
                                            <b>Improved Collaboration:</b> Foster a collaborative environment where teams can work together on planning, reporting, and analysis.
                                        </li>
                                        <li>
                                            <b>Enhanced Predictive Capabilities:</b> Anticipate future trends and outcomes with advanced predictive analytics, helping you stay ahead of the competition.
                                        </li>
                                        <li>
                                            <b>Unified Platform:</b> Benefit from a single, integrated solution that combines BI, planning, and predictive analytics, reducing the need for multiple tools and simplifying your analytics landscape.
                                        </li>
                                    </ol>

                                    <p>
                                        Empower your business with SAP Analytics Cloud and transform the way you use data to drive better outcomes. Embrace a data-driven culture and stay competitive in today's fast-paced business environment.
                                    </p>
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/sac3.png" alt="" className="sap-img" />
                        </div>
                    </div>

                    <div className="sap-section row-normal bg-green">
                        <div className="sap-text">
                            <h2>Why Choose SAP Analytics Cloud? </h2>
                            <div className="sap-content">
                                <p>
                                    SAP Analytics Cloud is designed to help organizations unlock the full potential of their data. By combining business intelligence, planning, and predictive analytics in one platform, SAC provides a holistic approach to data analysis and decision-making. Whether you're looking to improve your planning processes, gain deeper insights into your data, or predict future trends, SAC offers the tools and capabilities you need to succeed.
                                    <br />
                                    <br />
                                    For more information, contact your Advait BS representative or request a demo today.
                                </p>
                            </div>
                        </div>

                        <div className="sap-img-wrap">
                            <img src="/src/assets/sac4.png" alt="" className="sap-img" />
                        </div>
                    </div>

                </div>
            </div > */}

        </>
    );
}

export default Sap;
