import { Header } from "@/components/header/header";
import { About } from "@/components/about/About";
import { Career } from "@/components/career/Career";
import { Footer } from "@/components/footer/Footer";
import GameSection from "@/components/gameSection/GameSection";
import "@fontsource/montserrat";
import "@fontsource/press-start-2p";

export default function Home() {
  return (
    <>
      <Header icon="image.svg" />
      <GameSection
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
