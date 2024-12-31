import { updateBrandPhoto } from "@/admin-side/services/brand";
import Image from "next/image";
import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";

const UpdateBrandImageForm = ({
  setOpenModal,
  setBrandImageUploadModel,
  oldData,
  brandImage,
}: {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  setBrandImageUploadModel: React.Dispatch<SetStateAction<boolean>>;
  oldData: any;
  brandImage: any;
}) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Brand: oldData.name,
    },
  });

  const { revalidate } = useRevalidatedData();

  const handleUpdateBrandImageForm = async () => {
    if (!brandImage.file) {
      toast.error("Upload a Brand Image");
      return;
    }

    try {
      const res = await updateBrandPhoto(oldData.id, brandImage.file);

      const json = await res.json();

      if (res.status != 200) {
        toast.error(json.message);
        return;
      }

      toast.success("Product updated successfully");
      reset();
      await revalidate("/brand");
      setOpenModal(false);
    } catch (error) {
      toast.error("An error occurred while updating the product.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Update Brand
        </h2>
        <form
          onSubmit={handleSubmit(handleUpdateBrandImageForm)}
          className="my-4"
        >
          <div className="flex flex-col my-5">
            <label htmlFor="Description" className="text-sm text-gray-700 mb-2">
              Product profile image *
            </label>
            {brandImage ? (
              <Image
                alt="Update Brand Image"
                width={400}
                height={300}
                src={brandImage.preview}
                className="w-[400px] h-[300px] object-cover"
              />
            ) : (
              <Image
                className="border w-[400px] h-[300px] mt-1.5 border-gray-300 cursor-pointer object-cover"
                src={oldData.photo}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBrandImageForm;
