"use client";
import React, { useState } from "react";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

const FooterSignUp = () => {
  const [email, setEmail] = useState<string>("");

  const chaneEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className=" col-span-full md:col-span-6 flex md:justify-end md:py-12">
      <div className="w-full md:w-fit">
        <p className="font-semibold uppercase text-sm inline">Email Address</p>

        <div className="flex gap-3 mt-2 mb-5 ">
          <input
            className="border-b md:w-[280px] lg:w-[300px] flex-1 border-b-black py-2 outline-none"
            name="email"
            onChange={chaneEmail}
            value={email}
          />

          <button
            disabled={email.length === 0}
            className="border disabled:bg-slate-200 text-nowrap disabled:text-gray-500 uppercase bg-black text-white px-6 py-2"
          >
            Sign Up
          </button>
        </div>

        <div className="flex gap-5 justify-start w-fit">
          <RiFacebookFill className="size-6" />

          <RiTwitterFill className="size-6" />

          <RiInstagramLine className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default FooterSignUp;
