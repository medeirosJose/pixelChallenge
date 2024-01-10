import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.title}>Sobre Nós</div>
      <div className={styles.group}>
        <div className={styles.text}>
          <span>
            {" "}
            Bem-vindo à Jojos, uma empresa de jogos retrô brasileira! Somos uma
            equipe apaixonada por games clássicos e estamos comprometidos em
            trazer de volta a magia desses títulos que marcaram época. Com
            gráficos pixelizados, trilhas sonoras envolventes e mecânicas
            desafiadoras, nossos jogos são verdadeiras homenagens aos consoles e
            computadores que encantaram o passado. Junte-se a nós e embarque em
            uma viagem nostálgica repleta de aventuras. <br />
            <br />
            Acreditamos que os jogos retrô têm o poder de unir gerações,
            despertar memórias afetivas e proporcionar momentos de pura
            diversão. Nossa missão é manter viva a essência dos jogos clássicos,
            levando você a uma jornada inesquecível pelos mundos pixelizados
            cheios de magia. Faça parte dessa nova era retrô e mergulhe em
            experiências que continuam a encantar corações até hoje. <br />
            <br />
            Jojos, onde a nostalgia encontra a diversão! Com uma equipe
            apaixonada por games, estamos comprometidos em trazer de volta a
            magia dos jogos clássicos que marcaram gerações inteiras. Explore
            nossos jogos e embarque em uma viagem nostálgica repleta de
            aventuras e desafios. Junte-se a nós e compartilhe da nossa paixão
            pelos jogos retrô!
          </span>
        </div>
        <div className={styles.img}>
          <img src="/fliperama.jpg" alt="Imagem de um fliperama" />
        </div>
      </div>
    </div>
  );
};
