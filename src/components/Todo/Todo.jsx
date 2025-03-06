import { useState } from "react";

const Todo = ({ todo, onEdit, onDelete, onToggle }) => {
  const [editTodo, setEditTodo] = useState(false);
  const [input, setInput] = useState(todo.text);
  const handleEdit = (id, text) => {
    onEdit(id, text);
    setEditTodo(false);
  };
  return (
    <li className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-3 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center flex-grow mr-4">
        <div className="relative mr-4">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="hidden"
            id={`todo-${todo.id}`}
          />
          <label
            htmlFor={`todo-${todo.id}`}
            className="flex items-center justify-center w-6 h-6 border-2 border-blue-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900"
          >
            {todo.completed && <i className="ri-check-line text-blue-500"></i>}
          </label>
        </div>
        {editTodo ? (
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className={`text-xl w-full bg-transparent outline-none ${
              todo.completed
                ? "line-through text-gray-500"
                : "text-gray-800 dark:text-gray-200"
            } transition-colors duration-300`}
          />
        ) : (
          <span
            className={`text-xl ${
              todo.completed
                ? "line-through text-gray-500"
                : "text-gray-800 dark:text-gray-200"
            } transition-colors duration-300`}
          >
            {input}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        {editTodo ? (
          <button
            onClick={() => {
              handleEdit(todo.id, input);
            }}
            className="p-2 text-green-600 hover:text-white hover:bg-green-600 rounded-full transition-colors duration-300 cursor-pointer h-10 w-10"
            aria-label="Save edit"
          >
            <i className="ri-check-line text-xl"></i>
          </button>
        ) : (
          <button
            onClick={() => setEditTodo(true)}
            className="p-2 text-blue-600 hover:text-white hover:bg-blue-600 rounded-full transition-colors duration-300 cursor-pointer h-10 w-10"
            aria-label="Edit todo"
          >
            <i className="ri-edit-line text-xl"></i>
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-red-600 hover:text-white hover:bg-red-600 rounded-full transition-colors duration-300 cursor-pointer h-10 w-10"
          aria-label="Delete todo"
        >
          <i className="ri-delete-bin-line text-xl"></i>
        </button>
      </div>
    </li>
  );
};

export default Todo;
