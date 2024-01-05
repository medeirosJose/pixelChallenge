import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const handleButtonClick = (path) => {
    if (router.pathname !== "/") {
      router.push("/");

      setTimeout(() => scrollToSection(path), 500);
    } else {
      scrollToSection(path);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerItems}>
        <div className={styles.group}>
          <div className={styles.logoContainer}>
            <Image src="/logo.svg" alt="Icon" width={50} height={50} />
            <NextLink href="/">
              <p className={styles.JOJOS}>
                <span>J</span>
                <span className={styles.laranjaO}>O</span>
                <span>J</span>
                <span className={styles.laranjaO}>O</span>
                <span>S</span>
              </p>
            </NextLink>
          </div>

          <div className={styles.menu}>
            <ScrollLink to="games" smooth={true} offset={-50} duration={1000}>
              <button
                className={styles.menuItem}
                onClick={() => handleButtonClick("games")}
              >
                Jogos
              </button>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} offset={-50} duration={1000}>
              <button
                className={styles.menuItem}
                onClick={() => handleButtonClick("about")}
              >
                Sobre
              </button>
            </ScrollLink>
            <NextLink href="/blog">
              <button
                className={styles.menuItem}
                onClick={() => handleButtonClick("blog")}
              >
                Blog
              </button>
            </NextLink>
            <ScrollLink to="career" smooth={true} offset={-50} duration={1000}>
              <button
                className={`${styles.menuItem} ${styles.carreira}`}
                onClick={() => handleButtonClick("career")}
              >
                Carreira
              </button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};
