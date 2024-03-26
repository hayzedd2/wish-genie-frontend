
import React, { Suspense } from "react";
import FetchWishes from "./FetchWishes";
import Loading from "./Loading";

const Wishes = async () => {
  return (
    <Suspense fallback={<Loading/>}>
      <FetchWishes />
    </Suspense>
  );
};

export default Wishes;
