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
    <section>
      <div className="conatiner max-w-[75rem] mx-auto">
        <div className="heading my-5">
          <h1 className="text-white text-[1.7rem] font-[800]">
            Your Wishes
          </h1>
          <div className="flex my-6 gap-4">
            {wishCat.map((cat, index) => {
              return (
                <Link href={cat.wishendpoint}>
                  <div
                    key={index}
                    className="pill px-5 text-[1rem] font-[500] py-2 capitalize rounded-[4px] bg-[#292939] text-white"
                  >
                    {cat.wishname}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="wish-container my-10">
         <FetchWishes/>
        </div>
      </div>
    </section>
  );
};

export default Wishes;

