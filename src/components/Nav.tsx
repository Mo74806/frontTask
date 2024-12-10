"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`!mb-[100px] fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between md:hidden transition-all duration-300 px-[25px] !bg-black !bg-opacity-50 !backdrop-filter !backdrop-blur-lg !shadow-lg `}
    >
      <h1 className="text-24 font-extrabold  text-white ">Front Assignment</h1>
      <MobileNav />
    </div>
  );
};

export default Nav;
