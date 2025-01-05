"use client";
import React from "react";
import OrderListContainer from "../components/OrderListContainer";
import { fetchOrder } from "../../../../services/order";
import useSWR from "swr";
import NoData from "@/admin-side/components/NoData";
import Loading from "@/admin-side/components/Loading";
import AdminPagination from "@/admin-side/components/AdminPagimation";

const OrderListPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const { data, isLoading, error } = useSWR(
    baseUrl + "/order-list",
    fetchOrder
  );

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : data.data && data?.data.length > 0 ? (
        <>
          <OrderListContainer orders={data.data} />
          <AdminPagination meta={data?.meta} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default OrderListPage;
