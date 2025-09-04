import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShinyText from "./Shinytext";

export default function HeroComponent({ heroData, sliderSettings }) {
    if (!heroData || heroData.length === 0) return null;

    const defaultSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    const settings = sliderSettings || defaultSliderSettings;

    return (
        <div className="about-image-wrapper mobile-image-wrapper-ext-80">
            {heroData.length > 1 ? (
                <Slider {...settings}>
                    {heroData.map((item, index) =>
                        item.mediaType === "video" ? (
                            <video
                                key={index}
                                autoPlay
                                muted
                                loop
                                className="about-image"
                                style={{ width: "100%" }}
                            >
                                <source
                                    src={`${import.meta.env.VITE_BACKEND_API_URL}${item.href}`}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img
                                key={index}
                                src={`${import.meta.env.VITE_BACKEND_API_URL}${item.href}`}
                                alt={item.title}
                                className="about-image"
                            />
                        )
                    )}
                </Slider>
            ) : (
                // If only one item, show it without slider
                heroData[0].mediaType === "video" ? (
                    <video autoPlay muted loop className="about-image" style={{ width: "100%" }}>
                        <source
                            src={`${import.meta.env.VITE_BACKEND_API_URL}${heroData[0].href}`}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={`${import.meta.env.VITE_BACKEND_API_URL}${heroData[0].href}`}
                        alt={heroData[0].title}
                        className="about-image"
                    />
                )
            )}

            {/* Overlay for title (optional, if you want per slide title then move inside .map loop) */}
            <div className="about-overlay">
              <ShinyText>
                <h1>{heroData[0].title}</h1>
              </ShinyText>
            </div>
        </div>
    );
}

