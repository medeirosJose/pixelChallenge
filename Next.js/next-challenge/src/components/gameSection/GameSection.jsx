import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export const GameSection = ({ gameData }) => {
  return (
    <div className={styles.gameSection} id="games">
      <Link
        href={{
          pathname: "/game",
          query: { data: JSON.stringify(gameData[0]) },
        }}
        as={`/game/${gameData[0].title}`}
      >
        <div className={styles.gameImageMain}>
          <Image src={gameData[0].img} alt="Icon" width={1240} height={490} />
        </div>
      </Link>
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
                <div>
                  <Image src={game.img} alt="Icon" width={400} height={300}  />
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
