import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";

export const WorkingModel = ({ text = "" }) => {
  return (
    <div className={styles.tag}>
      <div className={styles.wm}>{text}</div>
    </div>
  );
};

WorkingModel.propTypes = {
  text: PropTypes.string,
};

export default WorkingModel;

