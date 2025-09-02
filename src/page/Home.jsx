import { useEffect, useState, useRef } from "react";
import { getHomeData } from "../api/HomeApi";
import Hero from "./Hero";
import Why from "./Why_Advait";
import Counter from "./Counter";
import SolutionsSection from "./Solutions";
import ServiceSection from "./Services";
import HeroBanner from "./HeroBanner";
import BlogSection from "./Blogs";
import RtlSwiper from "./Slider";
import FooterDetails from "../components/FooterDetails";

export default function Home() {
    const [homeData, setHomeData] = useState(null);
    const fetchedRef = useRef(false);

    useEffect(() => {
        if (fetchedRef.current) return; // already fetched
        fetchedRef.current = true;
        const fetchData = async () => {
            const data = await getHomeData();
            setHomeData(data);
        };
        fetchData();
    }, []);

    if (!homeData) return <p>Loading...</p>;
    return (
        <>
            <Hero data={homeData.heroSections} />
            <Why data={homeData.whySection} />
            <Counter data={homeData.middleSection} />
            <SolutionsSection data={homeData.solutionsSection} />
            <ServiceSection data={homeData.servicesSection} />
            <HeroBanner data={homeData.businessLevelSection} />
            <BlogSection data={homeData.blogSections} />
            <RtlSwiper data={homeData.companyList} />
            <FooterDetails />
        </>
    );
}