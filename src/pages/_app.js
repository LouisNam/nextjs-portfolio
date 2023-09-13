import Head from "next/head";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar></NavBar>
        <Component {...pageProps} />
      </main>
    </>
  );
}
