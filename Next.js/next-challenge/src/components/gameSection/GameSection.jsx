import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export const GameSection = ({ gameData }) => {
  return (
    <div className={styles.gameSection} id="games">
      <div className={styles.teste}>
        <Link
          href={{
            pathname: "/game",
            query: { data: JSON.stringify(gameData[0]) },
          }}
          as={`/game/${gameData[0].title}`}
        >
          <div className={styles.gameImageMain}>
            <img src={gameData[0].img} alt="Icon" />
          </div>
        </Link>
      </div>
      <div className={styles.gameContainer}>
        {gameData.map((game, i) => {
          if (i > 0) {
            return (
              <Link
                href={{
                  pathname: "/game",
                  query: { data: JSON.stringify(game) },
                }}
                as={`/game/${game.title}`}
              >
                <div className={styles.gameImageSec}>
                  <Image src={game.img} alt="Icon" width={400} height={300} />
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

GameSection.propTypes = {
  gameData: PropTypes.object.isRequired,
};

export default GameSection;
