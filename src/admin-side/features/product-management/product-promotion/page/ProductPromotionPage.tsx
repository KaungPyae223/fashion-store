"use client";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useProductPromotionData } from "../hooks/useProductPromotionData";
import ProductPromotionContainer from "../components/ProductPromotionContainer";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import AdminPagination from "@/admin-side/components/AdminPagimation";
import Modal from "@/admin-side/components/Modal";
import ProductPromotionCreateForm from "../components/ProductPromotionCreateForm";
import ProductPromotionDeleteForm from "../components/ProductPromotionDeleteForm";

const ProductPromotionPage = () => {
  const {
    handleFilter,
    data,
    isLoading,
    filterProductNameRef,
    typeFilterRef,
    brandFilterRef,
    categoryFilterRef,
    error,
    FilterData,
    typeData,
    handleCategoryChange,
  } = useProductPromotionData();

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [openModel, setOpenModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);


  return (
    <div>
      <Toaster />
      <div className="flex flex-row justify-between border-b pb-6">
        <div className="flex gap-3">
          <button
            disabled={!selectedProducts.length}
            onClick={() => setOpenModel(true)}
            className="flex flex-row disabled:opacity-50 h-10 mt-auto cursor-pointer justify-center items-center gap-2 p-3 text-sm bg-gray-800 text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Promotion
          </button>
          <button
            disabled={!selectedProducts.length}
            onClick={() => setOpenDeleteModel(true)}
            className="flex flex-row disabled:opacity-50 h-10 mt-auto cursor-pointer justify-center items-center gap-2 p-3 text-sm bg-gray-800 text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            Delete
          </button>
        </div>

        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="search">
              Product Name
            </label>
            <input
              ref={filterProductNameRef}
              id="search"
              type="text"
              className="border border-gray-300  px-3 py-2 outline-none h-10 w-[250px]"
            />
          </div>

          <div className="flex flex-col gap-1 text-gray-800">
            <label className="text-sm text-gray-700">Type</label>
            <select className="border border-gray-300 bg-white  px-3 py-2 h-10 min-w-32 outline-none">
              <option value={"all"}>All</option>
              <option value={"promotion"}>Promotion</option>
              <option value={"nonPromotion"}>Not Promotion</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 text-gray-800">
            <label className="text-sm text-gray-700">Categories</label>
            <select
              ref={categoryFilterRef}
              onChange={handleCategoryChange}
              className="border border-gray-300 bg-white  px-3 py-2 h-10 min-w-32 outline-none"
            >
              <option value={"all"}>All</option>
              <option value={"clothing"}>Clothing</option>
              <option value={"footwear"}>Footwears</option>
              <option value={"accessories"}>Accessories</option>
              <option value={"lifestyle"}>Life Styles</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 text-gray-800">
            <label className="text-sm text-gray-700">Brand</label>
            <select
              ref={brandFilterRef}
              className="border border-gray-300 bg-white  px-3 py-2 h-10 min-w-32 outline-none"
            >
              <option value={""}>All</option>
              {!FilterData.isLoading &&
                typeData &&
                FilterData.data.brands.map((el) => (
                  <option value={el.name} key={el.name}>
                    {el.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col gap-1 text-gray-800">
            <label className="text-sm text-gray-700">Type</label>
            <select
              ref={typeFilterRef}
              className="border border-gray-300 bg-white  px-3 py-2 h-10 min-w-32 outline-none"
            >
              <option value={""}>All</option>
              {!FilterData.isLoading &&
                typeData &&
                typeData.map((el) => (
                  <option value={el.name} key={el.name}>
                    {el.name}
                  </option>
                ))}
            </select>
          </div>

          <div
            onClick={handleFilter}
            className="flex flex-row h-10 mt-auto cursor-pointer justify-center items-center gap-2 p-3 text-sm  text-gray-700 border bg-gray-300 hover:border-gray-800 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            Filter
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : data.data && data?.data.length ? (
        <>
          <ProductPromotionContainer
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            products={data.data}
          />
          <AdminPagination meta={data?.meta} />
        </>
      ) : (
        <NoData />
      )}

      <Modal openModal={openModel} setOpenModal={setOpenModel}>
        <ProductPromotionCreateForm
          setSelectedProducts={setSelectedProducts}
          selectedProducts={selectedProducts}
          setOpenModal={setOpenModel}
        />
      </Modal>
      <Modal openModal={openDeleteModel} setOpenModal={setOpenDeleteModel}>
        <ProductPromotionDeleteForm
          setSelectedProducts={setSelectedProducts}
          selectedProducts={selectedProducts}
          setOpenModal={setOpenDeleteModel}
        />
      </Modal>
    </div>
  );
};

export default ProductPromotionPage;
