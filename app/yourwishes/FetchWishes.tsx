import React from "react";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { clerkClient } from "@clerk/nextjs";
const FetchWishes = async ({ categorySlug }: any) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const wishes = await prismadb.wishes.findMany({
    where: {
      wish_category: categorySlug == "all" ? {} : categorySlug,
      userId,
    },
  });

  const user = userId
    ? await clerkClient.users.getUser(userId)
    : redirect("/sign-in");
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
      {wishes.length <= 0 && !categorySlug ? (
        <div className="w-full flex flex-col mt-20 items-center justify-center gap-3 text-center">
          <h2 className="text-white xl:text-[1.7rem] sm:text-[1.5rem]">
            You have no wishes created at this time
          </h2>
          <Link href={"/addwish"}>
            <Button variant={"primary"} className="text-[1.15rem] py-6 px-6">
              Create new Wish
            </Button>
          </Link>
        </div>
      ) : wishes.length <= 0 && categorySlug ? (
        <section className=" xl:px-0 sm:px-5">
          <div className="my-5 xl:max-w-[75rem] sm:max-w-none mx-auto">
            <h1 className="text-white xl:text-[1.7rem] sm:text-[1.3rem] font-[800]">
              Your Wishes
            </h1>
            <div className=" xl:my-6 sm:my-3 gap-3  w-full flex overflow-auto">
              {wishCat.map((cat) => (
                <Link
                  href={`yourwishes?category=${cat.wishendpoint}`}
                  key={cat.wishendpoint}
                >
                  <div className="text-[1rem] font-[500] overflow-auto py-2 px-5 capitalize rounded-[4px] bg-[#292939] text-white">
                    {cat.wishname}
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full flex flex-col mt-20 items-center justify-center gap-3 text-center">
              <h2 className="text-white [1.7rem] sm:text-[1.5rem]">
                You have no wish under this category
              </h2>
              <Link href={"/addwish"}>
                <Button
                  variant={"primary"}
                  className="text-[1.15rem] py-6 px-6"
                >
                  Create new Wish
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className=" xl:px-0 sm:px-5">
          <div className="heading my-5 xl:max-w-[75rem] sm:max-w-none mx-auto">
            <h1 className="text-white xl:text-[1.7rem] sm:text-[1.3rem] font-[800]">
              Your Wishes
            </h1>
            <div className=" xl:my-6 sm:my-3 gap-3  w-full flex overflow-auto">
              {wishCat.map((cat) => (
                <Link
                  href={`yourwishes?category=${cat.wishendpoint}`}
                  key={cat.wishendpoint}
                >
                  <div className="text-[1rem] font-[500] overflow-auto py-2 px-5 capitalize rounded-[4px] bg-[#292939] text-white">
                    {cat.wishname}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="max-w-[75rem] mx-auto">
            {wishes.map((wish) => (
              <div className="wish-container my-10" key={wish.id}>
                <Link
                  href={`/mywishes/${wish.wishId}`}
                  className="wish-box flex items-center xl:flex-nowrap sm:flex-wrap justify-between"
                >
                  <div className="img-text-flex flex items-center gap-4 w-full text-white">
                    {user ? (
                      <div
                        style={{
                          position: "relative",
                          width: "60px",
                          height: "60px",
                        }}
                      >
                        <Image
                          src={user.imageUrl}
                          alt="User image"
                          className="rounded-full"
                          // sizes="200px"
                          fill
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
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
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default FetchWishes;
