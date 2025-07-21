"use client";

import { useState, useRef, useEffect } from "react";

export default function PriceRangeSlider() {
  const [priceRange, setPriceRange] = useState([1000, 1200]);
  const [isDragging, setIsDragging] = useState(null);
  const sliderRef = useRef(null);

  const minPrice = 800;
  const maxPrice = 1500;

  const getValueFromPosition = (clientX) => {
    if (!sliderRef.current) return 0;
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(
      0,
      Math.min(1, (clientX - rect.left) / rect.width)
    );
    return Math.round(minPrice + percentage * (maxPrice - minPrice));
  };

  const getPositionFromValue = (value) => {
    return ((value - minPrice) / (maxPrice - minPrice)) * 100;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const newValue = getValueFromPosition(e.clientX);

      setPriceRange((prev) => {
        if (isDragging === "min") {
          return [Math.min(newValue, prev[1] - 50), prev[1]];
        } else {
          return [prev[0], Math.max(newValue, prev[0] + 50)];
        }
      });
    };

    const handleMouseUp = () => {
      setIsDragging(null);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();

      const touch = e.touches[0];
      const newValue = getValueFromPosition(touch.clientX);

      setPriceRange((prev) => {
        if (isDragging === "min") {
          return [Math.min(newValue, prev[1] - 50), prev[1]];
        } else {
          return [prev[0], Math.max(newValue, prev[0] + 50)];
        }
      });
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const minPosition = getPositionFromValue(priceRange[0]);
  const maxPosition = getPositionFromValue(priceRange[1]);

  return (
    <div>
      {/* Price Range */}
      <div>
        <h5 className="text-lg font-medium mb-2.5">Price Range</h5>

        {/* Bar Chart Visualization - exactly matching mockup */}
        <div className="flex items-end justify-center gap-1 h-12">
          {[
            { height: 3, active: false },
            { height: 5, active: false },
            { height: 8, active: false },
            { height: 12, active: false },
            { height: 16, active: true },
            { height: 23, active: true },
            { height: 32, active: true },
            { height: 42, active: true },
            { height: 58, active: true },
            { height: 48, active: false },
            { height: 37, active: false },
            { height: 27, active: false },
            { height: 16, active: false },
            { height: 12, active: false },
            { height: 9, active: false },
            { height: 5, active: false },
            { height: 4, active: false },
          ].map((bar, index) => (
            <div
              key={index}
              className={`${
                bar.active ? "bg-theme-main" : "bg-theme-gray-light"
              }`}
              style={{
                height: `${bar.height}px`,
                width: "16px",
              }}
            />
          ))}
        </div>

        {/* Slider Track */}
        <div className="relative px-10 mb-2">
          <div ref={sliderRef} className="relative h-1.5 bg-white rounded-full">
            {/* Active Range */}
            <div
              className="absolute h-1.5 bg-theme-main rounded-full"
              style={{
                left: `${minPosition}%`,
                width: `${maxPosition - minPosition}%`,
              }}
            />

            {/* Min Handle */}
            <div
              className="absolute w-6 h-6 bg-white rounded-full border-4 border-theme-main"
              style={{
                left: `${minPosition}%`,
                top: "-8px",
                transform: "translateX(-50%)",
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDragging("min");
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                setIsDragging("min");
              }}
            />

            {/* Max Handle */}
            <div
              className="absolute w-6 h-6 bg-white rounded-full border-4 border-theme-main"
              style={{
                left: `${maxPosition}%`,
                top: "-8px",
                transform: "translateX(-50%)",
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsDragging("max");
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                setIsDragging("max");
              }}
            />
          </div>
        </div>

        {/* Price Values - fixed position */}
        <div className="max-w-60 mx-auto flex justify-between text-lg font-medium">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}
