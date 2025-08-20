import industryVideo from "../assets/industry.mp4";
import rightimage from "../assets/handshake.jpg";
import WorldMap from "./WorldMap";

export default function ContactUs() {
  return (
    <>
      {/* Banner Section */}
      <section className="contact-us-section">
        <div className="video-banner">
          <video
            className="video-bg"
            src={industryVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="video-overlay">
            <h1 className="contact-us-title">CONTACT US</h1>
          </div>
        </div>

        {/* Text Content */}
        <div className="contact-us-content">
          <div className="contact-us-heading">
            <h2>
              <strong>Let's</strong> Start.
              <br />
              the Conversation!
            </h2>
          </div>
          <div className="contact-us-text">
            <p>
              Our team is dedicated to delivering personalized support and
              prompt communication to ensure a seamless and efficient experience
              from start to finish. We take the time to understand your unique
              goals, challenges, and vision—so we can offer tailored solutions
              that truly make a difference.
              <br />
              Whether you're launching a new project, seeking expert advice, or
              exploring potential collaboration opportunities, we're here to
              guide you every step of the way. Your success is our priority, and
              we're committed to making the process as smooth and stress-free as
              possible.
              <br />
              Let's connect and bring your ideas to life—ready to take the next
              step?
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          {/* Left side - Image */}
          <div className="contact-form-image">
            <img src={rightimage} alt="Contact illustration" />
          </div>

          {/* Right side - Form */}
          <div className="contact-form-container">
            <div className="contact-form">
              <h2 className="form-title">
                Let's Discuss How We <br /> Can Transform Your <br /> Business
              </h2>

              <p className="form-subtitle">
                Schedule a call to get personalized solutions from our business
                experts.
              </p>

              <form>
                {/* Row 1 */}
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Organization" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="Country" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Message"></textarea>
                  </div>
                </div>

                {/* Options + Submit */}
                <div className="form-options">
                  <label className="checkbox-option">
                    <input type="checkbox" />
                    <span>Autofill with LinkedIn</span>
                  </label>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <WorldMap />
    </>
  );
}
