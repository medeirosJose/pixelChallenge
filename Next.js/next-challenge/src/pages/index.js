import { Header } from "@/components/header/header";
import { About } from "@/components/about/About";
import { Career } from "@/components/career/Career";
import { Footer } from "@/components/footer/Footer";

import "@fontsource/montserrat";
import "@fontsource/press-start-2p";

export default function Home() {
  return (
    <>
      <Header icon="image.svg" />
      <About />
      <Career />
      <Footer />
    </>
  );
}
