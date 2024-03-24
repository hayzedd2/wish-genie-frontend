import { Button } from "@/components/ui/button";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import FetchWishes from "./FetchWishes";

const Wishes = async () => {
 
  
  return (
   <FetchWishes/>
  );
};

export default Wishes;

