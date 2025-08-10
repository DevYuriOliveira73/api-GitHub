import { useRef } from "react";

import styles from "./DevProfile.module.css";
import Main from "../../components/Main";
import Aside from "../../components/Aside";

export default function DevProfile() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputRef.current?.value);
  }

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span>Search </span>
          <span>d_evs</span>
        </h1>

        <form onSubmit={handleSubmit} className={styles.container_input}>
          <img
            src="/leading-icon.svg"
            alt="magnifying glass"
            className={styles.lupa}
          />
          <input ref={inputRef} className={styles.input} placeholder="Search" />
        </form>
      </header>
      <div className={styles.main}>
        <Aside />
        <Main />
      </div>
    </section>
  );
}
