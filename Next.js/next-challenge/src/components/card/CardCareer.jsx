import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

import WorkingModel from "./workingModel/WorkingModel";
import Role from "./role/role";
import Tag from "./tag/Tag";

const CardCareer = ({ workingModelText, roleText, tagText }) => {
  return (
    <div className={styles.cardCareer}>
      <div className={styles.roleTitle}>
        <Role text={roleText} />
      </div>
      <div className={styles.tags}>
        <WorkingModel text={workingModelText} />
        <Tag text={tagText} />
      </div>
    </div>
  );
};

CardCareer.propTypes = {
  workingModelText: PropTypes.string,
  roleText: PropTypes.string,
  tagText: PropTypes.string,
};

export default CardCareer;
