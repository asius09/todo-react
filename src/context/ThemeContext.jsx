import { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme, clearTheme] = useLocalStorage("theme", "dark"); //default theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, clearTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
