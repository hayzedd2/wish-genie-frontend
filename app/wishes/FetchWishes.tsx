import React, { Suspense } from "react";
import { auth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FetchWishes = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  console.log(useUser);
  const wishes = await prismadb.wishes.findMany({
    where: {
      NOT: {
        userId: userId,
      },
    },
  });
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
    <div className="overall-wish-box flex flex-col gap-[2.15rem]">
      {wishes.length <= 0 ? (
        <div className="w-full flex flex-col mt-20 items-center justify-center gap-3">
          <h2 className="text-white text-[1.7rem]">
            There are currently no wishes to explore now 
          </h2>
          <Link href={"/addwish"}>
            <Button variant={"primary"} className="text-[1.15rem] py-6 px-6">
              Create new Wish
            </Button>
          </Link>
        </div>
      ) : (
        <section>
          <div className="heading my-5 max-w-[75rem] mx-auto">
            <h1 className="text-white text-[1.7rem] font-[800]">
              Explore Wishes
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

          {wishes.map((wish) => (
            <div className="max-w-[75rem] mx-auto">
              <div className="wish-container my-10">
                <Link
                  href={`/wishes/${wish.wishId}`}
                  className="wish-box flex items-center justify-between"
                  key={wish.id}
                >
                  <div className="img-text-flex flex items-center gap-4 text-white">
                    <div className="w-14 h-14 rounded-full bg-red-600"></div>
                    <div>
                      <h3 className="font-[600] text-[1.15rem]">
                        {wish.wish_name}
                      </h3>
                      <p className="text-[1rem] mt-[0.15rem] text-[#9E9EB8] font-[600]">
                        {wish.wish_description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      size={"lg"}
                      className="text-[0.98rem] font-[600] bg-[#292939]"
                    >
                      Offer to help
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default FetchWishes;
