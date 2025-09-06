import React, { useEffect } from "react";
import "./BubbleEffect.css";

const BubbleEffect = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const bubble = document.createElement("span");
      bubble.className = "bubble";
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;

      document.body.appendChild(bubble);

      // Remove after animation ends
      setTimeout(() => {
        bubble.remove();
      }, 1000);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // nothing to render
};

export default BubbleEffect;
