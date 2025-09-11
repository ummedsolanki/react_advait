import { useState, useEffect, useRef } from "react";
import HeroComponent from "../components/HeroComponent";
import { getHeroData } from "./../api/HeroApi";

export default function TermsOfService() {
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
      <div className="terms-container">
        <main className="terms-main">
          <section className="terms-content" aria-live="polite">
            <h1 className="page-title">Terms of Service</h1>
            <p className="last-updated">Effective Date: September 11, 2025</p>

            <h2 id="acceptance">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website and services, you agree to be bound
              by these Terms of Service. If you do not agree, please refrain from
              using our site.
            </p>

            <h2 id="services">2. Services Offered</h2>
            <p>Advait Business Solutions Pvt Ltd provides IT solutions including but not limited to:</p>
            <ul>
              <li>Software development</li>
              <li>Cloud infrastructure and DevOps</li>
              <li>Cybersecurity consulting</li>
              <li>IT support and maintenance</li>
              <li>Custom enterprise solutions</li>
            </ul>
            <p>
              All services are subject to availability and may be modified or discontinued at our discretion.
            </p>

            <h2 id="responsibilities">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information when contacting us</li>
              <li>Use our website and services lawfully and ethically</li>
              <li>Not attempt to disrupt or compromise our systems or data</li>
            </ul>

            <h2 id="intellectual-property">4. Intellectual Property</h2>
            <p>
              All content on our website—including text, graphics, logos, and software—is the property of Advait Business Solutions Pvt Ltd or its licensors. You may not reproduce, distribute, or exploit any content without prior written permission.
            </p>

            <h2 id="confidentiality">5. Confidentiality</h2>
            <p>
              We treat all client data and project information as confidential. You agree not to disclose any proprietary information shared during project discussions or execution.
            </p>

            <h2 id="payment">6. Payment & Billing</h2>
            <p>For paid services:</p>
            <ul>
              <li>Payment terms will be outlined in individual contracts or proposals</li>
              <li>Late payments may incur penalties or service suspension</li>
              <li>All fees are non-refundable unless otherwise stated</li>
            </ul>

            <h2 id="liability">7. Limitation of Liability</h2>
            <p>We are not liable for:</p>
            <ul>
              <li>Indirect or consequential damages</li>
              <li>Loss of data or business interruption</li>
              <li>Issues arising from third-party platforms or integrations</li>
            </ul>

            <h2 id="termination">8. Termination</h2>
            <p>
              We reserve the right to terminate access to our services for violations of these terms or misuse of our platform.
            </p>

            <h2 id="law">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be resolved in the courts of Ahmedabad, Gujarat.
            </p>

            <h2 id="contact">10. Contact Us</h2>
            <p>
              For questions or legal inquiries, reach out to:<br />
              📧 <a href="mailto:sales@advaitbusiness.com">sales@advaitbusiness.com</a><br />
              📞 +91-92270-22260<br />
              🏢 Advait Business Solutions Pvt Ltd, Ahmedabad, Gujarat, India
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
