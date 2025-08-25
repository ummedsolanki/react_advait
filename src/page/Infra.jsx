import { solutionEmp, solutionContent, solutionProvide } from "../data/infra.data";
import ServiceCard from "../components/ServiceCard";

export default function Infra() {
    return (
        <>
            <section className="about-section about-margin-0-margin">
                <div className="about-image-wrapper mobile-image-wrapper-ext-80">
                    <img src={solutionEmp.solutionImage} alt="Solution" className="about-image" />
                    <div className="about-overlay">
                        <h1>{solutionEmp.title}</h1>
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-left">
                        <h2>
                            <strong>{solutionContent.title1} <span className="mobile-br"><br /> </span>{solutionContent.title2}
                            </strong> {solutionContent.title3} <span className="mobile-br"><br /></span>{solutionContent.title4}
                        </h2>
                    </div>

                    <div className="about-right">
                        <p>
                            {solutionContent.para1}
                        </p>
                        <p>
                            {solutionContent.para2}
                        </p>
                    </div>
                </div>
            </section>
            <ServiceCard sectionTitle="Infrastructure" sectionTag="WE PROVIDE" data={solutionProvide} />
        </>
    );
}
