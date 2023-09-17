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
  SunIcon,
  MoonIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={twMerge(className, "relative group")}>
      {title}
      <span
        className={twMerge(
          "h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light",
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
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light">
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
        <CustomSocialLink href="/" className="mx-3 rounded-full bg-light">
          <PinterestIcon />
        </CustomSocialLink>
        <CustomSocialLink href="/" className="ml-3">
          <DribbbleIcon />
        </CustomSocialLink>
        <button
          type="button"
          className={twMerge(
            "flex items-center justify-center p-1 ml-3 rounded-full",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
