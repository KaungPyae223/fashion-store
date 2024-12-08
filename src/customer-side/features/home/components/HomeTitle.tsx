"use client";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import Link from "next/link";
import React from "react";

interface HomeTitleInterface {
  title: string;
  link: string;
}

export const HomeTitle = ({ title, link }: HomeTitleInterface) => {
  const AddParamsToURL = useAddParamsToURL();

  return (
    <div className="col-span-12 mb-3 flex items-center justify-between">
      <p className="text-2xl font-medium">{title}</p>
      {link && (
        <Link
          href={AddParamsToURL(link)}
          className="text-sm underline text-gray-500 cursor-pointer hover:text-gray-800"
        >
          View All
        </Link>
      )}
    </div>
  );
};
