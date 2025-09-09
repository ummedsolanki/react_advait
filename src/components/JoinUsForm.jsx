import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function JoinUsForm({ onClose }) {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        number: "",
        email: "",
        message: "",
        recaptchaToken: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            alert("Recaptcha not ready");
            return;
        }

        const token = await executeRecaptcha("submit_application");

        if (!token) {
            alert("Failed to verify reCAPTCHA.");
            return;
        }

        setFormData((prev) => ({ ...prev, recaptchaToken: token }));

        console.log("Form submitted with token:", {
            ...formData,
            recaptchaToken: token,
        });

        // Send this to your backend for verification
        // Example:
        // await fetch('/api/submit-application', {
        //   method: 'POST',
        //   body: JSON.stringify({ ...formData, recaptchaToken: token }),
        // })

        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Submit Application</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First-Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last-Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="number"
                        placeholder="Phone-Number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="file-upload">
                        <input type="file" id="resume" name="resume" />
                    </div>

                    <div className="popup-buttons">
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
