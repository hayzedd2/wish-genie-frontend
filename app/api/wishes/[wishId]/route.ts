import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { auth, useUser } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function PATCH(
  req: Request,
  { params }: { params: { wishId: string } }
) {
  try {
    const { userId } = auth();
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
    const user = userId ? await clerkClient.users.getUser(userId) : redirect('/sign-in');
    const user_name = user.username;
    const user_image = user.imageUrl;
    const user_fullname = user.firstName + " " + user.lastName;
    const user_email = user.emailAddresses[0].emailAddress
    const wish = await prismadb.wishes.update({
      where: {
        wishId: params.wishId,
        userId,
      },
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
  } catch (err) {
    console.log("[STORE_UPDATE]", err);
    return new NextResponse("internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { wishId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const wish = await prismadb.wishes.delete({
      where: {
        wishId: params.wishId,
        userId
      },
    });
    return NextResponse.json(wish);
  } catch (err) {
    console.log("[STORE_DELETE]", err);
    return new NextResponse("internal error", { status: 500 });
  }
}
