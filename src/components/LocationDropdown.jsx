import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "../hooks/useClickOutside";

const LOCATIONS = ["Ahmadabad", "Tashkent", "Istanbul", "Dubai"];

export default function LocationDropdonw() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Ahmadabad");
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-10 min-w-45 flex-between gap-2.5 text-theme-main tex-sm font-poppins bg-theme-main-5 rounded-full cursor-pointer px-3"
      >
        <div className="flex items-center gap-2.5">
          <img src="/src/assets/icons/location.svg" alt="Location" />
          <span>{selectedLocation}</span>
        </div>
        <img
          src="/src/assets/icons/angle-down.svg"
          alt="Angle down"
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg z-20"
          >
            {LOCATIONS.map((location) => (
              <li
                key={location}
                onClick={() => {
                  setSelectedLocation(location);
                  setIsOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-theme-main-5 text-sm text-theme-main"
              >
                {location}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
