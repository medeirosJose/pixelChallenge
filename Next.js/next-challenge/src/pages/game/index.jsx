import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import GameCard from "../../components/gameCard/GameCard";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

export const Game = () => {
  const router = useRouter();
  const data = JSON.parse(router.query.data);
  return (
    <>
      <Header />
      {/* página de um jogo específico */}
      <div className={styles.card}>
        <GameCard
          title={data.title}
          price={data.price}
          image={data.img}
          link={"#"}
          description={data.description}
        />
      </div>
      <Footer />
    </>
  );
};

export default Game;
