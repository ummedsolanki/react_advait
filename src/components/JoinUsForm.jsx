import React, { useState } from "react";

export default function JoinUsForm({ onClose }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume") {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // You can send formData to backend here using axios/fetch
        alert("Application submitted!");
        onClose();
    };

    return (
        <div className="jobapply-overlay">
            <div className="jobapply-content">
                <div className="jobapply-header">
                    <h2>Apply for Job</h2>
                    <button className="jobapply-close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="jobapply-form">
                    <div className="jobapply-row">
                        <div className="jobapply-group">
                            <label>First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        <div className="jobapply-group">
                            <label>Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                    </div>

                    <div className="jobapply-row">
                        <div className="jobapply-group">
                            <label>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="jobapply-group">
                            <label>Phone Number *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    </div>

                    <div className="jobapply-group">
                        <label>Resume (PDF, DOC, DOCX) *</label>
                        <input
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            required
                        />
                        <small>Accepted file types: PDF, DOC, DOCX (Max size: 5MB)</small>
                    </div>

                    <div className="jobapply-actions">
                        <button
                            type="button"
                            className="jobapply-btn-cancel"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="jobapply-btn-submit">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
