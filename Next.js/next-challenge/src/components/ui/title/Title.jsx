import React from "react";
import styles from "./styles.module.css";

export const Title = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};
