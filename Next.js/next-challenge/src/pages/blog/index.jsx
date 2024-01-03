import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/Footer";
import { Title } from "@/components/ui/title/Title";
import BlogCardPri from "@/components/ui/blogCardPri/BlogCardPri";
import BlogCardSec from "@/components/ui/blogCardSec/BlogCardSec";
import styles from "./styles.module.css";

export const Blog = () => {
  return (
    <>
      <Header />
      <Title title="Blog"></Title>
      <BlogCardPri
        title="O impacto dos jogos retrô na indústria de desenvolvimento de jogos"
        author="Guilherme Santos"
        date="23/04/2023"
        description="Os jogos retrô têm tido um impacto significativo na indústria de desenvolvimento de jogos, tanto do ponto de vista comercial quanto cultural. Com o ressurgimento do interesse em jogos retrô, impulsionado pela nostalgia e a busca por experiências de jogo mais simples, muitas empresas estão explorando esse gênero e desenvolvendo jogos que lembram os clássicos do passado."
      />
      <div className={styles.card}>
        <BlogCardSec
          title="Como desenvolver jogos retrô com um toque moderno"
          image="/blogImg2.png"
        />
        <BlogCardSec title="Criação de arte pixelada" image="/blogImg2.png" />
        <BlogCardSec
          title="Trilha sonora em jogos retrô"
          image="/blogImg2.png"
        />
        <BlogCardSec
          title="As influências históricas dos jogos retrô na cultura pop"
          image="/blogImg2.png"
        />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
