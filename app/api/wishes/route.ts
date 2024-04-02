import prismadb from "@/lib/prismadb";
import { auth, useUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { wish_name, wish_description, wish_category} = body;
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
    const user = userId ? await clerkClient.users.getUser(userId) : redirect('/sign-in');
  
    const user_name = user.username;
    const user_image = user.imageUrl;
    const user_fullname = user.firstName + " " + user.lastName;
    const user_email = user.emailAddresses[0].emailAddress
    const wish = await prismadb.wishes.create({
      data: {
        wish_name,
        wish_category,
        wish_description,
        userId,
        user_name,
        user_fullname,
        user_image,
        user_email,
      },
    });
    return NextResponse.json(wish);  
  } catch (error) {
    console.log("[wishes_error]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
