import Image from "next/image";
import React from "react";
import logo from "@/components/custom-comp/images/Union.svg";
import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
const Navbar = () => {
  return (
    <nav className=" bg-primarybg px-12 py-5 flex items-center justify-center">
      <div className="flex gap-4 items-center basis-[50%] ">
        <Image src={logo} alt="logo" className="w-5 h-5" />
        <h1 className="text-[1.3rem] text-white font-work font-[600]">
          WishGenie
        </h1>
      </div>
      <div className="flex gap-4 items-center justify-end basis-[50%] ">
        <ul className="flex gap-10 items-center font-[500] text-[1rem] text-white">
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Your Wishes</a>
          </li>
          <li>
            <a href="">Your Grants</a>
          </li>
        </ul>
        <div className="flex gap-4 items-center px-4">
          <Button variant={"primary"}>New Wish</Button>
          <Button variant={"secondarybtn"}>Give</Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
