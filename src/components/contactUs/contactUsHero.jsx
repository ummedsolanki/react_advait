import { contactUsHeroData } from "../../data/contactUs.data";


const contactUsHero = () => {
  return (
    <section className="contact-us-section">
      <div className="video-banner">
        <video
          className="video-bg"
          src={contactUsHeroData.contactUsVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="video-overlay">
          <h1 className="contact-us-title">{contactUsHeroData.contactUsTitle}</h1>
        </div>
      </div>

      {/* Text Content */}
      <div className="contact-us-content">
        <div className="contact-us-heading">
          <h2>
            <strong>{contactUsHeroData.LetStart}</strong> {contactUsHeroData.start}.
            <br />
            {contactUsHeroData.theConversation}
          </h2>
        </div>
        <div className="contact-us-text">
          <p style={{marginBottom: "1rem"}}>
            {contactUsHeroData.ourTeam}
            </p>
            <p style={{marginBottom: "1rem"}}>
            {contactUsHeroData.ourTeam2}
            </p>
            <p style={{marginBottom: "1rem"}}>
            {contactUsHeroData.ourTeam3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default contactUsHero;
