"use client";
import AdminPagination from "@/admin-side/components/AdminPagimation";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import ProductCard from "@/customer-side/components/ProductCard";
import SectionTitle from "@/customer-side/components/SectionTitle";
import { fetchHome } from "@/customer-side/services/HomePage";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const AccessoriesDisplaySection = () => {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");

  const AddParamsToURL = useAddParamsToURL();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(
    AddParamsToURL(baseUrl + "/customer-product/3")
  );

  const { data, isLoading, error } = useSWR(fetchUrl, fetchHome);

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/customer-product/3"));
  }, [searchParams]);

  return (
    <div>
      <SectionTitle title="accessories" />

      {isLoading ? (
        <Loading />
      ) : data.data && data?.data.length ? (
        <>
          <ProductsContainer gender={gender} products={data.data} />
          <AdminPagination meta={data?.meta} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

const ProductsContainer = ({ products, gender }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          discount_percent={product.discount_percent}
          discount_price={product.discount_price}
          img={product.cover_photo}
          title={product.name}
          color={product.color}
          amount={product.price}
          href={
            "/accessories/details/" +
            product.id +
            (gender ? "?gender=" + gender : "")
          }
        />
      ))}
    </div>
  );
};

export default AccessoriesDisplaySection;
