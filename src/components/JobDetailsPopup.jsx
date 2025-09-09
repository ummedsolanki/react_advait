// src/components/JobDetailsPopup.jsx
export default function JobDetailsPopup({ job, onClose }) {
    if (!job) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>
                    ✕
                </button>

                <h2>{job.title}</h2>
                <div className="job-meta">
                    <p><strong>Experience:</strong> {job.experience || "Not specified"}</p>
                    <p><strong>Education:</strong> {job.education || "Not specified"}</p>
                    <p><strong>Salary:</strong> {job.salary || "Not specified"}</p>
                    <p><strong>Posted:</strong> {new Date(job.createdAt).toLocaleDateString()}</p>
                </div>

                <h3>Job Description</h3>
                <p>{job.description || "No description available."}</p>

                <div className="popup-buttons">
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}
