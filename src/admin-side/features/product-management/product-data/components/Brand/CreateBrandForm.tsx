import AdminInput from "@/admin-side/components/AdminInput";
import { storeBrand } from "@/admin-side/services/brand";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ProductBlankImage from "@/assets/image.png";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";

const CreateBrandForm = ({
  setOpenModal,
  brandImage,
  setBrandImageUploadModel,
}: {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  brandImage: any;
  setBrandImageUploadModel: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { revalidate } = useRevalidatedData();

  const handleCreateBrand = async (data) => {
    if (!brandImage) {
      toast.error("Upload a Brand Image");
      return;
    }

    try {
      const res = await storeBrand(data.Brand, brandImage.file);
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }
      await revalidate("/brand");
      toast.success("Product created successfully");
      reset();

      setOpenModal(false);
    } catch (error) {
      toast.error("An error occurred while creating the product.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="z-40">
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Create Brand
        </h2>
        <form onSubmit={handleSubmit(handleCreateBrand)} className="my-4">
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Brand"}
            type={"text"}
            required={true}
          />
          <div className="flex flex-col my-5">
            <label htmlFor="Description" className="text-sm text-gray-700 mb-2">
              Product profile image *
            </label>
            {brandImage ? (
              <Image
                alt="Brand Image"
                width={400}
                height={300}
                src={brandImage.preview}
                className="w-[400px] h-[300px] object-cover"
              />
            ) : (
              <Image
                className="border w-[400px] h-[300px] mt-1.5 border-gray-300 cursor-pointer object-cover"
                src={ProductBlankImage}
                alt="Product Image"
                width={400}
                height={300}
              />
            )}
            <div
              onClick={() => setBrandImageUploadModel(true)}
              className="mt-3 px-6 py-2 bg-gray-800 text-white w-fit"
            >
              Upload an Image
            </div>
          </div>

          <div className="flex flex-row justify-end gap-3 mt-8">
            <div
              onClick={() => {
                setOpenModal(false);
              }}
              className="py-2 cursor-pointer w-20 border border-gray-300 text-center"
            >
              Cancel
            </div>
            <button
              type="submit"
              className="py-2 cursor-pointer w-20 bg-gray-800 text-white text-center"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBrandForm;
