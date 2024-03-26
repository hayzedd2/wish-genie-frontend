import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { wishId: string } }
) {
  try {
    const { userId } = auth();
    const user = auth().user;
    const body = await req.json();
    const { wish_name, wish_description, wish_category } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
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
    if (!params.wishId) {
      return new NextResponse("Invalid Wish ID", { status: 400 });
    }
    const user_name = user?.username;
    const user_image = user?.imageUrl;
    const user_fullname = user?.firstName + " " + user?.lastName;
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
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const wish = await prismadb.wishes.delete({
      where: {
        wishId: params.id,
        userId,
      },
    });
    return NextResponse.json(wish);
  } catch (err) {
    console.log("[STORE_DELETE]", err);
    return new NextResponse("internal error", { status: 500 });
  }
}
