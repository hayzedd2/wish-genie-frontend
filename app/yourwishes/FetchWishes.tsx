
import React from "react";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
const FetchWishes = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const wishes = await prismadb.wishes.findMany({
    where: {
      userId,
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
            You do not have any wish created at this time.
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
            <h1 className="text-white text-[1.7rem] font-[800]">Your Wishes</h1>
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
                  href={`/mywishes/${wish.wishId}`}
                  className="wish-box flex items-center justify-between"
                  key={wish.id}
                >
                  <div className="img-text-flex flex items-center gap-4 text-white">
                  {wish.user_image ? (
                      <Image
                        src={wish.user_image}
                        width={55}
                        height={55}
                        className="rounded-full"
                        alt="user_image"
                      />
                    ) : null}
                    <div>
                      <h3 className="font-[600] text-[1.15rem]">
                        {wish.wish_name}
                      </h3>
                      <p className="text-[1rem] mt-[0.15rem] text-[#9E9EB8] font-[600]">
                        {wish.wish_description}
                      </p>
                    </div>
                  </div>
                  <div></div>
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
