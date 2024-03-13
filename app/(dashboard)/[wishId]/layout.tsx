import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Dashboard({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id : number };
}) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const wish = await prismadb.wishes.findFirst({
    where: {
      id: params.id,
      userId,
    },
  });
  if (!wish) {

    redirect("/addwish");
   
  }
  return <>{children}</>;
}
