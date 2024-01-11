import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";

export const Tag = ({ text = "" }) => {
  return (
    <div className={styles.tag}>
      <div className={styles.aux}>{text}</div>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string,
};

export default Tag;