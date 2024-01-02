import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";

export const Role = ({ text = "" }) => {
  return (
    <div className={styles.tag}>
      <div className={styles.job}>{text}</div>
    </div>
  );
};

Role.propTypes = {
  text: PropTypes.string,
};
