import { useTheme } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const {
    theme, // this is 'light' | 'dark' | 'system' from localStorage
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
  } = useTheme();

  const themes = [
    { id: "light", name: "Light" },
    { id: "dark", name: "Dark" },
    { id: "system", name: "System Default" },
  ];

  const handleThemeChange = (themeId) => {
    if (themeId === "light") setLightTheme();
    else if (themeId === "dark") setDarkTheme();
    else setSystemTheme();
  };

  return (
    <div className="space-y-3">
      {themes.map((item) => (
        <button
          key={item.id}
          className={`h-15.5 w-full flex items-center gap-2.5 text-lg font-medium p-4 dark:text-white rounded-lg smooth-200 cursor-pointer ${
            theme === item.id
              ? "bg-theme-main text-white"
              : "bg-theme-main-5 dark:bg-theme-main-text"
          }`}
          onClick={() => handleThemeChange(item.id)}
        >
          <div className="relative">
            <input
              type="radio"
              name="theme"
              value={item.id}
              checked={theme === item.id}
              onChange={() => handleThemeChange(item.id)}
              className="sr-only"
            />
            <div
              className={`size-5 shrink-0 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-200 ${
                theme === item.id
                  ? "border-white"
                  : "border-theme-main dark:border-white"
              }`}
            >
              <div
                className={`size-3 rounded-full ${
                  theme === item.id ? "bg-white" : ""
                }`}
              ></div>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <span className="font-medium text-lg">{item.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
