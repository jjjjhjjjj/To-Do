import styles from "./Header.module.css";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useDark } from "../../context/DarkContext";

export default function Header({ filter, onChange }) {
  const { darkMode, toggleDarkMode } = useDark();

  return (
    <header className={styles.header}>
      <button type="button" className={styles.dark} onClick={toggleDarkMode}>
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((f, index) => (
          <li key={index}>
            <button
              className={`
              ${styles.filter} ${f === filter && styles.selected}`}
              type="button"
              onClick={() => onChange(f)}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

const filters = ["All", "Active", "Completed"];
