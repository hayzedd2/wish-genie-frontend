import React from "react";

const Wishes = () => {
  const wishCat = [
    {
      wishname: "Random",
      wishendpoint: "/random",
    },
    {
      wishname: "Random",
      wishendpoint: "/random",
    },
    {
      wishname: "Random",
      wishendpoint: "/random",
    },
  ];
  return (
    <section>
      <div className="conatiner max-w-[75rem] mx-auto border">
        <div className="heading my-8">
          <h1 className="text-white text-[1.2rem] font-[800]">
            Explore Wishes
          </h1>
          <div className="flex my-8 gap-2">
            {wishCat.map((cat , index) => {
              return (
                <div key={index} className="pill px-5 text-[0.9rem] font-[500] py-1.5 rounded-[4px] bg-[#292939] text-white">
                  {cat.wishname}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;
