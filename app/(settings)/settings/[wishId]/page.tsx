import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import SettingsForm from "../components/settings-form";
import { useRouter } from "next/router";
interface singlPageProps {
  params: { id: string };
}
const settings: React.FC<singlPageProps> = async ({ params }) => {
  const { userId } = auth();
  const router = useRouter();
  const { wishId } = router.query;

  if (!userId) {
    redirect("/sign-in");
  }
  console.log(wishId);
  console.log("daudusdvs");
  const wish = await prismadb.wishes.findFirst({
    where: {
      wishId: params.id,
      userId,
    },
  });
  if (!wish) {
    redirect("/yourwishes");
  }
  return (
    <div className="text-white text-[2rem]">
      <SettingsForm initialData={wish} />
    </div>
  );
};

export default settings;
