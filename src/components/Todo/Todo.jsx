import { BsFillTrashFill } from "react-icons/bs";

export default function Todo({ todo }) {
  return (
    <li>
      <input type="checkbox" />
      <p>{todo.text}</p>
      <button type="button">
        <BsFillTrashFill />
      </button>
    </li>
  );
}
