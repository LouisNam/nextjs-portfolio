import React from "react";
import { twMerge } from "tailwind-merge";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={twMerge(
        "w-full h-full inline-block z-0 bg-light p-32",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
