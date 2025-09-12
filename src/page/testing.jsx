import { useState, useEffect, useRef } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { getHeroData } from "../api/HeroApi";
import HeroComponent from "../components/HeroComponent";
import JobDetailsPopup from "../components/JobDetailsPopup";
import JoinUsForm from "../components/JoinUsForm";
import { AiOutlineEye } from "react-icons/ai";

// New component for viewing all images
// function AllImagesModal({ images, onClose }) {
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button onClick={onClose} className="close-btn">
//           ✕
//         </button>
//         <div className="all-images-grid">
//           {images.map((item, i) => (
//             <div key={i} className="all-image-item">
//               <div className="media-container">
//                 {item.type === "video" ? (
//                   <>
//                     <video src={item.src} controls />
//                   </>
//                 ) : (
//                   <>
//                     <img src={item.src} alt={`gallery-${i}`} />
//                   </>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function JoinUs() {
  const [showPopup, setShowPopup] = useState(false);
  const [images, setImages] = useState([]);
  const [showAllImages, setShowAllImages] = useState(false); // ✅ new state
  const [heroData, setHeroData] = useState(null);
  const [jobs, setJobs] = useState([]);
  const fetched = useRef(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const jobSectionRef = useRef(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const sizeClasses = [
      "big",
      "medium",
      "small",
      "small",
      "small",
      "mediums",
      "mediums",
      "small",
    ];

    fetch(
      `${
        import.meta.env.VITE_BACKEND_API_URL
      }/api/culture-highlights/list?page=1&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.highlights && data.highlights.length > 0) {
          let videos = [];
          let imagesList = [];

          data.highlights.forEach((highlight) => {
            highlight.images.forEach((img) => {
              const isVideo =
                img.url.endsWith(".mp4") ||
                img.url.endsWith(".mov") ||
                img.url.endsWith(".webm");
              if (isVideo) {
                videos.push({ type: "video", src: img.url, id: "big" });
              } else {
                imagesList.push({ type: "image", src: img.url, id: "" });
              }
            });
          });

          imagesList = imagesList.map((img, index) => {
            const startIndex = videos.length > 0 ? 1 : 0;
            return {
              ...img,
              id: sizeClasses[(index + startIndex) % sizeClasses.length],
            };
          });

          setImages([...videos, ...imagesList]);
        }
      })
      .catch((err) => console.error("Error fetching culture highlights:", err));
  }, []);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;
    getHeroData("Join Us").then((data) => {
      if (data.home && data.home.length > 0) {
        setHeroData(data.home);
      }
    });
  }, []);

  useEffect(() => {
    if (jobSectionRef.current) {
      jobSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_API_URL
      }/api/jobs?page=${page}&limit=5&status=active`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setJobs(data.data);
          setTotalPages(data.pagination.pages || 1);
        }
      })
      .catch((err) => console.error("Error fetching jobs:", err));
  }, [page]);

  if (!heroData) return <p>Loading...</p>;

  const displayThreshold = 6; // Show first 6 images, then "Photos" card
  const displayedImages = images.slice(0, displayThreshold);
  const remainingImages = images.slice(displayThreshold);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
    >
      <section className="about-section header-margin">
        <div>
          <HeroComponent heroData={heroData} />
        </div>
      </section>

      <div className="section-header job-section about-margin">
        <h2 className="job-header">Our Open Roles</h2>
      </div>
      <div className="job-section about-margin" ref={jobSectionRef}>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="job-card">
              <div>
                <div
                  className="abcd"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <p className="job-label">OPEN ROLE</p>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="view-btn"
                  >
                    <AiOutlineEye className="view-icon" />
                    View Job
                  </button>
                </div>
                <h3 className="job-position">{job.title}</h3>
                <div className="job-details">
                  <p className="job-info">
                    <span>{job.job_type}</span>
                    <span className="for-phone">•</span>
                    <span>{job.location}</span>
                  </p>
                </div>
              </div>
              <button className="apply-btn" onClick={() => setShowPopup(true)}>
                <span className="btn-text">Apply Now</span>
                <div className="job-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 32 16"
                    fill="currentColor"
                    className="job-button"
                  >
                    <path d="M1.00024 7C0.447959 7 0.000244141 7.44772 0.000244141 8C0.000244141 8.55228 0.447959 9 1.00024 9V8V7ZM31.7074 8.70711C32.0979 8.31658 32.0979 7.68342 31.7074 7.29289L25.3434 0.928932C24.9529 0.538408 24.3197 0.538408 23.9292 0.928932C23.5387 1.31946 23.5387 1.95262 23.9292 2.34315L29.586 8L23.9292 13.6569C23.5387 14.0474 23.5387 14.6805 23.9292 15.0711C24.3197 15.4616 24.9529 15.4616 25.3434 15.0711L31.7074 8.70711ZM1.00024 8V9L31.0002 9V8V7L1.00024 7V8Z" />
                  </svg>
                </div>
              </button>
            </div>
          ))
        ) : (
          <p>No open roles available right now.</p>
        )}
      </div>

      {selectedJob && (
        <JobDetailsPopup
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

      {totalPages > 1 && (
        <div className="pagination about-margin">
          <button
            className={`page-btn ${page === 1 ? "disabled" : ""}`}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${page === i + 1 ? "active" : ""}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`page-btn ${page === totalPages ? "disabled" : ""}`}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}

      <h2 className="culture-title">Culture Highlights</h2>

      <div className="gallery-container">
        {displayedImages.map((item, i) => {
          const isVideo = item.type === "video";
          return (
            <div key={i} className={`gallery-item ${item.id}`}>
              {isVideo ? (
                <video
                  src={item.src}
                  controls
                  muted
                  loop
                  playsInline
                  controlsList="nodownload nofullscreen noremoteplayback"
                />
              ) : (
                <a href="/">
                  <img src={item.src} alt={`gallery-${i}`} />
                </a>
              )}
            </div>
          );
        })}
        {/* {remainingImages.length > 0 && (
          <div
            className="gallery-item grouped"
            onClick={() => setShowAllImages(true)}
          >
            <div className="grouped-content">
               <img src={galleryIcon} alt="Gallery" className="gallery-icon" />
            </div>
          </div>
        )} */}
      </div>

      {/* {showAllImages && (
        <AllImagesModal
          images={images}
          onClose={() => setShowAllImages(false)}
        />
      )} */}
      {showPopup && <JoinUsForm onClose={() => setShowPopup(false)} />}
    </GoogleReCaptchaProvider>
  );
}
