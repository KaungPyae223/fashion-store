"use client";
import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import ProductCard from "@/customer-side/components/ProductCard";
import ProductData from "@/customer-side/features/product-details/components/ProductData";
import React from "react";
import { useProductUpdateConfirm } from "../../hooks/useProductUpdateConfirm";

const ProductUpdateConfirm = () => {
  const {
    handleUpdateProduct,
    category,
    confirmText,
    setConfirmText,
    productDetailsPreviewData,
    Brand,
    Type,
    Color,
    Size,
    product
  } = useProductUpdateConfirm();

  return (
    <div className="mt-4">
      <AdminSubTitle title="Product Card Sample" />
      <div
        className={`${
          category === "Footwears" ? "w-1/3" : "w-1/4"
        }  bg-white p-3 mt-4 mb-9`}
      >
        <ProductCard
          img={product?.productCoverImage?.preview}
          title={product?.productData?.Name}
          color={Color.name}
          amount={product?.productData?.Price}
        />
      </div>
      <AdminSubTitle title="Product Details Sample" />
      <div className="bg-white p-3 mt-4 mb-9 pointer-events-none">
        <ProductData productData={productDetailsPreviewData} />
      </div>
      <AdminSubTitle title="Product Data" />
      <table className="mt-4 mb-9">
        <tbody>
          <tr>
            <td className="px-2 pb-1 font-semibold">Name:</td>
            <td className="pb-1">{product?.productData?.Name}</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Status:</td>
            <td className="pb-1">
              {product?.productStatus === "public" ? (
                <div className="text-sm bg-green-400 text-gray-700 w-fit rounded-full px-5 py-0.5">
                  Public
                </div>
              ) : (
                <div className="text-sm bg-red-600 text-white w-fit rounded-full px-5 py-0.5">
                  Private
                </div>
              )}
            </td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Price:</td>
            <td className="pb-1">{product?.productData?.Price} Ks</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Category:</td>
            <td className="pb-1">{category}</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Brand:</td>
            <td className="pb-1">{Brand.name}</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Type:</td>
            <td className="pb-1">{Type.name}</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Gender:</td>
            <td className="pb-1">{product?.productData?.Gender}</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Color:</td>
            <td className="pb-1">{Color.name}</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Size:</td>
            <td className="pb-1">
              <div className="flex flex-row gap-2">
                {Size.map((el, index) => (
                  <div
                    key={el.id || index}
                    className="text-sm text-gray-600 bg-gray-300 rounded-full px-2 py-0.5"
                  >
                    {el.name}
                  </div>
                ))}
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold flex items-start">
              Description:
            </td>
            <td className="pb-1 max-w-[600px] text-justify">
              {product?.productData?.Description}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col my-5">
        <label htmlFor="ConfirmTextBox" className="text-sm text-gray-700 mb-2">
          Write "<span className="font-semibold">Confirm</span>" to Update the
          Product
        </label>
        <div className="flex flex-row gap-3">
          <input
            id="ConfirmTextBox"
            value={confirmText}
            onChange={(event) => setConfirmText(event.target.value)}
            type="text"
            className="outline-none py-2 h-11 px-3 border border-gray-300 w-[300px]"
          />
          <button
            disabled={confirmText !== "Confirm"}
            onClick={handleUpdateProduct}
            className="px-6 bg-gray-800 text-white disabled:bg-gray-300 disabled:text-gray-500"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdateConfirm;
