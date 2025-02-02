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

const BrandProductsDisplaySection = ({ name }) => {
  const searchParams = useSearchParams();
  const AddParamsToURL = useAddParamsToURL();

  const [fetchURL, setFetchUrl] = useState(
    AddParamsToURL(process.env.NEXT_PUBLIC_BASE_URL + "/brand-products/" + name)
  );

  const { data, isLoading } = useSWR(fetchURL, fetchHome);

  useEffect(() => {
    setFetchUrl(
      AddParamsToURL(
        process.env.NEXT_PUBLIC_BASE_URL + "/brand-products/" + name
      )
    );
  }, [searchParams]);

  return (
    !isLoading && (
      <div>
        <SectionTitle title="products" />
        {isLoading ? (
          <Loading />
        ) : data.data && data?.data.length ? (
          <>
            <ProductsContainer products={data.data} name={name} />
            <AdminPagination meta={data?.meta} />
          </>
        ) : (
          <NoData />
        )}
      </div>
    )
  );
};

const ProductsContainer = ({ products, name }) => {
  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          discount_percent={product.discount_percent}
          discount_price={product.discount_price}
          img={product.cover_photo}
          title={product.name}
          color={product.color}
          amount={product.price}
          href={"/brands/" + name + "/details/" + product.id}
        />
      ))}
    </div>
  );
};

export default BrandProductsDisplaySection;
