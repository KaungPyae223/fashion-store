import React, { useState } from "react";
import ProductReviewTable from "./ProductReviewTable";
import { fetchAdmin } from "@/admin-side/services/admin";
import useSWR from "swr";
import DetailsPagination from "@/admin-side/components/DetailsPagination";

const ProductReviews = ({ id }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [page, setPage] = useState(`1`);

  const url = `${baseUrl}/review-data/${id}?page=${page}`;

  const { data, isLoading } = useSWR(url, fetchAdmin);

  return (
    !isLoading && (
      <div className="bg-white p-5 col-span-3">
        <p className="text-xl tracking-wider font-medium mb-5">
          Product reviews
        </p>
        <div className="mt-5">
          <ProductReviewTable data={data.data} url={url} />
          <DetailsPagination meta={data?.meta} setPage={setPage} />
        </div>
      </div>
    )
  );
};

export default ProductReviews;
