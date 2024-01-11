import "@/styles/globals.css";
import "@fontsource/press-start-2p";
import "@fontsource/montserrat";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
