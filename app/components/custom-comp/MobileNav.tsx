"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/components/custom-comp/images/Union.svg";
import { HiMenuAlt4 } from "react-icons/hi";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { TiTimes } from "react-icons/ti";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = () => {
  const [navOpen, isNavopen] = useState(false);
  const pathname = usePathname()
  const handleNav = () => {
    isNavopen(!navOpen);
  };

  useEffect(() => {
   isNavopen(false)
  } ,[pathname]);
  
  return (
    <nav className="px-5 xl:hidden sm:flex items-center justify-between relative">
      <div
        className={`${
          navOpen ? "block" : "hidden"
        } bg-primarybg z-50 absolute left-0 right-0 top-20  bottom-0 min-h-[80vh] w-full`}
      >
        <ul className="flex gap-5 flex-col p-5  font-[500] text-[1.25rem] text-white">
          <li>
            <Link href={"/wishes"}>Explore</Link>
          </li>
          <li>
            <Link href={"/yourwishes"}>Your wishes</Link>
          </li>
        </ul>
        <div className="flex gap-4 flex-col items-center px-4 mt-2 w-full">
          <Link href={"/addwish"} className="w-full">
            <Button variant={"primary"} className="w-full py-6">
              New Wish
            </Button>
          </Link>
          <Link href={"/wishes"} className="w-full">
            <Button variant={"secondarybtn"} className="w-full py-6">
              Give
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="logo" className="w-5 h-5" />
        <h1 className="text-[1.3rem] text-white font-work font-[600] py-6">
          WishGenie
        </h1>
      </div>
      <div className="burger text-white text-[2rem] cursor-pointer flex items-center gap-2">
        {!navOpen ? (
          <HiMenuAlt4 onClick={handleNav} />
        ) : (
          <TiTimes onClick={handleNav} />
        )}
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </nav>
  );
};

export default MobileNav;
