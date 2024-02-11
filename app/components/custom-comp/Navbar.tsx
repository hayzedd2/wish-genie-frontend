import Image from "next/image";
import React from "react";
import logo from "@/components/custom-comp/images/Union.svg";
const Navbar = () => {
  return (
    <nav className="bg-red-900">
      <Image src={logo} alt="logo" />
    </nav>
  );
};

export default Navbar;
