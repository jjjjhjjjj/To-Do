import { createContext, useContext, useEffect, useState } from "react";

const DarkContext = createContext();

export function DarkProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((dark) => !dark);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
export function useDark() {
  return useContext(DarkContext);
}
