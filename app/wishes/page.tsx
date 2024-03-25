import { Button } from "@/components/ui/button";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import FetchWishes from "./FetchWishes";

const Wishes = async () => {
  const wishCat = [
    {
      wishname: "Tech",
      wishendpoint: "/random",
    },
    {
      wishname: "Education",
      wishendpoint: "/random",
    },
    {
      wishname: "Travel",
      wishendpoint: "/random",
    },
    {
      wishname: "Health & Wellness",
      wishendpoint: "/random",
    },
    {
      wishname: "Other",
      wishendpoint: "/random",
    },
  ];
  
  return (
   <FetchWishes/>
 
  );
};

export default Wishes;
