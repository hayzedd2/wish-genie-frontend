import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SettingsForm from "../components/settings-form";
import { Suspense } from "react";
import Loading from "@/wishes/Loading";

const settingsPage = async ({ params }: { params: { wishId: string } }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const wish = await prismadb.wishes.findFirst({
    where: {
      wishId: params.wishId,
      userId,
    },
  });
  if (!wish) {
    redirect("/yourwishes");
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SettingsForm initialData={wish} />
      </Suspense>
    </>
  );
};

export default settingsPage;
