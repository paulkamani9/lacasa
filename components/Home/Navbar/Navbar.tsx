"use client";

import { navLinks } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type NavbarProps = {
  openNav: () => void;
};

const Navbar = ({ openNav }: NavbarProps) => {
  const [navBg, setNavBg] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed h-[10vh] z-[100] w-full transition-all duration-200 ${
        navBg && pathName !== "" ? "bg-black/90" : ""
      }`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto py-1">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-[65.25px] h-[56.9px] relative">
            <Image
              src={"/logos/wAndG.png"}
              alt="la casa properties logo"
              fill
              objectFit="center"
            />
          </div>
          <h1 className="font-bold text-sm sm:text-base md:text-lg text-white ">
            La Casa Properties
          </h1>
        </div>
        {/* nav links */}
        <div className="hidden lg:flex items-center space-x-14 text-white ">
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className="font-medium hover:text-yellow-300">
                {navLink.label}
              </p>
            </Link>
          ))}
        </div>
        {/* login and burger menu */}
        <div className="flex items-center space-x-4">
          {/* login button */}
          <div className="flex items-center cursor-pointer text-white space-x-2 hover:text-yellow-300 transition-all duration-200">
            <FaUserCircle className="w-5 h-5" />
            {/* <p className="font-bold text-xs sm:text-base">Admin</p> */}
          </div>
          {/* burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="lg:hidden sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
