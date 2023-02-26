import { useState } from "react";
import InputTodo from "../InputTodo/InputTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "강의 보기", status: "Completed" },
    { id: 2, text: "카페가기", status: "Active" },
    { id: 3, text: "청소하기", status: "Active" },
  ]);

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

  return (
    <>
      <ul>
        {todos.map((todo) => (
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
