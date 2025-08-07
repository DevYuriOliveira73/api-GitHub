import styles from "./Search.module.css";
import { useRef } from "react";
export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {}

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <span>Search </span>
        <span>d_evs</span>
      </h1>

      <form className={styles.input}>
        <img
          src="/leading-icon.svg"
          alt="magnifying glass"
          className={styles.lupa}
        />
        <input ref={inputRef} placeholder="Search" />
      </form>
    </section>
  );
}
