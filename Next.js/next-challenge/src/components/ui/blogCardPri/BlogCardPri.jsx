// components/ui/blogCardSec/BlogCardSec.jsx
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import Link from "next/link";

const BlogCardSec = ({ title, image, link, description, author, date }) => {
  return (
    <div className={styles.card}>
      <Link href={`/blog/${encodeURIComponent(link)}`}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardImage}>
            <Image
              src={image}
              alt="Imagem do post"
              width={390}
              height={220}
              style={{ borderRadius: "3px" }}
            />
          </div>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{title}</h2>
            {description && (
              <p className={styles.cardDescription}>{description}</p>
            )}
            {author && date && (
              <p className={styles.cardAuthorDate}>
                Por {author}, {date}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

BlogCardSec.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
};

export default BlogCardSec;
