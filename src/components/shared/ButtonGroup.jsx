import { useState } from "react";

export default function ButtonGroup({
  options = [],
  defaultActive = 0,
  onChange = () => {},
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  const handleClick = (label, index) => {
    setActiveIndex(index);
    onChange(label);
  };

  return (
    <div className={`min-w-max flex items-center gap-2.5 ${className}`}>
      {options.map((label, index) => (
        <button
          key={label}
          onClick={() => handleClick(label, index)}
          className={`h-10 rounded-lg px-5 transition-colors duration-200 ${
            index === activeIndex
              ? "btn-primary"
              : "btn-secondary dark:bg-theme-main-text"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
