import React from "react";
import styles from "./styles.module.css";
import CardCareer from "../card/CardCareer";

export const Career = () => {
  return (
    <>
      <div className={styles.title}>Carreira</div>
      <div className={styles.career}>
        <div className={styles.cardsGroup}>
          <div className={styles.card}>
            <CardCareer
              roleText="Desenvolvedor Front-End"
              workingModelText="CLT"
              tagText="DEV"
            />
          </div>
          <div className={styles.card}>
            <CardCareer
              roleText="Desenvolvedor Back-End"
              workingModelText="PJ"
              tagText="DEV"
            />
          </div>
          <div className={styles.card}>
            <CardCareer
              roleText="Cloud Engineer"
              workingModelText="CLT"
              tagText="DEV"
            />
          </div>
          <div className={styles.card}>
            <CardCareer
              roleText="Cloud Engineer"
              workingModelText="CLT"
              tagText="DEV"
            />
          </div>
        </div>
      </div>
    </>
  );
};
