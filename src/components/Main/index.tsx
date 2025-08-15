import styles from "./Main.module.css";
import RepositorioUsuario, {
  type IRepositorio,
} from "../../components/RepositorioUsuario";
import { repos } from "../../mocks/repos";

export default function Main() {
  return (
    <main className={styles.container}>
      {repos.map((repo: IRepositorio) => (
        <RepositorioUsuario {...repo} />
      ))}
    </main>
  );
}
