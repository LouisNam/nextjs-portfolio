import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-32 py-8 font-medium">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Articles</Link>
      </nav>
      <Logo />
      {/* <div className="flex items-center justify-center mt-2">
        <MotionLink
          href="/"
          className="flex items-center justify-center w-16 h-16 text-2xl font-bold rounded-full bg-dark text-light"
          whileHover={{ scale: 1.5 }}
        >
          Tee
        </MotionLink>
      </div> */}
      <nav>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
