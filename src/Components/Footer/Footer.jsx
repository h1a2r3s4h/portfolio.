import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Harshit Gangwar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
