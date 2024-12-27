import Modal from "@/admin-side/components/Modal";
import Image from "next/image";
import React, { useState } from "react";
import UpdateBrandNameForm from "./UpdateBrandNameForm";
import toast from "react-hot-toast";
import { deleteBrand } from "@/admin-side/services/brand";
import UpdateBrandImageForm from "./UpdateBrandImageForm";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";

const BrandTable = ({ brands, brandImage, setBrandImageUploadModel }) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full text-left text-sm border-spacing-y-4 border-spacing-x-0">
        <thead>
          <tr className="text-sm text-gray-400">
            <th className="text-start px-2">Brand</th>
            <th className="text-start px-2">Relative Category</th>
            <th className="text-start px-2">Relative Type</th>
            <th className="text-end px-2">Total Products</th>
            <th className="px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <BrandTr key={brand.id} brand={brand} brandImage={brandImage} setBrandImageUploadModel={setBrandImageUploadModel} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BrandTr = ({ brand, brandImage,setBrandImageUploadModel }) => {
  const [openNameUpdateForm, setOpenUpdateNameForm] = useState<boolean>(false);
  const [openUpdateImageForm, setOpenUpdateImageForm] =
    useState<boolean>(false);
  const { revalidate } = useRevalidatedData();

  const handleDeleteBtn = async () => {
    if (window.confirm("Are you sure to delete")) {
      try {
        const res = await deleteBrand(brand.id);
        const json = await res.json();

        if (res.ok) {
          toast.success(json.message);
          await revalidate("/brand");
        } else {
          toast.error(json.message);
        }
      } catch (error) {
        toast.error("An error occurred while deleting the product.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <tr className="text-gray-800 bg-white border-y-[12px] border-y-gray-100">
        <td className="p-2 border-spacing-0">
          <div className="flex flex-row gap-3 items-center">
            <Image
              className="w-28 h-28 object-cover object-center"
              width={112}
              height={112}
              src={brand.photo}
              alt={brand.name + " image"}
            />
            <p className="font-medium text-base text-start">{brand.name}</p>
          </div>
        </td>
        <td className="px-2 text-start">
          <div className="flex flex-row gap-2">
            {brand.relative_category.map((category) => (
              <p
                key={category.id}
                className="text-xs border border-gray-500 px-3 py-0.5 rounded-full"
              >
                {category.category}
              </p>
            ))}
          </div>
        </td>
        <td className="px-2 text-start">
          <div className="flex flex-row gap-2">
            {brand.relative_type.map((type) => (
              <p
                key={type.id}
                className="text-xs text-slate-600 bg-gray-200 px-3 py-0.5 rounded-full"
              >
                {type.type}
              </p>
            ))}
          </div>
        </td>

        <td className="px-2 text-end">{brand.total_products}</td>
        <td className="px-4">
          <div className="flex flex-row w-full justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-4 cursor-pointer"
              onClick={() => setOpenUpdateNameForm(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-4 cursor-pointer"
              onClick={() => setOpenUpdateImageForm(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-4 cursor-pointer"
              onClick={handleDeleteBtn}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </td>
      </tr>
      <div className="h-0">
        <Modal
          openModal={openNameUpdateForm}
          setOpenModal={setOpenUpdateNameForm}
        >
          <UpdateBrandNameForm
            setOpenModal={setOpenUpdateNameForm}
            
            oldData={brand}
          />
        </Modal>
      </div>
      <div className="h-0">
        <Modal
          openModal={openUpdateImageForm}
          setOpenModal={setOpenUpdateImageForm}
        >
          <UpdateBrandImageForm
            brandImage={brandImage}
            setBrandImageUploadModel={setBrandImageUploadModel}
            setOpenModal={setOpenUpdateImageForm}
            oldData={brand}
          />
        </Modal>
      </div>
    </>
  );
};

export default BrandTable;
