"use client";
import React, { useState } from "react";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

const FooterSignUp = () => {
  const [email, setEmail] = useState<string>("");

  const chaneEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className=" col-span-6 flex justify-end py-12">
      <div>
        <p className="font-semibold uppercase text-sm inline">Email Address</p>
        <div className="flex gap-3 mt-2 max-w-lg mb-5 ">
          <input
            type="email"
            onChange={chaneEmail}
            value={email}
            className="flex-1 border-b w-[300px] border-b-black p-2 outline-none"
          />
          <button
            disabled={email.length === 0}
            className="border disabled:bg-slate-200 disabled:text-gray-500 uppercase bg-black text-white px-6 py-2"
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
