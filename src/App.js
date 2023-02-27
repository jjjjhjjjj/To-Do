import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <>
      <Header filter={filter} onChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
