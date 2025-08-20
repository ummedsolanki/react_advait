import img1 from "../assets/ind1.jpg";
import img2 from "../assets/ind2.jpg";
import img3 from "../assets/ind3.jpg";
import img4 from "../assets/ind4.jpg";
import img5 from "../assets/ind5.jpg";
import img6 from "../assets/ind6.jpg";
import img7 from "../assets/ind7.jpg";
import img8 from "../assets/ind8.jpg";


const CultureHighlights = () => {
  return (
    <section className="culture-section">
      <h2 className="culture-title">Culture highlights</h2>
      <div className="culture-grid">
        {/* Left big image */}
        <div className="item item1">
          <img src={img1} alt="Culture 1" />
        </div>

        {/* Top right 3 small images */}
        <div className="item item2">
          <img src={img2} alt="Culture 2" />
        </div>
        <div className="item item3">
          <img src={img3} alt="Culture 3" />
        </div>
        <div className="item item4">
          <img src={img4} alt="Culture 4" />
        </div>

        {/* Bottom left + right */}
        <div className="item item5">
          <img src={img5} alt="Culture 5" />
        </div>
        <div className="item item6">
          <img src={img6} alt="Culture 6" />
        </div>
        <div className="item item7">
          <img src={img7} alt="Culture 7" />
        </div>
        <div className="item item8">
          <img src={img8} alt="Culture 8" />
        </div>
      </div>
    </section>
  );
};

export default CultureHighlights;
