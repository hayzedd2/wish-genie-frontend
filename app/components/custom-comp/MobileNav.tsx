import Image from "next/image";
import React from "react";
import logo from "@/components/custom-comp/images/Union.svg";
import { HiMenuAlt4 } from "react-icons/hi";
const MobileNav = () => {
  return (
    <nav className="px-5 xl:hidden sm:flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="logo" className="w-5 h-5" />
        <h1 className="text-[1.3rem] text-white font-work font-[600] py-6">
          WishGenie
        </h1>
      </div>
      <div className="burger text-white text-[2rem] cursor-pointer">
        <HiMenuAlt4 />
      </div>
    </nav>
  );
};

export default MobileNav;
