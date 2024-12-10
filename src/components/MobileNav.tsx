"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import home from "../../public/SVG/home.svg";
import burgerBtn from "../../public/SVG/hamburger.svg";
const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="flex w-100 ">
      <Sheet>
        <SheetTitle></SheetTitle>
        <SheetTrigger>
          <Image
            src="/SVG/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="  cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-black">
          <h1 className="text-24 font-extrabold  text-white ml-2">
            Front Assignment
          </h1>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 text-white">
                {[
                  { label: "Home", route: "/", imgURL: "/SVG/home.svg" },
                  {
                    label: "Add Post",
                    route: "/create",
                    imgURL: "SVG/add.svg",
                  },
                ].map(({ route, label, imgURL }) => {
                  const isActive =
                    pathname === route || pathname.startsWith(`${route}/`);

                  return (
                    <SheetClose asChild key={route}>
                      <Link
                        href={route}
                        className={cn(
                          "flex gap-3 items-center py-4 max-lg:px-4 justify-start",
                          {
                            "bg-nav-focus border-r-4 border-orange-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={imgURL}
                          alt={label}
                          width={24}
                          height={24}
                        />
                        <p>{label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
