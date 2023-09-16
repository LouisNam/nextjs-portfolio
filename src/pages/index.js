import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePicture from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <main className="flex items-center w-full min-h-screen text-dark">
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
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/dummy.pdf"
                download={true}
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-2 border-transparent hover:border-dark"
              >
                Resume <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link
                href="mailto:dotranthainam@gmail.com"
                className="ml-4 text-lg font-medium underline capitalize text-dark"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
