import { infraContent, infraProvide } from "../data/Infra.data";
import ServiceCard from "../components/ServiceCard";
import parse from 'html-react-parser';
import HeroComponent from "../components/HeroComponent";
import { getHeroData } from "../api/HeroApi";
import { useState, useEffect, useRef } from "react";

export default function Industries() {
    const [heroData, setHeroData] = useState(null);
    const fetched = useRef(false); // track if API already called

    useEffect(() => {
        if (fetched.current) return; // prevent second call
        fetched.current = true;
        getHeroData("Infra").then((data) => {
            if (data.home && data.home.length > 0) {
                setHeroData(data.home);
            }
        });
    }, []);

    if (!heroData) return <p>Loading...</p>;

    return (
        <>
            <section className="about-section about-margin-0-margin">
                <div>
                    <HeroComponent heroData={heroData} />
                </div>

                <div className="about-content about-margin">
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
