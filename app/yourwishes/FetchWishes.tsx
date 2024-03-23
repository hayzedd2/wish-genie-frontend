import React from "react";
import { auth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const FetchWishes = async () => {
  const { userId } = auth();
  //   const {isSignedIn , user} = useUser()
  if (!userId) {
    redirect("/sign-in");
  }
  //   if(!isSignedIn){
  //     return null
  //   }
  //   console.log(user)
  console.log(useUser);
  const wishes = await prismadb.wishes.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="overall-wish-box flex flex-col gap-[2.15rem]">
      {wishes.map((wish) => (
        < Link href={`/settings/${wish.id}`}
          className="wish-box flex items-center justify-between"
          key={wish.id}
        >
          <div className="img-text-flex flex items-center gap-4 text-white">
            <div className="w-14 h-14 rounded-full bg-red-600"></div>
            <div>
              <h3 className="font-[600] text-[1.15rem]">{wish.wish_name}</h3>
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
      ))}
    </div>
  );
};

export default FetchWishes;
