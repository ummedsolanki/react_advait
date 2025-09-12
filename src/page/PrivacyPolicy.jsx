import { useState, useEffect, useRef } from "react";
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
      {/* <div>
        <HeroComponent heroData={heroData} />
      </div> */}
      <div className="privacy-container">
        <main className="privacy-main">
          <section className="privacy-content" aria-live="polite">
            <h1 className="page-title">Privacy Policy</h1>
            <p className="last-updated">Effective Date: September 11, 2025</p>

            <h2 id="overview">1. Overview</h2>
            <p>
              At Advait Business Solutions Pvt Ltd, we are committed to
              protecting your privacy and ensuring the security of your personal
              and business information. This policy outlines how we collect,
              use, and safeguard data through our website and services.
            </p>

            <h2 id="information">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Details:</strong> Name, email, phone number,
                company name, job title
              </li>
              <li>
                <strong>Business Information:</strong> Project requirements,
                technical specifications, service inquiries
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, pages
                visited, time spent on site
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> For analytics, performance,
                and personalization
              </li>
            </ul>

            <h2 id="purpose">3. Purpose of Data Collection</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to service inquiries and provide IT solutions</li>
              <li>Customize proposals and project scopes</li>
              <li>Improve website functionality and user experience</li>
              <li>
                Send updates, newsletters, or promotional content (with your
                consent)
              </li>
            </ul>

            <h2 id="sharing">4. Data Sharing & Disclosure</h2>
            <p>We do not sell or rent your data. We may share it with:</p>
            <ul>
              <li>Internal teams for project execution</li>
              <li>
                Trusted third-party vendors (e.g., cloud hosting, analytics)
              </li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 id="security">5. Data Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul>
              <li>SSL encryption</li>
              <li>Secure servers and firewalls</li>
              <li>Access controls and regular audits</li>
            </ul>

            <h2 id="rights">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your data</li>
              <li>Correct or delete personal information</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Disable cookies via browser settings</li>
            </ul>

            <h2 id="third-party">7. Third-Party Services</h2>
            <p>
              Our website may link to external platforms (e.g., GitHub,
              LinkedIn, payment gateways). We are not responsible for their
              privacy practices.
            </p>

            <h2 id="updates">8. Policy Updates</h2>
            <p>
              We may revise this policy periodically. Updates will be posted on
              this page with a revised effective date.
            </p>

            <h2 id="contact">9. Contact Us</h2>
            <p>
              For questions or concerns, reach out to:
              <br />
              📧{" "}
              <a href="mailto:sales@advaitbusiness.com">
                sales@advaitbusiness.com
              </a>
              <br />
              📞 +91-92270-22260
              <br />
              🏢 Advait Business Solutions Pvt Ltd, Ahmedabad, India
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
