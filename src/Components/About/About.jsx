import React, { useState } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/photo1.jpg";

const skillData = {
  All: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Git/GitHub", "VS Code"],
  Frontend: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "MongoDB"],
  Tools: ["Git/GitHub", "VS Code"],
};

const About = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div id="about" className="about">
      {/* Title */}
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      {/* Section */}
      <div className="about-section">
        {/* Left */}
        {/* <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div> */}

        {/* Right */}
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
          </div>

          {/* Skills with Tabs */}
          <div className="about-skills">
            {/* Tabs */}
            <div className="skills-tabs">
              {Object.keys(skillData).map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              {skillData[activeTab].map((skill, index) => (
                <div key={index} className="skill-card">
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
