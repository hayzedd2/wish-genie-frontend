import prismadb from "@/lib/prismadb";
import { auth, useUser } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { user } = auth();
    const body = await req.json();
    const { wish_name, wish_description, wish_category } = body;
    if (!userId ) {
      return new NextResponse("unauthorized", { status: 401 });
    }
    // if(!user){
    //   return new NextResponse("No signed in user", { status: 503 });
    // }
    if (!wish_name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!wish_description) {
      return new NextResponse("Description is required", { status: 400 });
    }
    if (!wish_category) {
      return new NextResponse("Category is required", { status: 400 });
    }
    const user_name = user?.username
    const user_image = user?.imageUrl
    const user_fullname = user?.firstName  + ' '+ user?.lastName
    const wish = await prismadb.wishes.create({
      data: {
        wish_name,
        wish_category,
        wish_description,
        userId,
        user_name,
        user_fullname,
        user_image,
      },
    });
    return NextResponse.json(wish);
  } catch (error) {
    console.log("[wishes_error]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
