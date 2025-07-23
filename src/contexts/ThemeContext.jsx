import { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // ✅ Correct initial load from localStorage or default to 'system'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState("light"); // actual applied theme

  // ✅ Helper to detect system preference
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  // ✅ Effect to apply theme and store user preference
  useEffect(() => {
    let appliedTheme = theme;

    if (theme === "system") {
      appliedTheme = getSystemTheme();
    }

    setResolvedTheme(appliedTheme);
    document.documentElement.className = appliedTheme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Listen to OS theme changes if 'system' is selected
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        const newSystemTheme = getSystemTheme();
        setResolvedTheme(newSystemTheme);
        document.documentElement.className = newSystemTheme;
      }
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  // ✅ Theme setters
  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark");
  const setSystemTheme = () => setTheme("system");

  return (
    <ThemeContext.Provider
      value={{
        theme, // user preference: 'light' | 'dark' | 'system'
        resolvedTheme, // applied theme: 'light' | 'dark'
        setLightTheme,
        setDarkTheme,
        setSystemTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ Custom hook for using theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
