import { BsFillTrashFill } from "react-icons/bs";

export default function Todo({ todo, onUpdate, onDelete }) {
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? "Completed" : "Active" });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.status === "Completed"}
        onChange={(e) => handleChange(e)}
      />
      <p>{todo.text}</p>
      <button type="button" onClick={() => onDelete(todo.id)}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
