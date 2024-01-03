import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const BlogCardPri = ({ title, author, date, description, image, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={"/blogImg1.jpg"}
          alt="Imagem do post"
          width={500}
          height={300}
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardAuthorDate}>
          Por {author}, {date}
        </p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

BlogCardPri.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogCardPri;
