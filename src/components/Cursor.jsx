/** @format */
import React, { useEffect, useRef } from "react";
import "../styles/Cursor.css";

function Cursor() {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  const colors = [
    "#ffffff66",
  ];
  useEffect(() => {
    const circles = circlesRef.current;

    // Initialize circle positions and colors
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animateCircles() {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          className="circle"
          ref={(el) => (circlesRef.current[i] = el)}
        ></div>
      ))}
    </>
  );
}

export default Cursor;
