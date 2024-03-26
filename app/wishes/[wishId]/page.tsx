import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SingleWish from "../components/singleWish";
import { Suspense } from "react";
import Loading from "../Loading";

const explorePage = async ({ params }: { params: { wishId: string } }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const wish = await prismadb.wishes.findFirst({
    where: {
      wishId: params.wishId,
      NOT: {
        userId,
      },
    },
  });
  if (!wish) {
    redirect("/wishes");
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SingleWish initialData={wish} />
      </Suspense>
    </>
  );
};

export default explorePage;
