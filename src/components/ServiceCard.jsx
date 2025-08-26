export default function ServiceCard({ sectionTitle, sectionTag, data }) {
  return (
    <section className="Consulting-section about-margin-0-margin">
      <div className="section-header">
        {sectionTag && <p className="tag">{sectionTag}</p>}
        <h2>
          <strong>{sectionTitle}</strong>
        </h2>
      </div>

      <div className="workedwith-cards">
        {data.map((item, index) => (
          <div className="workedwith-card" key={index}>
            <div className="workedwith-card-header">
              <h3>{item.title}</h3>
              <div className="arrow-box"></div>

              {/* Notch SVG instead of circle div */}
              <svg
                className="notch"
                width="80"
                height="30"
                viewBox="0 0 80 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,0 C20,0 20,30 40,30 C60,30 60,0 80,0"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p>{item.description}</p>

            <div className="workedwith-src">
              <img src={item.src} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
