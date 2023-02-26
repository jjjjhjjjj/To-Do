import { useState } from "react";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "강의 보기", status: "Completed" },
    { id: 2, text: "카페가기", status: "Active" },
    { id: 3, text: "청소하기", status: "Active" },
  ]);
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
