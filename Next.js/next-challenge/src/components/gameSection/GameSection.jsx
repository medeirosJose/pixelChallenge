import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
//! descobrir um jeito melhor de fazer isso
export const GameSection = ({ img1, img2, img3, img4 }) => {
  return (
    <div className={styles.gameSection}>
          <div className={styles.gameImageMain}>
            <Image src={img1} alt="Icon" width={1240} height={490} />
          </div>
          <div className={styles.gameContainer}>
            <div className={styles.gameImage}>
              <Image src={img2} alt="Icon" width={400} height={300} />
            </div>
            <div className={styles.gameImage}>
              <Image src={img3} alt="Icon" width={400} height={300} />
            </div>
            <div className={styles.gameImage}>
              <Image src={img4} alt="Icon" width={400} height={300} />
            </div>
          </div>
          <div className={styles.menu}></div>
    </div>
  );
};

GameSection.propTypes = {
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
