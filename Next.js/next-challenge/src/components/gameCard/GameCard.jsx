import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Title } from "../ui/title/Title";
import PropTypes from "prop-types";

export const GameCard = ({ title, price, image, link, description }) => {
  return (
    <>
      <Title title={title}></Title>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image src={image} alt="Imagem do jogo" width={1240} height={490} />
        </div>
        <div className={styles.buyInfo}>
          <p className={styles.buyPrice}>
            <strong>Preço:</strong> R$ {price}.00
          </p>
          <a href={link} className={styles.buyButton}>
            Comprar
          </a>
        </div>
        <div className={styles.cardContent}>
          <p
            className={styles.cardDescription}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </>
  );
};

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default GameCard;
