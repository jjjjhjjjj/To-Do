import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="App">
      <Header filter={filter} onChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
