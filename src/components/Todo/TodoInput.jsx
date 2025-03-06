import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  };

  const gradientClasses = theme === "dark"
    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
    : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500";

  return (
    <form onSubmit={handleSubmit} className="flex shadow-xl w-full max-w-xl mx-auto">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        className="w-full p-3 rounded-l-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-r-0 border-blue-300 dark:border-blue-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300 text-lg"
      />
      <button
        type="submit"
        className={`px-6 py-3 rounded-r-lg text-white font-semibold text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${gradientClasses}`}
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
