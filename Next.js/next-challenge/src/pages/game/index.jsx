import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/Footer";
import GameCard from "@/components/gameCard/GameCard";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

//! must have properties: title, price, image, link, description
export const Game = () => {
  const router = useRouter();
  console.log("em game router query", router.query);
  const data = JSON.parse(router.query.data);
  console.log("em game data", data);
  return (
    <>
      <Header />
      {console.log("em game")}
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
