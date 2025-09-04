import { useLocation, useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function BlogDetails() {
    const { slug, type } = useParams();
    const location = useLocation();
    const item = location.state?.item;

    if (!item) return <p>No data found.</p>; // simple, no fetching

    return (
        <>
            <div className="video-banner mobile-image-wrapper-ext-80">
                <img
                    className="video-bg"
                    src={item.imageUrl || item.src || item.image || ""}
                    alt={item.title}
                />
                <div className="video-overlay">
                    <h1 className="industries-title">{item.title}</h1>
                    <h3 className="industries-subtitle">{type.toUpperCase()}</h3>
                </div>
            </div>
            {parse(item.description)}
        </>
    );
}
