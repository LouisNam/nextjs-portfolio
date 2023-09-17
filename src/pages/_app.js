import NavBar from "@/components/NavBar";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
