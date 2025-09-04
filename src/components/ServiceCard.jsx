export default function ServiceCard({
  sectionTitle,
  sectionTag,
  data,
  onCardClick, // parent controls navigation
}) {
  const handleCardClick = (item) => {
    if (onCardClick) {
      onCardClick(item); // delegate click handling to parent
    }
  };

  return (
    <section className="Consulting-section about-margin-0-margin about-margin">
      <div className="section-header">
        {sectionTag && <p className="tag">{sectionTag}</p>}
        <h2>{sectionTitle}</h2>
      </div>

      <div className="workedwith-cards">
        {data.map((item, index) => (
          <div
            className="workedwith-card"
            key={index}
            onClick={() => handleCardClick(item)}
            style={{ cursor: onCardClick ? "pointer" : "default" }}
          >
            <div className="workedwith-card-header">
              <h3>{item.title}</h3>
              <div className="card-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="12"
                  viewBox="0 0 32 16"
                  fill="black"
                >
                  <path d="M1.00024 7C0.447959 7 0.000244141 7.44772 0.000244141 8C0.000244141 8.55228 0.447959 9 1.00024 9V8V7ZM31.7074 8.70711C32.0979 8.31658 32.0979 7.68342 31.7074 7.29289L25.3434 0.928932C24.9529 0.538408 24.3197 0.538408 23.9292 0.928932C23.5387 1.31946 23.5387 1.95262 23.9292 2.34315L29.586 8L23.9292 13.6569C23.5387 14.0474 23.5387 14.6805 23.9292 15.0711C24.3197 15.4616 24.9529 15.4616 25.3434 15.0711L31.7074 8.70711ZM1.00024 8V9L31.0002 9V8V7L1.00024 7V8Z" />
                </svg>
              </div>
              <svg
                className="notch"
                width="200"
                height="45"
                viewBox="0 0 300 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,0 H120 A40,40 0 0 1 160,40 A40,40 0 0 0 240,40 A40,40 0 0 1 280,0 H400 H0 Z"
                  fill="#f4f6f4"
                ></path>
              </svg>
            </div>

            <p>{item.subtitle}</p>

            <div className="workedwith-src">
              <img src={item.src} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
