import { BsFillTrashFill } from "react-icons/bs";

export default function Todo({ todo, onDelete }) {
  return (
    <li>
      <input type="checkbox" />
      <p>{todo.text}</p>
      <button type="button" onClick={() => onDelete(todo.id)}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
