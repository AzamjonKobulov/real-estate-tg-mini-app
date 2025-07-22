import { useState } from "react";

export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState("light");

  const themes = [
    {
      id: "light",
      name: "Light",
    },
    {
      id: "dark",
      name: "Dark",
    },
    {
      id: "system",
      name: "System Default",
    },
  ];

  const handleThemeChange = (themeId) => {
    setSelectedTheme(themeId);
  };

  return (
    <div className="space-y-3">
      {themes.map((theme) => (
        <div
          key={theme.id}
          className={`h-15.5 flex items-center gap-2.5 text-lg font-medium p-4 rounded-lg smooth-200 cursor-pointer ${
            selectedTheme === theme.id
              ? "bg-theme-main text-white"
              : "bg-theme-main-5"
          }`}
          onClick={() => handleThemeChange(theme.id)}
        >
          <div className="relative">
            <input
              type="radio"
              name="theme"
              value={theme.id}
              checked={selectedTheme === theme.id}
              onChange={() => handleThemeChange(theme.id)}
              className="sr-only"
            />
            <div
              className={`size-5 shrink-0 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-200 ${
                selectedTheme === theme.id
                  ? "border-white"
                  : "border-theme-main"
              }`}
            >
              <div
                className={`size-3 rounded-full ${
                  selectedTheme === theme.id ? "bg-white" : ""
                }`}
              ></div>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <span className="font-medium text-lg">{theme.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
