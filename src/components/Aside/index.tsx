import { Avatar } from "@chakra-ui/react";
import styles from "./Aside.module.css";
import InfoProfile from "../InfoProfile";

export default function Aside() {
  return (
    <aside className={styles.container}>
      <div className={styles.nick}>
        <Avatar name="Usuário" src="/avatar.png" />
        <div>
          <p>Diego Silma</p>
          <small>@diego.ssilva</small>
        </div>
      </div>
      <div className={styles.follower}>
        <InfoProfile image="/public/GroupUser.svg" info="240 seguidores" />
        <InfoProfile image="/public/heart.svg" info="24 seguindo" />
      </div>
      <p className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestia
        obcaecati iste voluptate soluta odio cumque quam architecto, impedit a
        minima laboriosam reiciendis officiis ex at non voluptas natus illo
        repudiandae.
      </p>

      <div className={styles.layout_info}>
        <InfoProfile
          image="/public/building-office-work-square.svg"
          info="Petize"
        />
        <InfoProfile image="/public/Location.svg" info="São Paulo" />
        <InfoProfile
          image="/public/email-mail-style-4-big.svg"
          info="diego@petize.com.br"
        />
        <InfoProfile
          image="/public/link-angle-right.svg"
          info="www.diegosilva.com.br"
        />
        <InfoProfile image="/public/Twitter.svg" info="@diegosilva" />
      </div>
    </aside>
  );
}
