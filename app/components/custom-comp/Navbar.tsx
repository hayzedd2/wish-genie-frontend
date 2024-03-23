import Image from "next/image";
import React from "react";
import logo from "@/components/custom-comp/images/Union.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
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
            <Link href={"/wishes"}>Explore</Link>
          </li>
          <li>
            <Link href={"/yourwishes"}>Your wishes</Link>
          </li>
          <li>
            <a href="">Your Grants</a>
          </li>
        </ul>
        <div className="flex gap-4 items-center px-4">
          <Link href={"/addwish"}>
            <Button variant={"primary"}>New Wish</Button>
          </Link>

          <Button variant={"secondarybtn"}>Give</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <Button variant="outline">Open</Button> */}
              <UserButton afterSignOutUrl="/"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[10.5rem] py-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2.5 my-1 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2.5 my-1 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className="mr-2.5 my-1 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
