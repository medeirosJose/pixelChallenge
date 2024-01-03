import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export const GameSection = ({ gameData, img1, img2, img3, img4 }) => {
  console.log("em gamesection", gameData);
  return (
    <div className={styles.gameSection}>
      <div>
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
            console.log("gay", game);
            if (i > 0) {
              return (
                <Link
                  href={{
                    pathname: "/game",
                    query: { data: JSON.stringify(game) },
                  }}
                  as={`/game/${game.title}`}
                >
                  {console.log("gay2", game.img, i)}
                  <div>
                    <Image src={game.img} alt="Icon" width={400} height={300} />
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

GameSection.propTypes = {
  gameData: PropTypes.object.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  img4: PropTypes.string.isRequired,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
};

export default GameSection;
