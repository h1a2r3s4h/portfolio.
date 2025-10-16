import React, { useEffect, useState } from "react";
import "./SnakeCursor.css";

const SnakeCursor = () => {
  const TRAIL_COUNT = 12; // number of circles in the trail
  const [trail, setTrail] = useState(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setTrail((prev) => {
        const newTrail = [...prev];
        newTrail[0] = { x, y }; // head follows cursor
        for (let i = 1; i < newTrail.length; i++) {
          const prevDot = newTrail[i - 1];
          const dot = newTrail[i];
          newTrail[i] = {
            x: dot.x + (prevDot.x - dot.x) * 0.3,
            y: dot.y + (prevDot.y - dot.y) * 0.3,
          };
        }
        return newTrail;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="snake-cursor-container">
      {trail.map((pos, i) => (
        <div
          key={i}
          className="snake-dot"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: 1 - i / trail.length,
            transform: `translate(-50%, -50%) scale(${1 - i / trail.length})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SnakeCursor;
