"use client";
import AdminPagination from "@/admin-side/components/AdminPagimation";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import Pagination from "@/customer-side/components/Pagination";
import ProductCard from "@/customer-side/components/ProductCard";
import SectionTitle from "@/customer-side/components/SectionTitle";
import { fetchHome } from "@/customer-side/services/HomePage";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const ClothesDisplaySection = () => {
  const searchParams = useSearchParams();

  const AddParamsToURL = useAddParamsToURL();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(
    AddParamsToURL(baseUrl + "/customer-product/1")
  );

  const { data, isLoading, error } = useSWR(fetchUrl, fetchHome);

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/customer-product/1"));
  }, [searchParams]);

  return (
    <div>
      <SectionTitle title="clothes" />

      {isLoading ? (
        <Loading />
      ) : data.data && data?.data.length ? (
        <>
          <ProductsContainer products={data.data} />
          <AdminPagination meta={data?.meta} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

const ProductsContainer = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          img={product.cover_photo}
          title={product.name}
          color={product.color}
          amount={product.price}
          href={"/clothing/details/"+product.id}
        />
      ))}
    </div>
  );
};

export default ClothesDisplaySection;
