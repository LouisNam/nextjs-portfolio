import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  PinterestIcon,
  LinkedInIcon,
  GithubIcon,
  DribbbleIcon,
} from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={twMerge(className, "relative group")}>
      {title}
      <span
        className={twMerge(
          "h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300",
          router.asPath === href ? "w-full" : "w-0"
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomSocialLink = ({ children, href, className = "" }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      className={twMerge("w-6", className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-32 py-8 font-medium">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Project" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex flex-wrap items-center justify-center">
        <CustomSocialLink href="/" className="mx-3">
          <TwitterIcon />
        </CustomSocialLink>
        <CustomSocialLink href="/" className="mx-3">
          <GithubIcon />
        </CustomSocialLink>
        <CustomSocialLink href="/" className="mx-3">
          <LinkedInIcon />
        </CustomSocialLink>
        <CustomSocialLink href="/" className="mx-3">
          <PinterestIcon />
        </CustomSocialLink>
        <CustomSocialLink href="/" className="ml-3">
          <DribbbleIcon />
        </CustomSocialLink>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </div>
  );
};

export default NavBar;
