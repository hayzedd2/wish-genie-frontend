import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SettingsForm from "../components/settings-form";

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
      <SettingsForm initialData={wish} />
    </>
  );
};

export default settingsPage