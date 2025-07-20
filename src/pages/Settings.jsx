import React from "react";

export default function Settings() {
  return (
    <div className="max-w-base mx-auto space-y-5 py-2.5 px-5">
      <div className="flex items-center gap-2.5">
        <button>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5.30273L9 12.3027L15 19.3027"
              stroke="#2B62B4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <h4 className="leading-[1.2] font-bold text-xl text-theme-main-text">
          Settings
        </h4>
      </div>

      {/* Settings Items */}
      <ul className="space-y-5 text-lg font-medium text-theme-main-text">
        <li>
          <button className="h-12 w-full flex items-center justify-between bg-theme-main-5 rounded-lg cursor-pointer px-2.5 py-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/src/assets/icons/language.png"
                alt="Language Icon"
                loading="lazy"
                className="size-6 shrink-0"
              />
              Language
            </div>

            <img src="/src/assets/icons/angle-right.svg" alt="Angle Right" />
          </button>
        </li>
        <li>
          <button className="h-12 w-full flex items-center justify-between bg-theme-main-5 rounded-lg cursor-pointer px-2.5 py-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/src/assets/icons/light-mode.svg"
                alt="Sun Icon"
                loading="lazy"
              />
              App Theme
            </div>

            <img src="/src/assets/icons/angle-right.svg" alt="Angle Right" />
          </button>
        </li>
        <li>
          <button className="h-12 w-full flex items-center justify-between bg-theme-main-5 rounded-lg cursor-pointer px-2.5 py-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/src/assets/icons/trash.svg"
                alt="Trash Icon"
                loading="lazy"
              />
              Language
            </div>

            <img src="/src/assets/icons/angle-right.svg" alt="Angle Right" />
          </button>
        </li>
      </ul>
    </div>
  );
}
