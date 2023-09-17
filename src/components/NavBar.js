import React, { useState } from "react";
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

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={twMerge(
        "relative group text-light dark:text-dark my-2",
        className
      )}
      onClick={handleClick}
    >
      {title}
      <span
        className={twMerge(
          "h-[1px] inline-block bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark",
          router.asPath === href ? "w-full" : "w-0"
        )}
      >
        &nbsp;
      </span>
    </button>
  );
};

const CustomSocialLink = ({ children, href, className = "" }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      className={twMerge("w-6 sm:mx-1", className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={twMerge(
            "bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out",
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          )}
        ></span>
        <span
          className={twMerge(
            "bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        ></span>
        <span
          className={twMerge(
            "bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5 transition-all duration-300 ease-out",
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          )}
        ></span>
      </button>
      <div className="flex items-center justify-between w-full lg:hidden">
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
      </div>
      {isOpen ? (
        <motion.div
          className="min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Project"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex flex-wrap items-center justify-center">
            <CustomSocialLink href="/" className="mx-3">
              <TwitterIcon />
            </CustomSocialLink>
            <CustomSocialLink
              href="/"
              className="mx-3 rounded-full bg-light dark:bg-dark"
            >
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
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
