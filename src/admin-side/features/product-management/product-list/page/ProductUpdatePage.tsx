"use client";
import { fetchProduct } from "@/admin-side/services/product";
import useProductStore from "@/admin-side/stores/useProductStore";
import BreadCrumb from "@/customer-side/components/BreadCrumb";
import Link from "next/link";
import React, { useEffect } from "react";
import useSWR from "swr";
import ProductUpdateForm from "../components/ProductUpdateComponents/ProductUpdateForm";

const ProductUpdatePage = ({ id }: { id: string }) => {
  const {
    setUpdateProductData,
    product: { productData },
  } = useProductStore();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const url = `${baseUrl}/product/details-data/${id}`;

  const { data, isLoading, error } = useSWR(url, fetchProduct);

  useEffect(() => {
    if (!isLoading) {
      if (productData.Name === null) {
        const product = {
          productID: data.data.id,
          productData: {
            Name: data.data.name,
            CategoryID: data.data.category_id,
            Gender: data.data.gender,
            Description: data.data.description,
          },
          productPrice: {
            Price: data.data.price,
            Profit: data.data.profit_percent,
            SellPrice: data.data.sell_price,
          },
          productProperties: {
            Brand: JSON.stringify(data.data.brand),
            Type: JSON.stringify(data.data.type),
            Color: JSON.stringify(data.data.color),
            Size: JSON.stringify(data.data.sizes),
          },
          productCoverImage: {
            file: null,
            preview: data.data.cover_photo,
          },
          productDetailsImage: data.data.product_images.map((image) => {
            return {
              file: null,
              preview: image.url,
            };
          }),
          productStatus: data.data.status,
        };

        setUpdateProductData(product);
      }
    }
  }, [isLoading]);

  return (
    <div>
      <div className="flex flex-row justify-between items-center border-b pb-4">
        <Link
          href={"/admin/product-list"}
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
          <p className="text-xl tracking-wide mb-3">Product Update</p>
          <BreadCrumb
            previousSection={[
              { link: "/admin/product-list", title: "Product List" },
            ]}
            title="Product Update"
          />
        </div>
      </div>
      {productData.Name && <ProductUpdateForm />}
    </div>
  );
};

export default ProductUpdatePage;
