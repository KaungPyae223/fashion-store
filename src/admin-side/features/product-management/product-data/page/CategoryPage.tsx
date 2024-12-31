'use client'
import BreadCrumb from "@/customer-side/components/BreadCrumb";
import Link from "next/link";
import React from "react";
import CategoryTable from "../components/Category/CategoryTable";
import { useCategoryData } from "../hook/useCategoryData";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";

const CategoryPage = () => {

  const { data, isLoading, error } = useCategoryData();

  return (
    <div>
      <div className="flex flex-row justify-between items-center border-b pb-4">
        <Link
          href={"/admin/product-data-list"}
          className="flex flex-row items-center gap-3 py-3 px-6 cursor-pointer hover:border-gray-800 duration-300 border border-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
          Back
        </Link>

        <div className="flex flex-col items-center">
          <p className="text-xl tracking-wide mb-3">Categories</p>
          <BreadCrumb
            previousSection={[
              { link: "/admin/product-data-list", title: "Product Data List" },
            ]}
            title="Categories"
          />
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : data.data && data?.data.length > 0 ? (
        <>
          <CategoryTable categories={data.data} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default CategoryPage;
