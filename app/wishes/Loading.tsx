'use client'
import React from "react";
import { RotatingLines } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] max-w-[75rem] mx-auto ">
      <RotatingLines
        visible={true}
        width="30"
        strokeWidth="4"
        strokeColor="white"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loading;
