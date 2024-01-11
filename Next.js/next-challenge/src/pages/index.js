// Home.jsx
import Header from "@/components/header/Header";
import { About } from "@/components/about/About";
import { Career } from "@/components/career/Career";
import { Footer } from "@/components/footer/Footer";
import GameSection from "@/components/gameSection/GameSection";
import "@fontsource/montserrat";
import "@fontsource/press-start-2p";
import { createClient } from "next-sanity";

export default function Home({ gamesData, careers }) {
  return (
    <>
      <Header icon="image.svg" />
      <GameSection gameData={gamesData} />
      <About id="about" />
      <Career data={careers} />
      <Footer />
    </>
  );
}

const client = createClient({
  projectId: "azyj2mfs",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});

export async function getStaticProps() {
  const gamesData = await client.fetch(
    `*[_type == "game"] | order(_createdAt desc) {
      title,
      price,
      description,
      "img": img.asset->url
    }`
  );
  const careers = await client.fetch(
    `*[_type == "career"] | order(_createdAt desc) {
      roleText,
      workingModelText,
      tagText,
    }`
  );
  return {
    props: {
      gamesData,
      careers,
    },
  };
}
