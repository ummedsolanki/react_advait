import { contactUsHeroData } from "../../data/contactUs.data";
import HeroComponent from "../HeroComponent";
import { useState, useEffect, useRef } from "react";
import { getHeroData } from "../../api/HeroApi";
import Loaderbounce from "../../page/Loading";


export default function ContactUsHero() {
  const [heroData, setHeroData] = useState(null);
  const fetched = useRef(false); // track if API already called

  useEffect(() => {
    if (fetched.current) return; // prevent second call
    fetched.current = true;
    getHeroData("Contact Us").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home);
      }
    });
  }, []);

  if (!heroData) return <Loaderbounce />;
  return (
    <section className="contact-us-section ">
      <div>
        <HeroComponent heroData={heroData} />
      </div>

      {/* Text Content */}
      {/* <div className="contact-us-content">
        <div className="contact-us-heading">
          <h2>
            <strong>{contactUsHeroData.LetStart}</strong> {contactUsHeroData.start}.
            <br />
            {contactUsHeroData.theConversation}
          </h2>
        </div>
        <div className="contact-us-text">
          <p style={{ marginBottom: "1rem" }}>
            {contactUsHeroData.ourTeam}
          </p>
          <p style={{ marginBottom: "1rem" }}>
            {contactUsHeroData.ourTeam2}
          </p>
          <p style={{ marginBottom: "1rem" }}>
            {contactUsHeroData.ourTeam3}
          </p>
        </div>
      </div> */}
      <div className="about-content about-margin">
        <div className="about-left">
          <h2>
            <strong>
              {contactUsHeroData.LetStart}{" "}
            </strong>{contactUsHeroData.start}.
            <span className="mobile-br">
              <br />
            </span>
            {contactUsHeroData.theConversation}

          </h2>
        </div>

        <div className="about-right">
          <p>{contactUsHeroData.ourTeam}</p>
          <p>{contactUsHeroData.ourTeam2}</p>
          <p>{contactUsHeroData.ourTeam3}</p>
        </div>
      </div>
    </section>
  );
}

