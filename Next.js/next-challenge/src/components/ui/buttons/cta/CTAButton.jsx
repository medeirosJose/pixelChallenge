import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./styles.module.css";

const CTAButton = ({ text, link, onClick }) => {
  return (
    <Link href={link || "#"}>
      <button className={styles.button_cta} onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

CTAButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

export default CTAButton;
