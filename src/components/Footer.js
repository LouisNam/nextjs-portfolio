import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light">
      <Layout className="flex items-center justify-between py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With
          <span className="px-1 text-2xl text-primary dark:text-primaryDark">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="/"
            className="underline underline-offset-2"
            target="_blank"
          >
            TeeYork
          </Link>
        </div>
        <Link href="/" className="underline underline-offset-2" target="_blank">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
