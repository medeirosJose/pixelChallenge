import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useBreakpoint from "../../hooks/useBreakpoints";

export const Header = () => {
  const router = useRouter();
  const breakpoint = useBreakpoint();

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

  function myFunction() {
    var x = document.getElementById("escondidinho");
    if (x.style.right === "-1000px") {
      x.style.right = "0px";
    } else {
      x.style.right = "-1000px";
    }
  }

  const handleButtonClickMobile = (path) => {
    myFunction();
    if (router.pathname !== "/") {
      router.push("/");

      setTimeout(() => scrollToSection(path), 500);
    } else {
      scrollToSection(path);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerItems}>
        {breakpoint >= 960 ? (
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

            <div className={styles.menu} id={"myLinks"}>
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
              <ScrollLink
                to="career"
                smooth={true}
                offset={-50}
                duration={1000}
              >
                <button
                  className={`${styles.menuItem} ${styles.carreira}`}
                  onClick={() => handleButtonClick("career")}
                >
                  Carreira
                </button>
              </ScrollLink>
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
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
              <div className={styles.sanduiche}>
                <a className={styles.icon} onClick={myFunction}>
                  <img src="/sanduiche.svg" alt="Icon" />
                </a>
              </div>
            </div>
          </>
        )}
        <div
          id="escondidinho"
          style={{
            position: "fixed",
            zIndex: 999,
            backgroundColor: "black",
            width: "100%",
            height: "100%",
            top: "0",
            display: breakpoint >= 960 ? "none" : "block",
            right: -1000,
            transition: "all 0.75s ease-in-out",
          }}
        >
          <div
            className={styles.sanduiche}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              backgroundColor: "white",
            }}
          >
            <a className={styles.icon} onClick={myFunction}>
              <img src="/sanduiche.svg" alt="Icon" />
            </a>
          </div>
          <div className={styles.groupMobile}>
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

            <div className={styles.menuMobile} id={"myLinks"}>
              <ScrollLink to="games" smooth={true} offset={-50} duration={1000}>
                <button
                  className={styles.menuItem}
                  onClick={() => handleButtonClickMobile("games")}
                >
                  Jogos
                </button>
              </ScrollLink>
              <ScrollLink to="about" smooth={true} offset={-50} duration={1000}>
                <button
                  className={styles.menuItem}
                  onClick={() => handleButtonClickMobile("about")}
                >
                  Sobre
                </button>
              </ScrollLink>
              <NextLink href="/blog">
                <button
                  className={styles.menuItem}
                  onClick={() => handleButtonClickMobile("blog")}
                >
                  Blog
                </button>
              </NextLink>
              <ScrollLink
                to="career"
                smooth={true}
                offset={-50}
                duration={1000}
              >
                <button
                  className={`${styles.menuItem} ${styles.carreira}`}
                  onClick={() => handleButtonClickMobile("career")}
                >
                  Carreira
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
