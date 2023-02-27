import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? "Completed" : "Active" });
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={todo.status === "Completed"}
        onChange={(e) => handleChange(e)}
      />
      <p className={styles.text}>{todo.text}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDelete(todo.id)}
      >
        <BsFillTrashFill />
      </button>
    </li>
  );
}
