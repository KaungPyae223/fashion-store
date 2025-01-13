"use client";
import Link from "next/link";
import React from "react";
import AdminContainer from "../components/AdminContainer";
import { useAdminData } from "../hooks/useAdminData";
import Loading from "@/admin-side/components/Loading";
import AdminPagination from "@/admin-side/components/AdminPagimation";
import NoData from "@/admin-side/components/NoData";

const AdminManagementPage = () => {
  const { handleFilter, data, isLoading, filterAdminNameRef, roleRef, error } =
    useAdminData();

    console.log(data);

  return (
    <div>
      <div className="flex flex-row justify-between border-b pb-6">
        <div className="flex">
          <Link
            href={"/admin/admin-management/create"}
            className="flex flex-row h-10 mt-auto cursor-pointer justify-center items-center gap-2 p-3 text-sm bg-gray-800 text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            Create Admin
          </Link>
        </div>

        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="search">
              Admin Name
            </label>
            <input
              ref={filterAdminNameRef}
              id="search"
              type="text"
              className="border border-gray-300  px-3 py-2 outline-none h-10 w-[250px]"
            />
          </div>
          <div className="flex flex-col gap-1 text-gray-800">
            <label className="text-sm text-gray-700">Admin Role</label>
            <select
              ref={roleRef}
              className="border border-gray-300 bg-white  px-3 py-2 h-10 min-w-32 outline-none"
            >
              <option value={"all"}>All</option>
              <option value={"Product Management"}>Product Management</option>
              <option value={"Customer Support"}>Customer Support</option>
              <option value={"Order Management"}>Order Management</option>
              <option value={"Super Admin"}>Super Admin</option>
              <option value={"System Admin"}>System Admin</option>
              <option value={"Blog Management"}>Blog Management</option>
              <option value={"Retired"}>Retired</option>
            </select>
          </div>

          <div
            onClick={handleFilter}
            className="flex flex-row h-10 mt-auto cursor-pointer justify-center items-center gap-2 p-3 text-sm  text-gray-700 border bg-gray-300 hover:border-gray-800 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            Filter
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : data?.data && data?.data.length ? (
        <>
          <AdminContainer admins={data.data} />
          <AdminPagination meta={data?.meta} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default AdminManagementPage;
