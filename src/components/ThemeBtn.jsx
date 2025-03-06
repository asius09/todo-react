import { useTheme } from "../context/ThemeContext";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={`w-10 h-10 rounded-full transition-all duration-300 cursor-pointer ${
        theme === "dark"
          ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
          : "bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <i
        className={`text-2xl text-white ri-${
          theme === "dark" ? "sun" : "moon"
        }-line`}
      ></i>
    </button>
  );
};

export default ThemeBtn;
