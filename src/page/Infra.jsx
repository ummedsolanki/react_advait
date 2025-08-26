import { infraEmp, infraContent, infraProvide } from "../data/Infra.data";
import ServiceCard from "../components/ServiceCard";
import parse from 'html-react-parser';

export default function Infra() {
    return (
        <>
            <section className="about-section about-margin-0-margin">
                <div className="about-image-wrapper mobile-image-wrapper-ext-80">
                    <img src={infraEmp.solutionImage} alt="Solution" className="about-image" />
                    <div className="about-overlay">
                        <h1>{infraEmp.title}</h1>
                    </div>
                </div>

                <div className="about-content">
                    <div className="about-left">
                        <h2 className="about-title">
                            {parse(infraContent.title1)}
                        </h2>
                    </div>

                    <div className="about-right">
                        <p>
                            {parse(infraContent.para1)}
                        </p>
                    </div>
                </div>
            </section>
            <ServiceCard sectionTitle="Infrastructure" sectionTag="WE PROVIDE" data={infraProvide} />
        </>
    );
}
