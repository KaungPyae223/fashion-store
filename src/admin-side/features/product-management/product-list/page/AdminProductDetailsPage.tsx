"use client"
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import React from "react";
import ProductDetailsContainer from "../components/ProductDetailsComponents/ProductDetailsContainer";
import useSWR from "swr";
import { fetchProduct } from "@/admin-side/services/product";

const AdminProductDetailsPage = ({ id }: { id: string }) => {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const url = `${baseUrl}/product/admin-product-info/${id}`;

  const { data, isLoading, error } = useSWR(url, fetchProduct);

  return (
    <div>
     
      {isLoading ? (
        <Loading />
      ) : data.data ? (
        <>
          <ProductDetailsContainer data={data.data} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default AdminProductDetailsPage;
