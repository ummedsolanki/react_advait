import team from "../assets/card3.jpg";
import printer from "../assets/i1.png";

const cardData = [
  {
    title: "Innovative Solution",
    desc: "We deliver cutting-edge IT solutions tailored to your business needs.",
    img: printer,
  },
  {
    title: "Cost-efficiency",
    desc: "We help reduce costs while improving overall efficiency.",
    img: printer,
  },
  {
    title: "Industry Expertise",
    desc: "Benefit from our deep understanding of diverse industry sectors.",
    img: printer,
  },
  {
    title: "Scalability",
    desc: "Our services grow with your business, ensuring long-term value.",
    img: printer,
  },
];

// Card Component
function FeatureCard({ img, title, desc }) {
  return (
    <div className="sec5_1">
      <div className="sec5_image">
        <img src={img} alt={title} />
      </div>
      <div>
        <div className="sec5_text">
          <p>{title}</p>
        </div>
        <div className="sec5_text_p">
        <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Why() {
  return (
    <>
      {/* Header Section */}
      <section>
        <div
          className="banner-container"
          style={{
            height: "50px",
            background: "white",
            clipPath:
              "polygon(0px 0px, 50% 0px, 75% 360%, 100% 100%, 0% 100%)",
            paddingTop: "10px",
            overflow: "hidden",
            top: "-30px",
          }}
        >
          <div className="banner-left">
            <p className="banner-subtitle">Why Advait</p>
            <h1 className="banner-title">
              Make the Smartest Move <br />
              <span className="banner-title-thin">for Your Future Goal!</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section5">
        <div className="section5_left">
          <div className="sec5_cards">
            <div className="section5_grid">
              {cardData.map((card, index) => (
                <FeatureCard
                  key={index}
                  img={card.img}
                  title={card.title}
                  desc={card.desc}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="section5_right">
          <div>
            <img src={team} alt="Line6" />
          </div>
        </div>
      </section>
    </>
  );
}
