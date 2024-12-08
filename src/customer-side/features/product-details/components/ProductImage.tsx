"use client";
import React, { useRef, useState } from "react";

const ProductImage = ({ image }: { image: string }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={isZoomed ? handleMouseMove : null}
      onMouseLeave={() => setIsZoomed(false)}
      onClick={handleClick}
      className={`relative overflow-hidden ${
        isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
      }`}
    >
      <img
        src={image}
        alt="Zoomable"
        className={`w-full object-cover transition-transform duration-300 ${
          isZoomed ? "scale-150" : "scale-100"
        }`}
        style={
          isZoomed
            ? {
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              }
            : {}
        }
      />
    </div>
  );
};

export default ProductImage;
