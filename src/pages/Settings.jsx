import { Link } from "react-router-dom";
import { useState } from "react";
import Theme from "../components/Theme";
import { useTheme } from "../contexts/ThemeContext";

export default function Settings() {
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const { resolvedTheme } = useTheme();

  function toggleThemeSelector() {
    setShowThemeSelector((prev) => !prev);
  }

  if (showThemeSelector) {
    return <Theme toggleThemeSelector={toggleThemeSelector} />;
  }

  return (
    <div className="max-w-base mx-auto space-y-5 p-5">
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h4 className="font-semibold text-xl text-theme-main-text dark:text-white">
          Settings
        </h4>
      </div>

      {/* Settings Items */}
      <ul className="space-y-5 text-lg font-medium text-theme-main-text dark:text-white">
        <li>
          <Link
            to="/settings/language"
            className="h-12 w-full flex items-center justify-between bg-theme-main-5 dark:bg-theme-main-text rounded-lg cursor-pointer px-2.5 py-3"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={
                  resolvedTheme === "dark"
                    ? "./assets/icons/language-dark.png"
                    : "./assets/icons/language.png"
                }
                alt="Language Icon"
                loading="lazy"
                className="size-6 shrink-0"
              />
              Language
            </div>
            <img src="./assets/icons/angle-right.svg" alt="Angle Right" />
          </Link>
        </li>
        <li>
          <button
            className="h-12 w-full flex items-center justify-between bg-theme-main-5 dark:bg-theme-main-text rounded-lg cursor-pointer px-2.5 py-3"
            onClick={() => setShowThemeSelector(true)}
          >
            <div className="flex items-center gap-2.5">
              <img
                src={
                  resolvedTheme === "dark"
                    ? "./assets/icons/light-mode-dark.svg"
                    : "./assets/icons/light-mode.svg"
                }
                alt="Sun Icon"
                loading="lazy"
                className="size-6 shrink-0"
              />
              App Theme
            </div>
            <img src="./assets/icons/angle-right.svg" alt="Angle Right" />
          </button>
        </li>
        <li>
          <button className="h-12 w-full flex items-center justify-between bg-theme-main-5 dark:bg-theme-main-text rounded-lg cursor-pointer px-2.5 py-3">
            <div className="flex items-center gap-2.5">
              <img
                src={
                  resolvedTheme === "dark"
                    ? "./assets/icons/trash-dark.svg"
                    : "./assets/icons/trash.svg"
                }
                alt="Trash Icon"
                loading="lazy"
                className="size-6 shrink-0"
              />
              Delete Account
            </div>
            <img src="./assets/icons/angle-right.svg" alt="Angle Right" />
          </button>
        </li>
      </ul>
    </div>
  );
}
