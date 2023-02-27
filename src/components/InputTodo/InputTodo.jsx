import { useState } from "react";
import styles from "./InputTodo.module.css";

export default function InputTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return;
    }

    onAdd(text);
    setText("");
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
