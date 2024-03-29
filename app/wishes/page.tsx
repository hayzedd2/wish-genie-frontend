
import React, { Suspense } from "react";
import FetchWishes from "./FetchWishes";
import Loading from "./Loading";
// import { useSearchParams } from "next/navigation";

const Wishes = async ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  console.log(searchParams.category)
  return (
    <Suspense fallback={<Loading/>}>
      <FetchWishes categorySlug={searchParams.category}/>
    </Suspense>
  );
};

export default Wishes;
