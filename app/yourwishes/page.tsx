
import FetchWishes from "./FetchWishes";
import { Suspense } from "react";
import Loading from "@/wishes/Loading";

const Wishes = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <FetchWishes />
    </Suspense>
  );
};

export default Wishes;
