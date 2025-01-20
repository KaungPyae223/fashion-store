"use client";
import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import { fetchAdmin } from "@/admin-side/services/admin";
import React, { useState } from "react";
import useSWR from "swr";
import AdminDetailsActivityContainer from "./AdminDetailsActivityContainer";
import DetailsPagination from "@/admin-side/components/DetailsPagination";

const AdminActivity = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [page, setPage] = useState(`1`);
  const [time, setTime] = useState(``);

  const { data, isLoading, error } = useSWR(
    `${baseUrl}/admin-activity?page=${page}&time=${time}`,
    fetchAdmin
  );

  return (
    <div className="mt-9">
     
      <div className="flex flex-row justify-between items-center pb-6">
        <p className="text-2xl font-medium">Activities</p>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="search">
              Time
            </label>
            <input
              onChange={(e) => setTime(e.target.value)}
              id="search"
              type="month"
              className="border border-gray-300  px-3 py-2 outline-none h-10"
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : data.data && data?.data.length ? (
        <>
          <AdminDetailsActivityContainer activities={data.data} />
          <DetailsPagination meta={data?.meta} setPage={setPage} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default AdminActivity;
