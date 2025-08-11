import styles from "./InfoPerfil.module.css";

interface IInfoProfile {
  image: string;
  info: string;
}

export default function InfoProfile({ image, info }: IInfoProfile) {
  return (
    <div className={styles.info_profile}>
      <img src={image} alt={image} />
      <p>{info}</p>
    </div>
  );
}
