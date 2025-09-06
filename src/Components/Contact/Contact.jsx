import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { Linkedin, Github } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "1284c244-c86f-4f48-aca3-071e3d7c663a");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        console.log("✅ Success:", result);
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        console.error("❌ Error:", result);
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("⚠️ Request failed:", error);
      toast.error("An error occurred. Try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      {/* Title */}
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-content">
        {/* Left Side */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects. If you're
            interested in working together, feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>Email: harshitgangwar1601@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 7017379969</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>U.P, India</p>
            </div>
          </div>

          {/* Social Icons */}
          <div
            className="contact-socials"
            style={{ marginTop: "20px", display: "flex", gap: "15px" }}
          >
            <a
              href="https://www.linkedin.com/in/harshit-gangwar-101ba5241"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0A66C2" }}
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/h1a2r3s4h"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <Github size={28} />
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Contact;
