import React from "react";
import styles from "./styles.module.css";
import CardCareer from "../card/CardCareer";
import Link from "next/link";

export const Career = ({ data }) => {
  return (
    <>
      <div id="career">
        <div className={styles.title}>Carreira</div>
        <div className={styles.career}>
          <div className={styles.cardsGroup}>
            {data.map((data, index) => (
              <div className={styles.card} key={index}>
                <Link href={`/jobForm?roleText=${data.roleText}`}>
                  <CardCareer
                    roleText={data.roleText}
                    workingModelText={data.workingModelText}
                    tagText={data.tagText}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
