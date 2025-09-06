import React, { useState, useEffect } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Linkedin, Github, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Track active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "portfolio", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // offset for navbar height

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setMenu(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo-text glow-logo">Portfolio.</h1>

      {/* Hamburger Button (Mobile) */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Items */}
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        {["home", "about", "portfolio", "contact"].map((item) => (
          <li key={item}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={`#${item}`}
              onClick={() => {
                setMenu(item);
                setIsOpen(false); // ✅ Close mobile menu
              }}
            >
              <p>
                {item === "about"
                  ? "About Me"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="underline" />}
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <div className="nav-connect">
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Connect with Me
          </AnchorLink>
        </div>

        {/* Social Icons */}
        <div className="nav-socials">
          <a
            href="https://www.linkedin.com/in/harshit-gangwar-101ba5241/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/h1a2r3s4h"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
