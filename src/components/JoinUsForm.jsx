import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function JoinUsForm({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // Track checkbox state
  const [isVerified, setIsVerified] = useState(false); // Track if reCAPTCHA is verified
  const [isRecaptchaProcessing, setIsRecaptchaProcessing] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
        if (!value.trim()) {
          error = "First name is required.";
        } else if (!/^[A-Za-z]+$/.test(value)) {
          error = "First name should only contain letters.";
        }
        break;
      case "lastName":
        if (!value.trim()) {
          error = "Last name is required.";
        } else if (!/^[A-Za-z]+$/.test(value)) {
          error = "Last name should only contain letters.";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format.";
        }
        break;
      case "phoneNumber":
        if (!value.trim()) {
          error = "Phone number is required.";
        } else if (!/^\d{10,15}$/.test(value)) {
          error = "Phone number must be 10–15 digits.";
        }
        break;
      case "resume":
        if (!value) {
          error = "Resume is required.";
        } else {
          const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ];
          if (!allowedTypes.includes(value.type)) {
            error = "Only PDF, DOC, or DOCX files are allowed.";
          }
          if (value.size > 5 * 1024 * 1024) {
            error = "File size must be less than 5MB.";
          }
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const fieldValue = name === "resume" ? files[0] : value;
    setFormData({ ...formData, [name]: fieldValue });

    const errorMsg = validateField(name, fieldValue);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckboxChange = async (e) => {
    const checked = e.target.checked;
    setIsCheckboxChecked(checked);

    if (checked && executeRecaptcha) {
      setIsRecaptchaProcessing(true);
      try {
        const token = await executeRecaptcha("job_application");
        if (token) {
          setIsVerified(true);
          toast.success("Verification successful!");
        } else {
          toast.error("Verification failed. Please try again.");
          setIsCheckboxChecked(false);
        }
      } catch (error) {
        console.error("reCAPTCHA error:", error);
        toast.error("Verification error. Please try again.");
        setIsCheckboxChecked(false);
      } finally {
        setIsRecaptchaProcessing(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!isVerified) {
      toast.error("Please verify you're not a robot.");
      return;
    }

    try {
      setIsRecaptchaProcessing(true);

      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("resume", formData.resume);

      const response = await axios.post(
        "http://172.16.5.23:5000/api/jobs/68bfc17972ccbcc299516942/apply",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success("Application submitted successfully!");
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        toast.error(`${response.data.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(`${error.response.data.message}`);
      } else {
        toast.error("Failed to submit application. Please try again.");
      }
    } finally {
      setIsRecaptchaProcessing(false);
    }
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
          {/* Form fields unchanged */}

          <div className="jobapply-row">
            <div className="jobapply-group">
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "error-input" : ""}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="jobapply-group">
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "error-input" : ""}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
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
                className={errors.email ? "error-input" : ""}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="jobapply-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={errors.phoneNumber ? "error-input" : ""}
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </div>
          </div>

          <div className="jobapply-group">
            <label>Resume (PDF, DOC, DOCX) *</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className={errors.resume ? "error-input" : ""}
            />
            {errors.resume && <span className="error">{errors.resume}</span>}
            <small>Accepted file types: PDF, DOC, DOCX (Max size: 5MB)</small>
          </div>

          {/* Checkbox for reCAPTCHA */}
          <div className="jobapply-group recaptcha-group">
            <label>
              <input
                type="checkbox"
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
                disabled={isVerified || isRecaptchaProcessing}
              />{" "}
              I'm not a robot
            </label>
            {isRecaptchaProcessing && (
              <div className="recaptcha-status">
                <div className="spinner"></div>
                <span>Verifying you're not a robot...</span>
              </div>
            )}
          </div>

          <div className="jobapply-actions">
            <button
              type="button"
              className="jobapply-btn-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="jobapply-btn-submit"
              disabled={!isVerified || isRecaptchaProcessing}
            >
              {isRecaptchaProcessing ? "Verifying..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />

      <style jsx>{`
    
        .recaptcha-status {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          color: #555;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid #ccc;
          border-top: 3px solid #007bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .jobapply-btn-submit:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
