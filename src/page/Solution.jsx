import { solutionContent } from "../data/solution.data";
import ServiceCard from "../components/ServiceCard";
import HeroComponent from "../components/HeroComponent";
import { getHeroData } from "../api/HeroApi";
import { useState, useEffect, useRef } from "react";

export default function Industries() {
    const [heroData, setHeroData] = useState(null);
    const fetched = useRef(false); // track if API already called
    const [solutionProvide, setSolutionProvide] = useState([]); // backend services

    useEffect(() => {
        if (fetched.current) return; // prevent second call
        fetched.current = true;
        getHeroData("Solutions").then((data) => {
            if (data.home && data.home.length > 0) {
                setHeroData(data.home);
            }
        });
        fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/solutions/list?page=1&limit=20`)
            .then((res) => res.json())
            .then((data) => {
                if (data.solutions) {
                    const updatedSolutions = data.solutions.map((item) => ({
                        ...item,
                        src: item.imageUrl || `${import.meta.env.VITE_BACKEND_API_URL}${item.image}`,
                    }));
                    setSolutionProvide(updatedSolutions);
                }
            })
            .catch((err) => console.error("Error fetching services:", err));
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
                        <h2>
                            <strong className="title-bold">{solutionContent.title1} <span className="mobile-br"><br /> </span>{solutionContent.title2}
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
            <ServiceCard sectionTitle="Solutions" sectionTag="WE PROVIDE" data={solutionProvide} />
        </>
    );
}
