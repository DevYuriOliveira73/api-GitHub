import styles from "./RepositorioUsuario.module.css";

export interface IRepositorio {
  title: string;
  description: string;
  stars: number;
  atualization: number;
}

export default function RepositorioUsuario({
  title,
  description,
  stars,
  atualization,
}: IRepositorio) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>

      <small className={styles.info}>
        <img src="/Star.svg" alt="Star" />

        <span>{stars}</span>
        <span>•</span>
        <span>
          Atualizado{" "}
          {atualization === 0
            ? "Hoje"
            : atualization === 1
            ? "Ontem"
            : `há ${atualization} dias`}
        </span>
      </small>
    </div>
  );
}
