import styles from "./Header.module.css";

export default function Header({ filter, onChange }) {
  return (
    <header className={styles.header}>
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
