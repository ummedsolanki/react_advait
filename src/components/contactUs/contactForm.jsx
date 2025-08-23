import React, { useState, useMemo } from "react";
import { contactUsFormData } from "../../data/contactUs.data";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";

const contactFormStyles = {
  container: {
    width: "100%",
    minHeight: "600px",
    display: "flex",
    flexShrink: 0,
    borderRadius: "20px",
    background: "#FFF",
    overflow: "hidden",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  leftImageContainer: {
    width: "40%",
    flexShrink: 0,
    borderRadius: "20px 0 0 20px",
    background: "lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  leftImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  rightContact: {
    width: "60%",
    minHeight: "600px",
    flexShrink: 0,
    borderRadius: "0 20px 20px 0",
    background: "#E3FFEB",
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    boxSizing: "border-box",
  },
  heading: {
    color: "#000",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "30px",
    fontWeight: 600,
    marginBottom: "15px",
  },
  headingSpan: {
    fontWeight: 400,
  },
  subHeading: {
    color: "#000",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "18px",
    fontWeight: 400,
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  formRow: {
    display: "flex",
    gap: "20px",
    width: "100%",
    flexWrap: "wrap",
  },
  input: {
    flex: "1 1 45%",
    height: "50px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    padding: "10px",
    minWidth: "200px",
  },
  countryInput: {
    flex: "1 1 45%",
    height: "50px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    padding: "10px",
    minWidth: "200px",
  },
  selectWrapper: {
    flex: "1 1 45%",
    minWidth: "200px",
  },
  checkBoxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
    width: "100%",
  },
  checkBoxLabel: {
    color: "#000",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "16px",
    fontWeight: 400,
  },
  sendButton: {
    display: "flex",
    width: "200px",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    background: "#078672",
    borderRadius: "30px",
    marginTop: "20px",
    gap: "10px",
    cursor: "pointer",
    border: "none",
    fontSize: "16px",
    fontWeight: 600,
  },
  sendIconCircle: {
    width: "40px",
    height: "40px",
    background: "#FFF",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5px",
  },
};

// Responsive CSS Fix
// Responsive CSS Fix
const responsiveCSS = `
  @media (max-width: 1024px) {
    .contact-container {
      flex-direction: column;
      min-height: auto;
    }
    .contact-left, .contact-right {
      width: 100% !important;
      border-radius: 20px !important;
    }
    .contact-left {
      height: 300px !important; /* Sets the lightgray background height */
    }
    .contact-left img {
      width: 100%;
      height: 100% !important; /* Ensures the image fills the container */
      object-fit: cover;
      border-radius: 20px 20px 0 0;
      display: block;
    }
    .contact-right {
      padding: 20px !important;
    }
    .contact-heading {
      font-size: 24px !important;
    }
    .contact-subheading {
      font-size: 16px !important;
    }
  }

  @media (max-width: 768px) {
    .contact-form-row {
      flex-direction: column !important;
      gap: 10px !important;
    }
    .contact-input, .contact-country, .contact-select {
      flex: 1 1 100% !important;
      width: 100% !important;
    }
    .contact-send-btn {
      width: 100% !important;
    }
  }

  @media (max-width: 480px) {
  .contact-left {
    height: 350px !important; /* Lightgray background height */
  }
  .contact-left img {
    height: 350px !important; /* Image height matches background */
    width: 100% !important;
    object-fit: cover; /* Ensures proper scaling */
  }
  .contact-heading {
    font-size: 20px !important;
  }
  .contact-subheading {
    font-size: 14px !important;
  }
  .contact-send-btn {
    font-size: 14px !important;
    height: 45px !important;
  }
  .contact-send-btn div {
    width: 35px !important;
    height: 35px !important;
  }
    .contact-right {
    margin-top: -80px !important; 
  }
}

`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    country: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  const countryOptions = useMemo(() => countryList().getData(), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      country: selectedOption ? selectedOption.label : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      await axios.post("http://172.16.5.23:5000/api/contactUs/add", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setSubmitStatus({
        success: true,
        message: "Thank you for contacting us! We will get back to you soon.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        organization: "",
        country: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to submit the form. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{responsiveCSS}</style>
      <div className="contact-container" style={contactFormStyles.container}>
        <div
          className="contact-left"
          style={contactFormStyles.leftImageContainer}
        >
          <img
            src={contactUsFormData.image}
            style={contactFormStyles.leftImage}
            alt="Contact illustration"
          />
        </div>

        <div className="contact-right" style={contactFormStyles.rightContact}>
          <h2 className="contact-heading" style={contactFormStyles.heading}>
            {contactUsFormData.heading}
            <br />
            {contactUsFormData.subHeading}{" "}
            <span style={contactFormStyles.headingSpan}>
              {contactUsFormData.subHeading2}
              <br />
              {contactUsFormData.subHeading3}
            </span>
          </h2>
          <p
            className="contact-subheading"
            style={contactFormStyles.subHeading}
          >
            {contactUsFormData.subHeading4}
          </p>

          <form style={contactFormStyles.form} onSubmit={handleSubmit}>
            <div className="contact-form-row" style={contactFormStyles.formRow}>
              <input
                className="contact-input"
                style={contactFormStyles.input}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="contact-input"
                style={contactFormStyles.input}
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-row" style={contactFormStyles.formRow}>
              <input
                className="contact-input"
                style={contactFormStyles.input}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="contact-input"
                style={contactFormStyles.input}
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form-row" style={contactFormStyles.formRow}>
              <div
                className="contact-select"
                style={contactFormStyles.selectWrapper}
              >
                <Select
                  options={countryOptions}
                  value={countryOptions.find(
                    (option) => option.label === formData.country
                  )}
                  onChange={handleCountryChange}
                  placeholder="Select Country"
                />
              </div>

              <input
                className="contact-country"
                style={contactFormStyles.countryInput}
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div style={contactFormStyles.checkBoxContainer}>
              <input type="checkbox" id="linkedin" />
              <label htmlFor="linkedin" style={contactFormStyles.checkBoxLabel}>
                {contactUsFormData.checkBoxLabel}
              </label>
            </div>

            <button
              type="submit"
              className="contact-send-btn"
              style={contactFormStyles.sendButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : contactUsFormData.sendMessage}
              <div style={contactFormStyles.sendIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#078672"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>

            {submitStatus.message && (
              <p
                style={{
                  color: submitStatus.success ? "green" : "red",
                  marginTop: "10px",
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                {submitStatus.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
