import React from "react";
import styles from "./styles.module.css";
import CardCareer from "../card/CardCareer";
import Link from "next/link";

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
            <Link href="/jobForm">Link to Form</Link>
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
