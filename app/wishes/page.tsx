import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Wishes = () => {
  const wishCat = [
    {
      wishname: "Tech",
      wishendpoint: "/random",
    },
    {
      wishname: "Education",
      wishendpoint: "/random",
    },
    {
      wishname: "Travel",
      wishendpoint: "/random",
    },
    {
      wishname: "Health & Wellness",
      wishendpoint: "/random",
    },
    {
      wishname: "Other",
      wishendpoint: "/random",
    },
  ];
  return (
    <section>
      <div className="conatiner max-w-[75rem] mx-auto">
        <div className="heading my-5">
          <h1 className="text-white text-[1.7rem] font-[800]">
            Explore Wishes
          </h1>
          <div className="flex my-6 gap-4">
            {wishCat.map((cat, index) => {
              return (
                <Link href={cat.wishendpoint}>
                  <div
                    key={index}
                    className="pill px-5 text-[1rem] font-[500] py-2 capitalize rounded-[4px] bg-[#292939] text-white"
                  >
                    {cat.wishname}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="wish-container my-10">
          <div className="overall-wish-box flex flex-col gap-[2.15rem]">
          <div className="wish-box flex items-center justify-between">
            <div className="img-text-flex flex items-center gap-4 text-white">
              {/* <Image src={}/> */}
              <div className="w-14 h-14 rounded-full bg-red-600"></div>
              <div>
                <h3 className="font-[600] text-[1.15rem]">NeigbourNextdoor</h3>
                <p className="text-[1rem] mt-[0.15rem] text-[#9E9EB8] font-[600]">Currently in need of 50,000 naira to complete my money for inverter</p>
              </div>
            </div>
            <div>
              <Button size={"lg"} className="text-[0.98rem] font-[600] bg-[#292939]">
                Offer to help
              </Button>
            </div>
          </div>
          <div className="wish-box flex items-center justify-between">
            <div className="img-text-flex flex items-center gap-4 text-white">
              {/* <Image src={}/> */}
              <div className="w-14 h-14 rounded-full bg-blue-600"></div>
              <div>
                <h3 className="font-[600] text-[1.15rem]">Xylogeist</h3>
                <p className="text-[1rem] mt-[0.15rem] text-[#9E9EB8] font-[600]">Need that macbook pro to continue taking my adobe xd lessons</p>
              </div>
            </div>
            <div>
              <Button size={"lg"} className="text-[0.98rem] font-[600] bg-[#292939]">
                Offer to help
              </Button>
            </div>
          </div>
          <div className="wish-box flex items-center justify-between">
            <div className="img-text-flex flex items-center gap-4 text-white">
              {/* <Image src={}/> */}
              <div className="w-14 h-14 rounded-full bg-green-600"></div>
              <div>
                <h3 className="font-[600] text-[1.15rem]">PineappleLover</h3>
                <p className="text-[1rem] mt-[0.15rem] text-[#9E9EB8] font-[600]">Asking for a capital to venture into my pineapple and cocoa business</p>
              </div>
            </div>
            <div>
              <Button size={"lg"} className="text-[0.98rem] font-[600] bg-[#292939]">
                Offer to help
              </Button>
            </div>
          </div>
          <div className="wish-box flex items-center justify-between">
            <div className="img-text-flex flex items-center gap-4 text-white">
              {/* <Image src={}/> */}
              <div className="w-14 h-14 rounded-full bg-gray-600"></div>
              <div>
                <h3 className="font-[600] text-[1.15rem]">Patriotic Citizen</h3>
                <p className="text-[1rem] mt-[0.15rem] text-[#9E9EB8] font-[600]">Looking for funding to kickstart my japa journey</p>
              </div>
            </div>
            <div>
              <Button size={"lg"} className="text-[0.98rem] font-[600] bg-[#292939]">
                Offer to help
              </Button>
            </div>
          </div>
          <div className="wish-box flex items-center justify-between">
            <div className="img-text-flex flex items-center gap-4 text-white">
              {/* <Image src={}/> */}
              <div className="w-14 h-14 rounded-full bg-purple-600"></div>
              <div>
                <h3 className="font-[600] text-[1.15rem]">ThatAsianDude</h3>
                <p className="text-[1rem] mt-[0.15rem] text-[#9E9EB8] font-[600]">I wish to visit my dream country, Nigeria soon</p>
              </div>
            </div>
            <div>
              <Button size={"lg"} className="text-[0.98rem] font-[600] bg-[#292939]">
                Offer to help
              </Button>
            </div>
          </div>
          <div className="wish-box flex items-center justify-between">
            <div className="img-text-flex flex items-center gap-4 text-white">
              {/* <Image src={}/> */}
              <div className="w-14 h-14 rounded-full bg-green-600"></div>
              <div>
                <h3 className="font-[600] text-[1.15rem]">PineappleLover</h3>
                <p className="text-[1rem] mt-[0.15rem] text-[#9E9EB8] font-[600]">Asking for a capital to venture into my pineapple and cocoa business</p>
              </div>
            </div>
            <div>
              <Button size={"lg"} className="text-[0.98rem] font-[600] bg-[#292939]">
                Offer to help
              </Button>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;
