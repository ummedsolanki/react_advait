import team from "../assets/card3.jpg";
import printer from "../assets/i1.png";
export default function Why() {
  return (
    <>
      <section>
        <div
          className="banner-container"
          style={{
            height: "50px",
            background: "white",
            clipPath: "polygon(0px 0px, 50% 0px, 75% 360%, 100% 100%, 0% 100%)",
            paddingTop: "10px",
            overflow: "hidden",
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
      <section className="section5">
        <div className="section5_left">
          <div className="sec5_cards">
            <div className="section5_grid">
              <div className="sec5_1">
                <div className="sec5_image">
                  <img src={printer} alt="Innovative Solution" />
                </div>
                <div className="sec5_text">
                  <h4>Innovative Solution</h4>
                  <p>
                    We deliver cutting-edge IT solutions tailored to your
                    business <br />
                    needs.
                  </p>
                </div>
              </div>

              <div className="sec5_1">
                <div className="sec5_image">
                  <img src={printer} alt="Cost-efficiency" />
                </div>
                <div className="sec5_text">
                  <h4>Cost-efficiency</h4>
                  <p>
                    We help reduce costs while improving overall
                    <br /> efficiency.
                  </p>
                </div>
              </div>

              <div className="sec5_1">
                <div className="sec5_image">
                  <img src={printer} alt="Industry Expertise" />
                </div>
                <div className="sec5_text">
                  <h4>Industry Expertise</h4>
                  <p>
                    Benefit from our deep understanding of diverse industry{" "}
                    <br />
                    sectors.
                  </p>
                </div>
              </div>

              <div className="sec5_1">
                <div className="sec5_image">
                  <img src={printer} alt="Scalability" />
                </div>
                <div className="sec5_text">
                  <h4>Scalability</h4>
                  <p>
                    Our services grow with your business, ensuring long-term{" "}
                    <br />
                    value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section5_right">
          <div>
            <img src={team} alt="Line6" />
          </div>
        </div>
      </section>
    </>
  );
}
