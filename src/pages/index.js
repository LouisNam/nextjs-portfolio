import TransitionEffect from "@/components/TransitionEffect";
import ProfilePicture from "../../public/images/profile/developer-pic-1.png";
import Link from "next/link";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Layout from "@/components/Layout";
import Image from "next/image";
import HireMe from "@/components/HireMe";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tee York | Home Page</title>
        <meta name="description" content="Tee York's portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={ProfilePicture}
                alt="TeeYork"
                className="w-full h-auto"
              ></Image>
            </div>
            <div className="flex flex-col items-center self-center w-1/2">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="text-6xl text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  download={true}
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-2 border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:dotranthainam@gmail.com"
                  className="ml-4 text-lg font-medium underline capitalize text-dark dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute inline-block w-24 right-8 bottom-8">
          <Image
            src={LightBulb}
            alt="TeeYork"
            className="w-full h-auto"
          ></Image>
        </div>
      </main>
    </>
  );
}
