import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const FetchWishes = async ({ categorySlug }: any) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const wishes = await prismadb.wishes.findMany({
    where: {
      wish_category: categorySlug == "all" ? {} : categorySlug,
      NOT: {
        userId: userId,
      },
    },
  });
  const wishCat = [
    {
      wishname: "All",
      wishendpoint: "all",
    },
    {
      wishname: "Tech",
      wishendpoint: "tech",
    },
    {
      wishname: "Education",
      wishendpoint: "education",
    },
    {
      wishname: "Travel",
      wishendpoint: "travel",
    },
    {
      wishname: "Health",
      wishendpoint: "health and wellness",
    },
    {
      wishname: "Other",
      wishendpoint: "other",
    },
  ];
  return (
    <div className="overall-wish-box flex flex-col gap-[2.15rem]">
      {/* {wishes.length <= 0 && categorySlug ? (
        <>
          {" "}
          <div className="flex my-6 gap-4">
            {wishCat.map((cat, index) => {
              return (
                <Link href={`wishes?category=${cat.wishendpoint}`}>
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
          <div className="w-full flex flex-col mt-20 items-center justify-center gap-3">
            <h2 className="text-white text-[1.7rem]">
              There are currently no wishes under this category
            </h2>
            <Link href={"/addwish"}>
              <Button variant={"primary"} className="text-[1.15rem] py-6 px-6">
                Create new Wish
              </Button>
            </Link>
          </div>{" "}
        </>
      ) : (
        <section>
          <div className="heading my-5 max-w-[75rem] mx-auto">
            <h1 className="text-white text-[1.7rem] font-[800]">
              Explore Wishes
              {categorySlug}
            </h1>
            <div className="flex my-6 gap-4">
              {wishCat.map((cat, index) => {
                return (
                  <Link href={`wishes?category=${cat.wishendpoint}`}>
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
      )} */}
      {wishes.length <= 0 && !categorySlug ? (
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
        <section className=" xl:px-0 sm:px-5">
          <div className="heading my-5 xl:max-w-[75rem] sm:max-w-none mx-auto">
            <h1 className="text-white xl:text-[1.7rem] sm:text-[1.3rem] font-[800]">
              Explore Wishes
            </h1>
            <div className=" xl:my-6 sm:my-3 gap-3  w-full flex overflow-auto">
              {wishCat.map((cat, index) => {
                return (
                  <Link href={`wishes?category=${cat.wishendpoint}`}>
                    <div
                      key={index}
                      className="text-[1rem] font-[500] overflow-auto py-2 px-5 capitalize rounded-[4px] bg-[#292939] text-white"
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
                  className="wish-box flex items-center xl:flex-nowrap sm:flex-wrap xl:justify-between sm:justify-end"
                  key={wish.id}
                >
                  <div className="img-text-flex flex items-center gap-4 text-white">
                    {wish.user_image ? (
                      <Image
                        src={wish.user_image}
                        width={50}
                        height={50}
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
