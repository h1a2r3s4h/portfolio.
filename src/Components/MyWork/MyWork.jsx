// src/components/MyWork/MyWork.jsx
import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";
import { Github, ExternalLink } from "lucide-react";

const MyWork = () => {
  return (
    <div id="portfolio" className="mywork">
      {/* Title */}
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Theme pattern background" />
      </div>

      {/* Work Items */}
      <div className="mywork-container">
        {mywork_data.map((work) => (
          <div className="work-card" key={work.w_no}>
            {/* Project Image */}
            <img
              src={work.w_img}
              alt={work.w_name || "Project preview"}
              className="work-img"
            />

            {/* Project Info */}
            <h2 className="work-title">{work.w_name}</h2>
            <p className="work-desc">{work.w_desc}</p>

            {/* Links */}
            <div className="work-links">
              <a
                href={work.w_github}
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href={work.w_live}
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <ExternalLink size={20} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div
        className="mywork-showmore"
        onClick={() => window.open("https://github.com/h1a2r3s4h", "_blank")}
      >
        <p>Check My Github</p>
        <img src={arrow_icon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
