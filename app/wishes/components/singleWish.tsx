import { Wishes } from "@prisma/client";

interface singleWishProps {
  initialData: Wishes;
}
import japan from "../../components/custom-comp/images/japan.jpg";

import React from "react";
import Image from "next/image";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import Link from "next/link";

const SingleWish: React.FC<singleWishProps> = async ({ initialData }) => {
  return (
    <section className="pb-8 px-5">
      <div className="max-w-[75rem] flex-col min-h-[75vh] justify-between  flex mx-auto">
        <div className="about-wish ">
          <div className="heading flex items-center gap-2 text-[1.15rem] mt-8 text-white capitalize">
            <h4>
              <Link href={"/wishes"}>Wishes</Link>
            </h4>
            <p>/</p>
            <p className="text-[#9E9EB8]">{initialData.wish_category}</p>
          </div>
          <div className="sub-heading mt-3 text-white">
            <h1 className="text-[1.7rem] font-[800]">
              {initialData.wish_name}
            </h1>
            <p className="text-[0.95rem] text-[#9E9EB8] mt-2 underline underline-offset-2">
              by{" "}
              {initialData.user_name ? (
                <span className="capitalize">{initialData.user_name}</span>
              ) : (
                <span className="capitalize">{initialData.user_fullname}</span>
              )}
            </p>
          </div>
          <div className="lower-text mt-3 text-white">
            <p className="text-[1.2rem]">{initialData.wish_description}</p>
          </div>
        </div>
        <div className="contact mt-10 text-white justify-end flex   flex-col">
          <h1 className="text-[1.4rem] mb-3 font-[600] underline underline-offset-4">
            Contact Information
          </h1>

          <ul className="flex flex-col gap-3.5 mt-3">
            <li className="flex items-center email gap-3  font-[800] text-[1.05rem]">
              <FaRegUser className="text-[#9E9EB8] text-[1.2rem]" />
              {initialData.user_name ? (
                <span className="capitalize">{initialData.user_name}</span>
              ) : (
                <span className="capitalize">{initialData.user_fullname}</span>
              )}
            </li>
            <li>
              <a
                className="flex items-center email gap-3 font-[800] text-[1.05rem]"
                href="mailto:azeezalhameen1@gmail.com"
              >
                <CiMail className="text-[#9E9EB8] text-[1.2rem]" />
                <p>{initialData.user_email}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SingleWish;
