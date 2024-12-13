'use client'
import AdminSubTitle from "@/admin-side/components/AdminSubTitle";
import ProductCard from "@/customer-side/components/ProductCard";
import ProductData from "@/customer-side/features/product-details/components/ProductData";
import React, { useState } from "react";

const ProductCreateConfirm = () => {
  const [confirmText, setConfirmText] = useState<string>();

  return (
    <div className="mt-4">
      <AdminSubTitle title="Product Card Sample" />
      <div className="w-[280px] bg-white p-3 mt-4 mb-9">
        <ProductCard
          img="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fe071272-fafb-4520-a7f4-715d5ee50724/NIKE+DUNK+LOW+RETRO.png"
          title="Nike Dunk Air Force 1"
          color="Orange"
          amount="320000"
        />
      </div>
      <AdminSubTitle title="Product Details Sample" />
      <div className="bg-white p-3 mt-4 mb-9">
        <ProductData />
      </div>
      <AdminSubTitle title="Product Data" />
      <table className="mt-4 mb-9">
        <tbody>
          <tr>
            <td className="px-2 pb-1 font-semibold">Name:</td>
            <td className=" pb-1">Nike Air Max</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Price:</td>
            <td className=" pb-1">50000 Ks</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Category:</td>
            <td className=" pb-1">Footwear</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Brand:</td>
            <td className=" pb-1">Nike</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Type:</td>
            <td className="pb-1">Sneakers</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Gender:</td>
            <td className=" pb-1">Men</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Color:</td>
            <td className=" pb-1">Red</td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold">Size:</td>
            <td className=" pb-1">
              <div className="flex flex-row gap-2">
                <div className="text-sm text-gray-600 bg-gray-300 rounded-full px-2 py-0.5">
                  Large
                </div>
                <div className="text-sm text-gray-600 bg-gray-300 rounded-full px-2 py-0.5">
                  Medium
                </div>
                <div className="text-sm text-gray-600 bg-gray-300 rounded-full px-2 py-0.5">
                  XL
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-2 pb-1 font-semibold flex items-start">
              Description:
            </td>
            <td className=" pb-1 max-w-[600px] text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, vel aut eum dolorum ipsa architecto perspiciatis? Ipsum
              odit tempore quos ad aperiam, magni assumenda neque, commodi quas
              animi at tempora maxime consectetur officiis eligendi odio sequi
              cumque sint? Corporis eligendi error, quo accusamus sint eum
              voluptas molestiae. Perferendis, hic dolore.
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col my-5">
        <label htmlFor="ConfirmTextBox" className="text-sm text-gray-700 mb-2">
          {" "}
          Write "<span className="font-semibold">Confirm</span>" to Create the
          Product
        </label>
        <div className="flex flex-row gap-3">
          <input
            id="ConfirmTextBox"
            value={confirmText}
            onChange={(event) => setConfirmText(event.target.value)}
            type="text"
            className=" outline-none py-2 h-11 px-3 border border-gray-300 w-[300px]"
          />
          <button
          disabled = {confirmText !== "Confirm"}
          className="px-6 bg-gray-800 text-white disabled:bg-gray-300 disabled:text-gray-500">Create</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCreateConfirm;
