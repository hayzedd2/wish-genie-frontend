import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { wish_name ,wish_description , wish_category} = body;
    if (!userId) {
      return new NextResponse("unauthorized", { status: 401 });
    }
    if (!wish_name) {
      return new NextResponse("Name is required", { status: 400});
    }
    if (!wish_description) {
      return new NextResponse("Description is required", { status: 400});
    }
    if (!wish_category) {
      return new NextResponse("Category is required", { status: 400});
    }

    const wish = await prismadb.wishes.create({
        data:{
            wish_name,
            wish_category,
            wish_description,
            userId,
        }
    })

    return NextResponse.json(wish)
  } catch (error) {
    console.log("[wishes_error]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
