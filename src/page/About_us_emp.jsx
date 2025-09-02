import { getHeroData } from "../api/HeroApi";
import { aboutUsEmpContent } from "../data/aboutUs.data";
import HeroComponent from "../components/HeroComponent";
import { useState, useEffect, useRef } from "react";

export default function Industries() {
  const [heroData, setHeroData] = useState(null);
  const fetched = useRef(false); // track if API already called

  useEffect(() => {
    if (fetched.current) return; // prevent second call
    fetched.current = true;
    getHeroData("About").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home);
      }
    });
  }, []);

  if (!heroData) return <p>Loading...</p>;

  return (
    <section className="about-section about-margin-0-margin">
      <div>
        <HeroComponent heroData={heroData} />
      </div>

      {/* About content stays outside the image wrapper but in the same section */}
      <div className="about-content about-margin">
        <div className="about-left">
          <h2>
            <strong>
              {aboutUsEmpContent.title1}{" "}
              <span className="mobile-br">
                <br />
              </span>
              {aboutUsEmpContent.title2}
            </strong>{" "}
            {aboutUsEmpContent.title3}{" "}
            <span className="mobile-br">
              <br />
            </span>
            {aboutUsEmpContent.title4}
          </h2>
        </div>

        <div className="about-right">
          <p>{aboutUsEmpContent.para1}</p>
          <p>{aboutUsEmpContent.para2}</p>
        </div>
      </div>
    </section>
  );
}
