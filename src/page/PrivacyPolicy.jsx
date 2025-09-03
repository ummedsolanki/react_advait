import { useState, useEffect, useRef } from "react";
import companyLogo from "../assets/Advait Color Logo.svg";
import HeroComponent from "../components/HeroComponent";
import { getHeroData } from "./../api/HeroApi";


export default function PrivacyPolicy() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [heroData, setHeroData] = useState(null);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;
    getHeroData("Contact Us").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home);
      }
    });
  }, []);

  if (!heroData) return <p>Loading...</p>;
  return (
    <>
      <div>
        <HeroComponent heroData={heroData} />
      </div>
      <div className="privacy-container">
        <main className="privacy-main">
          <section className="privacy-content" aria-live="polite">
            <h1 className="page-title">Privacy Policy</h1>
            <p className="last-updated">Last updated: {today}</p>

            <h2 id="information">Information We Collect</h2>
            <p>
              We may collect personal details (such as name, email, phone
              number) and usage data (such as browser type, device information,
              and pages visited).
            </p>

            <h2 id="use">How We Use Information</h2>
            <p>
              Information is used to provide and improve our services,
              personalize user experience, communicate updates, and comply with
              legal obligations.
            </p>

            <h2 id="sharing">Sharing Information</h2>
            <p>
              We do not sell your information. Data may be shared with trusted
              partners who help us operate our services, under strict
              confidentiality.
            </p>

            <h2 id="security">Data Security</h2>
            <p>
              We implement technical and organizational safeguards to protect
              your data. However, no system is 100% secure.
            </p>

            <h2 id="rights">Your Rights</h2>
            <p>
              You have rights to access, update, or delete your personal data,
              subject to applicable laws.
            </p>

            <h2 id="contact">Contact Us</h2>
            <p>
              If you have any questions, contact us at:
              <br /> 📧{" "}
              <a href="mailto:sales@advaitbusiness.com">
                sales@advaitbusiness.com
              </a>
              <br /> 📞 +91-92270-22260
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
