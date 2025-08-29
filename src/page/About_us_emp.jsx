import { aboutUsEmp, aboutUsEmpContent } from "../data/aboutUs.data";

export default function AboutUs() {
  return (
    <section className="about-section about-margin-0-margin">
      <div className="about-image-wrapper mobile-image-wrapper-ext-80">
        <img src={aboutUsEmp.aboutImage} alt="About Us" className="about-image" />
        <div className="about-overlay">
          <h1>{aboutUsEmp.title}</h1>
        </div>
      </div>

      <div className="about-content about-margin">
        <div className="about-left">
          <h2>
            <strong>{aboutUsEmpContent.title1} <span className="mobile-br"><br /> </span>{aboutUsEmpContent.title2}
            </strong> {aboutUsEmpContent.title3} <span className="mobile-br"><br /></span>{aboutUsEmpContent.title4}
          </h2>
        </div>

        <div className="about-right">
          <p>
            {aboutUsEmpContent.para1}
          </p>
          <p>
            {aboutUsEmpContent.para2}
          </p>
        </div>
      </div>
    </section>
  );
}
