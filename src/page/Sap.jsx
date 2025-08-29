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
function Sap() {
    return (
        <>
            <div className="about-image-wrapper mobile-image-wrapper-ext-80">
                <img src={card1} alt="About Us" className="about-image" />
                <div className="about-overlay">
                    <h1>SAP S/4 HANA</h1>
                </div>
            </div>
            <div className="blog-background">
                <div className="blog-container">

                    {blogSections.map((section, idx) => (
                        <div
                            key={idx}
                            className={
                                `blog-section ${idx % 2 === 0 ? 'row-normal bg-green' : 'row-reverse bg-white'}`
                            }
                        >
                            <div className="blog-text">
                                <h2>{section.title}</h2>
                                <div className='blog-content'>
                                    <p><b>{section.content1}</b></p>
                                    <p>{parse(section.content)}</p>
                                </div>
                            </div>
                            <div className="blog-img-wrap">
                                <img src={section.image} alt={section.title} className="blog-img" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Sap;
