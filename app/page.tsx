import React from "react";
import Link from "next/link";
import { Button } from "./components/ui/button";
const page = () => {
  return (
    <div>
      {" "}
      <Link href={"/addwish"}>
        <Button variant={"primary"}>New Wish</Button>
      </Link>
    </div>
  );
};

export default page;
