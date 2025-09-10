// src/components/JobDetailsPopup.jsx
import parse from "html-react-parser";
import { FaBuilding, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

export default function JobDetailsPopup({ job, onClose }) {
    if (!job) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                {/* Close Button */}
                <button className="popup-close" onClick={onClose}>
                    ✕
                </button>

                {/* Title */}
                <h2 className="popup-title">{job.title}</h2>

                {/* Meta Info */}
                {/* <div className="popup-meta">
                    <span>🏢 {job.department || "Product"}</span>
                    <span>📍 {job.location || "Not specified"}</span>
                    <span>💼 {job.jobType || "Full Time"}</span>
                </div> */}

                <div className="popup-meta">
                    <span className="popup-span">
                        <FaBuilding className="meta-icon" />
                        {job.department || "Product"}
                    </span>
                    <span className="popup-span">
                        <FaMapMarkerAlt className="meta-icon-red" />
                        {job.location || "Not specified"}
                    </span>
                    <span className="popup-span">
                        <FaBriefcase className="meta-icon" />
                        {job.jobType || "Full Time"}
                    </span>
                </div>


                {/* Two Column Info */}
                <div className="popup-grid">
                    {/* Job Details */}
                    <div className="popup-card">
                        <h3>Job Details</h3>
                        <p>Experience: {job.experience || "Not specified"}</p>
                        <p>
                            Education:{" "}
                            {job.education ? job.education : "Not specified"}
                        </p>
                        <p>Salary: {job.salary || "Not specified"}</p>
                        <p>
                            Posted: {job.createdAt
                                ? new Date(job.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })
                                : "Not specified"}
                        </p>
                    </div>

                    {/* Key Information */}
                    <div className="popup-card">
                        <h3>Key Information</h3>
                        <p>Department: {job.department || "Product"}</p>
                        <p>Location: {job.location || "Not specified"}</p>
                        <p>Job Type: {job.job_type || "Not specified"}</p>
                    </div>
                </div>

                {/* Job Description */}
                <h3 className="popup-subtitle">Job Description</h3>
                <div className="popup-description">
                    {parse(job.description) || "No description available."}
                </div>

                <div className="popup-req">
                    <h3>Requirements</h3>
                    <ul>
                        {job.requirements && job.requirements.length > 0 ? (
                            job.requirements.map((req, index) => (
                                <li key={index} className="popup-li">{req}</li>
                            ))
                        ) : (
                            <li>No requirements specified.</li>
                        )}
                    </ul>
                </div>

                <div className="popup-req">
                    <h3>Responsibilities</h3>
                    <ul>
                        {job.responsibilities && job.responsibilities.length > 0 ? (
                            job.responsibilities.map((res, index) => (
                                <li key={index} className="popup-li">{res}</li>
                            ))
                        ) : (
                            <li>No responsibilities specified.</li>
                        )}
                    </ul>
                </div>

            </div>
        </div>
    );
}
