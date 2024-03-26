import { Wishes } from "@prisma/client";

interface singleWishProps {
  initialData: Wishes;
}
import japan from "../../components/custom-comp/images/japan.jpg";

import React from "react";
import Image from "next/image";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

const SingleWish: React.FC<singleWishProps> = async ({ initialData }) => {
  return (
    <section className="mb-10">
      <div className="max-w-[75rem] mx-auto">
        <div className="about-wish basis-[80%]">
            <div className="heading flex items-center gap-2 text-[1.15rem] mt-8 text-white capitalize">
          <h4 className="text-[#9E9EB8]">Wishes</h4>
          <p>/</p>
          <p>{initialData.wish_category}</p>
        </div>
        <div className="sub-heading mt-3 text-white">
          <h1 className="text-[1.7rem] font-[800]">{initialData.wish_name}</h1>
          <p className="text-[0.95rem] text-[#9E9EB8] mt-2 underline underline-offset-2">
            by Xylogeist
          </p>
        </div>
        <div className="lower-text mt-3 text-white">
          <p className="text-[1.2rem]">{initialData.wish_description}</p>
        </div>
        <div className="image-comp mt-3">
          <Image src={japan} width={800} alt="image" height={100} />
        </div>
       
        </div>
        <div className="contact mt-5 text-white basis-[20%]">
          <h1 className="text-[1.5rem] font-[800] underline underline-offset-2">
            Contact Information
          </h1>
          <ul className="flex flex-col gap-3.5 mt-3">
            <li className="flex items-center email gap-3  font-[800] text-[1.05rem]">
              <FaUser />
              <p>Xylogeist</p>
            </li>
            <li>
              <a className="flex items-center email gap-3 font-[800] text-[1.05rem]">
                <IoMail />
                <p>Azeezalhameen1@email.com</p>
              </a>
            </li>
            <li>
              <a className="flex items-center email gap-3 font-[800] text-[1.05rem]">
                <FaPhoneAlt/>
                <p>0908066552522</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleWish;
