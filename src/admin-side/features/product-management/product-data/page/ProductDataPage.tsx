import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import React from "react";
import { CiRuler } from "react-icons/ci";
import { LuType } from "react-icons/lu";
import { VscSymbolColor } from "react-icons/vsc";
import { SiNike } from "react-icons/si";
import { MdOutlineCategory } from "react-icons/md";

import Link from "next/link";

const ProductDataPage = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Link
        href={"/admin/product-data-list/brands"}
        className="border border-gray-300 p-3 flex justify-center items-center flex-coll gap-3 cursor-pointer hover:bg-gray-700 hover:text-white duration-300"
      >
        <SiNike className="size-5" />

        <p className="text-lg">Brands</p>
      </Link>
      <Link
        href={"/admin/product-data-list/types"}
        className="border border-gray-300 p-3 flex justify-center items-center flex-coll gap-3 cursor-pointer hover:bg-gray-700 hover:text-white duration-300"
      >
        <LuType className="size-5" />

        <p className="text-lg">Types</p>
      </Link>
      <Link
        href={"/admin/product-data-list/colors"}
        className="border border-gray-300 p-3 flex justify-center items-center flex-coll gap-3 cursor-pointer hover:bg-gray-700 hover:text-white duration-300"
      >
        <VscSymbolColor className="size-5" />

        <p className="text-lg">Colors</p>
      </Link>
      <Link
        href={"/admin/product-data-list/sizes"}
        className="border border-gray-300 p-3 py-6 flex justify-center items-center flex-coll gap-3 cursor-pointer hover:bg-gray-700 hover:text-white duration-300"
      >
        <CiRuler className="size-6" />

        <p className="text-lg">Sizes</p>
      </Link>
      <Link
        href={"/admin/product-data-list/categories"}
        className="border border-gray-300 p-3 py-6 flex justify-center items-center flex-coll gap-3 cursor-pointer hover:bg-gray-700 hover:text-white duration-300"
      >
        <MdOutlineCategory className="size-6" />
        <p className="text-lg">Categories</p>
      </Link>
    </div>
  );
};

export default ProductDataPage;
