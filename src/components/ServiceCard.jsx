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
                width="200"
                height="45"
                viewBox="0 0 300 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,0
       H120
       A40,40 0 0 1 160,40
       A40,40 0 0 0 240,40
       A40,40 0 0 1 280,0
       H400
       
       H0
       Z" fill="#f4f6f4"></path>
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
