import React, { useEffect, useRef } from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Typed from "typed.js";
import profile_img from "../../assets/photo1.jpg";
import resumePDF from "../../assets/resume.pdf";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";

const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Full Stack Developer",
        "Backend Developer",
        "Frontend Developer",
        "Web Developer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="hero-container">
      <ParticlesBackground /> {/* Motion Background */}
      <div className="hero">
        {/* Profile */}
        <div className="profile-img-wrapper">
          <div className="rotating-border"></div>
          <img src={profile_img} alt="Profile" className="profile-img" />
        </div>

        {/* Headline */}
        <h1>
          <span className="highlight">I'm Harshit Gangwar</span>
          <br />
          <span ref={typedEl}></span>
        </h1>

        {/* Subtitle */}
        <p>
          A Third-year B.Tech student passionate about web development. I enjoy
          building clean, responsive websites and constantly exploring new
          technologies to improve my skills and create impactful user
          experiences.
        </p>

        {/* Action Buttons */}
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with me
            </AnchorLink>
          </div>
          <div className="hero-resume">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
