import { Header } from "@/components/header/header";
import { About } from "@/components/about/About";
import "@fontsource/montserrat";
import "@fontsource/press-start-2p";

export default function Home() {
  return (
    <>
      <Header icon="image.svg" />
      <About />
    </>
  );
}
