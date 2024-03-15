import prismadb from "@/lib/prismadb";
import { auth, useUser } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { isSignedIn, user } = useUser();
    const body = await req.json();
    const { wish_name, wish_description, wish_category } = body;
    if (!userId) {
      return new NextResponse("unauthorized", { status: 401 });
    }
    if (!wish_name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!wish_description) {
      return new NextResponse("Description is required", { status: 400 });
    }
    if (!wish_category) {
      return new NextResponse("Category is required", { status: 400 });
    }
    if (!isSignedIn) {
      return new NextResponse("unauthorized", { status: 401 });
    }
    const user_name = user?.username 
    const user_image = user?.imageUrl
    const user_fullname = user?.fullName
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
    // console.log(typeof(user.username))

    return NextResponse.json(wish);
  } catch (error) {
    console.log("[wishes_error]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
