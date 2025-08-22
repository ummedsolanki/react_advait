import React, { useState, useMemo } from "react";
import { contactUsFormData } from "../../data/contactUs.data";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";


const contactFormStyles = {
  container: {
    width: "100%",
    height: "600px",
    display: "flex",
    flexShrink: 0,
    borderRadius: "20px",
    background: "#FFF",
    overflow: "hidden",
    margin: "0 auto",
  },
  leftImageContainer: {
    width: "40%",
    height: "600px",
    flexShrink: 0,
    aspectRatio: "68 / 79",
    borderRadius: "20px 0 0 20px",
    background:
      "url('/your-image-path.jpg') lightgray -129px -221.884px / 118.805% 153.369% no-repeat",
  },
  leftImage: {
    width: "110%",
    height: "100%",
    objectFit: "cover",
  },
  rightContact: {
    width: "60%",
    height: "600px",
    flexShrink: 0,
    borderRadius: "20px 20px 20px 20px",
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
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    marginBottom: "15px",
  },
  headingSpan: {
    fontWeight: 400, // For the "Transform Your Business" part
  },
  subHeading: {
    color: "#000",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    width: "60%",
    height: "600px",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  formRow: {
    display: "flex",
    gap: "100px",
  },
  input: {
    width: "60%",
    height: "50px",
    flexShrink: 0,
    borderRadius: "10px",
    border: "1px solid #ccc",
    // padding: "10px",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  checkBoxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "20px",
  },
  checkBoxLabel: {
    color: "#000",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  sendButton: {
    display: "flex",
    width: "200px",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    background: "#46F27A",
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
    flexShrink: 0,
    aspectRatio: "1 / 1",
    background: "#FFF",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  },
  arrowIcon: {
    width: "40px",
    height: "40px",
    flexShrink: 0,
  },
  countryInput: {
    width: "60%",
    height: "50px",
    flexShrink: 0,
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    padding: "10px",
  },
  selectWrapper: {
    width: "60%",
    height: "50px",
    flexShrink: 0,
    borderRadius: "20px",
    fontSize: "16px",
    boxSizing: "border-box",
    // padding: "10px",
  }
};

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
  
    // Get all countries for dropdown
    const countryOptions = useMemo(() => countryList().getData(), []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
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
        await axios.post(
          "http://172.16.5.23:5000/api/contactUs/add",
          formData,
          { headers: { "Content-Type": "application/json" } }
        );
  
        setSubmitStatus({
          success: true,
          message: "Thank you for contacting us! We will get back to you soon.",
        });
  
        // Reset form
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
      <div style={contactFormStyles.container}>
        {/* Left Image */}
        <div style={contactFormStyles.leftImageContainer}>
          <img
            src={contactUsFormData.image}
            style={contactFormStyles.leftImage}
            alt="Contact illustration"
          />
        </div>
  
        {/* Right Contact Section */}
        <div style={contactFormStyles.rightContact}>
          <h2 style={contactFormStyles.heading}>
            {contactUsFormData.heading}
            <br />
            {contactUsFormData.subHeading}{" "}
            <span style={contactFormStyles.headingSpan}>
              {contactUsFormData.subHeading2}
              <br />
              {contactUsFormData.subHeading3}
            </span>
          </h2>
          <p style={contactFormStyles.subHeading}>
            {contactUsFormData.subHeading4}
          </p>
  
          <form style={contactFormStyles.form} onSubmit={handleSubmit}>
            <div style={contactFormStyles.formRow}>
              <input
                style={contactFormStyles.input}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                style={contactFormStyles.input}
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
  
            <div style={contactFormStyles.formRow}>
              <input
                style={contactFormStyles.input}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                style={contactFormStyles.input}
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>
  
            <div style={contactFormStyles.formRow}>
              {/* Country dropdown */}
              <div style={contactFormStyles.selectWrapper}>
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
  
            <button type="submit" style={contactFormStyles.sendButton} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : contactUsFormData.sendMessage}
              <div style={contactFormStyles.sendIconCircle}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#46F27A"
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
    );
  };
export default ContactForm;
