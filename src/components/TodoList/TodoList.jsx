import { useEffect, useState } from "react";
import InputTodo from "../InputTodo/InputTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    setTodos((todos) => [
      ...todos,
      { id: crypto.randomUUID(), text, status: "Active" },
    ]);
  };

  const handleUpdateTodo = (todo) => {
    setTodos((todos) => todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  const handleDeleteTodo = (todoId) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  };

  const filtered = () => {
    if (!todos) {
      return [];
    }
    if (filter === "All") {
      return todos;
    }

    return todos.filter((todo) => todo.status === filter);
  };

  return (
    <>
      <ul className={styles.list}>
        {filtered().map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdateTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
      <InputTodo onAdd={handleAddTodo} />
    </>
  );
}

const getTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};
