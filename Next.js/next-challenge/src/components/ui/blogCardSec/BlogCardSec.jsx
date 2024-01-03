import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const BlogCardSec = ({ title, image, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={image} alt="Imagem do post" width={390} height={220} />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
    </div>
  );
};

BlogCardSec.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default BlogCardSec;
