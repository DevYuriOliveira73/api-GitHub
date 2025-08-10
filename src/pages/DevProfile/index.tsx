import styles from "./DevProfile.module.css";
import Main from '../../components/Main'
import Aside from '../../components/Aside'


export default function DevProfile() {
  return (
    <section className={styles.container}>
      <header>
        <h1 className={styles.title}>
          <span>Search </span>
          <span>d_evs</span>
        </h1>
      </header>
      <Aside />
      <Main />
    </section>
  );
}
