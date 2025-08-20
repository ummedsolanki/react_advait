import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';

const blogs = [
  {
    title: 'Digital Transformation',
    description:
      'In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative',
    src: card1,
  },
  {
    title: 'SAP Business Solution',
    description:
      'In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative',
    src: card2,
  },
  {
    title: 'SAP BASIS & Security',
    description:
      'In the powerful scene of computerized change, organizations are ceaselessly looking for imaginative',
    src: card3,
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="section-header">
        <p className="tag">Our Blogs</p>
        <h2>
          <strong>Tailored Services</strong> to Grow & Expand Your Business
        </h2>
        <a className="view-all" href="#">
          View all Blogs <span className="arrow">↗</span>
        </a>
      </div>

      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-header">
              <h3>{blog.title}</h3>
              <div className="arrow-box"></div>
            </div>
            <p>{blog.description}</p>
            <div className="blog-src">
              <img src={blog.src} alt={blog.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
