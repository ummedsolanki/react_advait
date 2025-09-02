import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroComponent({ heroData, sliderSettings }) {
    if (!heroData) return null;

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
            {heroData.mediaType === "video" ? (
                <video autoPlay muted loop className="about-image" style={{ width: "100%" }}>
                    <source
                        src={`${import.meta.env.VITE_BACKEND_API_URL}${heroData.href}`}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            ) : heroData.images && heroData.images.length > 1 ? (
                <Slider {...settings}>
                    {heroData.images.map((img, index) => (
                        <img
                            key={index}
                            src={`${import.meta.env.VITE_BACKEND_API_URL}${img}`}
                            alt={`${heroData.title} ${index + 1}`}
                            className="about-image"
                        />
                    ))}
                </Slider>
            ) : (
                <img
                    src={`${import.meta.env.VITE_BACKEND_API_URL}${heroData.href}`}
                    alt={heroData.title}
                    className="about-image"
                />
            )}

            <div className="about-overlay">
                <h1>{heroData.title}</h1>
            </div>
        </div>
    );
}
