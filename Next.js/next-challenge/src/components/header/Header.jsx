import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const aviso = (text) => {
  alert(text);
};

export const Header = ({ icon = "icon.svg" }) => {
  const handleButtonClick = (message) => {
    aviso(message);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerItems}>
        <div className={styles.group}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <p className={styles.JOJOS}>
                <span className={styles.span}>JOJOS</span>
              </p>
            </Link>
            <Image src="/logo.svg" alt="Icon" width={50} height={50} />
          </div>
          <div className={styles.menu}>
            <Link href="/">
              <button className={styles.menuItem}>Jogos</button>
            </Link>
            <Link href="">
              <button
                className={styles.menuItem}
                onClick={() => handleButtonClick("Deve mover para baixo")}
              >
                Sobre
              </button>
            </Link>
            <Link href="/blog">
              <button className={styles.menuItem}>Blog</button>
            </Link>
            <Link href="">
              <button
                className={`${styles.menuItem} ${styles.carreira}`}
                onClick={() => handleButtonClick("Deve mover para baixo")}
              >
                Carreira
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
