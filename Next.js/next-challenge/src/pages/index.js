import { Header } from "@/components/header/header";
import { About } from "@/components/about/About";
import { Career } from "@/components/career/Career";
import { Footer } from "@/components/footer/Footer";
import GameSection from "@/components/gameSection/GameSection";
import "@fontsource/montserrat";
import "@fontsource/press-start-2p";

export default function Home() {
  const gamesData = [
    {
      title: "Pacman",
      img: "/pacman.png",
      price: "R$ 10.00",
      description:
        " Pac-Man é um clássico jogo de arcade lançado em 1980. Os jogadores assumem o controle de Pac-Man, um personagem amarelo redondo, e seu objetivo é comer todos os pontos em um labirinto enquanto evita os fantasmas coloridos que o perseguem. Ao comer pontos especiais, os fantasmas se tornam vulneráveis e podem ser engolidos por Pac-Man para ganhar pontos extras. Com sua jogabilidade simples e viciante, Pac-Man conquistou milhões de jogadores e se tornou um fenômeno cultural, com seu personagem e design visual se tornando ícones da cultura pop. Em Pac-Man, os jogadores precisam mostrar habilidades rápidas de raciocínio e estratégia para evitar os fantasmas enquanto procuram o caminho ideal pelo labirinto. <br><br>Além dos pontos regulares, bônus e frutas especiais aparecem em momentos-chave, adicionando uma dose extra de emoção e recompensa ao jogo. Com seu design cativante e desafios envolventes, Pac-Man oferece uma experiência divertida e nostálgica, capaz de entreter jogadores de todas as idades.<br><br>Desde seu lançamento, Pac-Man transcendeu os arcades e se tornou um verdadeiro ícone da cultura pop. Sua popularidade perdura até hoje, com referências em várias formas de mídia e uma base de fãs apaixonada. Se você está em busca de uma aventura eletrizante e viciante, não perca a chance de jogar Pac-Man e experimentar a diversão atemporal que conquistou o mundo dos videogames. Prepare-se para embarcar em uma jornada emocionante enquanto come pontos, evita fantasmas e mergulha em um dos jogos mais adorados de todos os tempos.",
    },
    {
      title: "Pacman2",
      img: "/pacman2.png",
      price: "20",
      description: "Pacman game made with React and Typescript",
    },
    {
      title: "Space Invaders",
      img: "/space.png",
      price: "30",
      description:
        "Space Invaders é um clássico jogo de arcade que foi lançado pela primeira vez em 1978 pela Taito, um desenvolvedor japonês. Foi criado por Tomohiro Nishikado e tornou-se um dos jogos mais icônicos da era de ouro dos jogos de arcade. O jogo foi fundamental para o sucesso e popularização da indústria de videogames. A jogabilidade é simples, mas desafiadora. O jogador controla uma nave espacial que pode se mover horizontalmente na parte inferior da tela. O objetivo é destruir ondas de invasores alienígenas que descem em direção à nave do jogador. Os invasores se movem de um lado para o outro e gradualmente descem, tornando-se mais rápidos à medida que o jogador avança nos níveis. Os invasores alienígenas estão dispostos em forma de colunas e fileiras, e o jogador deve atirar neles antes que alcancem o solo. A nave do jogador também precisa evitar os disparos dos invasores. À medida que o jogador avança, a velocidade e a agressividade dos invasores aumentam, aumentando o desafio. O jogo é notável por suas mecânicas simples, gráficos retro e trilha sonora marcante. Sua influência na cultura dos videogames é imensa, sendo um dos primeiros jogos a popularizar o gênero de tiro espacial. A jogabilidade viciante e a simplicidade intemporal garantiram que Space Invaders permanecesse na memória dos jogadores e continuasse sendo referência na história dos videogames.",
    },
    {
      title: "Tetris",
      img: "/tetris.png",
      price: "40",
      description:
        "Tetris é um clássico jogo de quebra-cabeça que foi criado por Alexey Pajitnov, um programador russo, e lançado em 1984. Desde então, tornou-se um dos jogos mais conhecidos e jogados em todo o mundo, disponível em uma ampla variedade de plataformas. A jogabilidade de Tetris é simples, mas desafiadora. O jogo apresenta blocos tetrimino, cada um composto por quatro quadrados. Os tetriminos descem do topo da tela, e o jogador precisa rotacioná-los e movê-los horizontalmente para encaixá-los e formar linhas horizontais completas. Quando uma linha é completada, ela desaparece, e o jogador ganha pontos.O desafio do jogo aumenta à medida que os tetriminos descem mais rapidamente, exigindo raciocínio rápido e habilidades de tomada de decisão. Se os blocos se acumularem até o topo da tela, o jogo termina. Tetris é conhecido por sua trilha sonora cativante e por sua capacidade de proporcionar uma experiência de jogo simples, mas altamente viciante. Sua natureza acessível e a capacidade de desafiar jogadores de todos os níveis contribuíram para o seu sucesso duradouro. Ao longo dos anos, Tetris continuou a evoluir e adaptar-se a diferentes plataformas, mantendo seu lugar como um dos jogos mais amados e influentes da história dos videogames.",
    },
  ];
  return (
    <>
      {console.log("na home", gamesData)}
      <Header icon="image.svg" />
      <GameSection
        gameData={gamesData}
        img1="/pacman.png"
        img2="/pacman2.png"
        img3="/space.png"
        img4="/tetris.png"
      />
      <About />
      <Career />
      <Footer />
    </>
  );
}
