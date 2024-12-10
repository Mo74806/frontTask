"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section
      className={
        "sticky left-0 top-0 flex w-fit min-w-[200px] flex-col  !px-0  justify-between   border-none  bg-black pt-8 text-white max-md:hidden lg:w-[280px] lg:pl-8 h-[calc(100vh-5px)]"
      }
    >
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer px-3 items-center gap-1 pb-10 max-lg:justify-center"
        >
          <h1 className="text-24 font-extrabold text-white ">
            Front Assignment
          </h1>
        </Link>

        {[
          { label: "Home", route: "/", icon: "/SVG/home.svg" },
          { label: "Add Post", route: "/create", icon: "/SVG/add.svg" },
        ].map(({ route, label, icon }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);

          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-3  items-center py-4 max-lg:px-5 px-3 justify-start",
                {
                  "bg-[#ffffff33] border-r-4  ": isActive,
                }
              )}
            >
              <Image src={icon} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
