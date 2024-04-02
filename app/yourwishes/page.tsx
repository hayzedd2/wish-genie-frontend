import FetchWishes from "./FetchWishes";
import { Suspense } from "react";
import Loading from "@/wishes/Loading";

const Wishes = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <Suspense fallback={<Loading />}>
      <FetchWishes categorySlug={searchParams.category}/>
    </Suspense>
  );
};

export default Wishes;
