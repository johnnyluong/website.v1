"use client";

//TODO: fix limited y range

import React, { useRef, useState } from "react";

const Spotlight = ({ children }: { children: React.ReactNode }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFocused) return;

    let scrollLeft = window.scrollX || window.pageXOffset;
    let scrollTop = window.scrollY || window.pageYOffset;

    setPosition({
      x: e.clientX + scrollLeft,
      y: e.clientY + scrollTop,
    });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          opacity: `${opacity}`,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};
export default Spotlight;
