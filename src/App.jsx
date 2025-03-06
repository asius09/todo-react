import { useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import TodoInput from "./components/Todo/TodoInput";
import Todo from "./components/Todo/Todo";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [todo, setTodo] = useState(1);
  const currTime = new Date().toLocaleString();
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        text: todo,
        completed: false,
        time: currTime,
        id: `todo-${todo}`,
      },
    ]);
    setTodo(todo + 1);
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const onEdit = (id, todoText) => {
    if (id && todoText) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: todoText } : todo
        )
      );
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex flex-col items-center pt-16 px-4">
      <nav className="fixed top-4 right-4">
        <ThemeBtn />
      </nav>
      <main className="w-full max-w-xl">
        <TodoInput addTodo={addTodo} />
        <ul className="mt-6 space-y-2">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
