"use client";

import BreadCrumb from "@/customer-side/components/BreadCrumb";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import SizeTable from "../components/Size/SizeTable";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import useSWR, {mutate} from "swr";
import { fetchSizes } from "../../../services/size";
import useUpdateParams from "@/hooks/useUpdateParams";
import { throttle } from "lodash";
import useRemoveParam from "@/hooks/useRemoveParam";
import { useSearchParams } from "next/navigation";
import AdminPagination from "@/admin-side/components/AdminPagimation";
import Loading from "@/admin-side/components/Loading";
import Modal from "@/admin-side/components/Modal";

import CreateSizeForm from "../components/Size/CreateSizeForm";
import { Toaster } from "react-hot-toast";

const SizePage = () => {
  const AddParamsToURL = useAddParamsToURL();
  const updateParams = useUpdateParams();
  const deleteParam = useRemoveParam();
  const searchParams = useSearchParams();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [fetchUrl, setFetchUrl] = useState(AddParamsToURL(baseUrl + "/size"));
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    setFetchUrl(AddParamsToURL(baseUrl + "/size"));
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchSizes);

  const handleRevalidate = async () => {
    await mutate(fetchUrl); 
  };

  const filterSize = useRef();

  const handleFilter = throttle(() => {
    if (filterSize.current.value) {
      updateParams("q", filterSize.current.value);
    } else {
      deleteParam(["q", "page"]);
    }
  }, 500);

  

  return (
    <div>
      <Toaster/>
      <div className="flex flex-row justify-between items-center border-b pb-4">
        <Link
          href={"/admin/product-data-list"}
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
          <p className="text-xl tracking-wide mb-3">Sizes</p>
          <BreadCrumb
            previousSection={[
              { link: "/admin/product-data-list", title: "Product Data List" },
            ]}
            title="Sizes"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between py-6 border-b">
        <div className="flex">
          <div
            onClick={() => setOpenModal(true)}
            className="flex flex-row h-10 mt-auto cursor-pointer justify-center items-center gap-2 p-3 text-sm bg-gray-800 text-white "
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
            Create Size
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="search">
              Size
            </label>
            <input
              ref={filterSize}
              id="search"
              type="text"
              className="border border-gray-300  px-3 py-2 outline-none h-10 w-[250px]"
            />
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
      ) : (
        <>
          <SizeTable handleRevalidate={handleRevalidate} sizes={data?.data} />
          <AdminPagination meta={data?.meta} />
        </>
      )}

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <CreateSizeForm handleRevalidate={handleRevalidate} setOpenModal={setOpenModal}/>
      </Modal>
    </div>
  );
};

export default SizePage;
