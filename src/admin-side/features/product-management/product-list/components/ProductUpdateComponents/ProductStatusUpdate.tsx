import AdminSelect from "@/admin-side/components/AdminSelect";
import useProductStore from "@/admin-side/stores/useProductStore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ProductStatusUpdate = ({ setStage }) => {
  const {
    setProductStatus,
    product: { productStatus,productID },
  } = useProductStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Status: productStatus,
    },
  });

  const router = useRouter();

  const handleStatus = (data, stage) => {
    setProductStatus(data.Status);

    if (stage == 5) {
      setStage(5);
    } else {
      router.push(`/admin/product-list/update/${productID}/confirm`);
    }
  };

  return (
    <div>
      <p className="text-2xl font-medium tracking-wide">Product Status Update</p>
      <form onSubmit={handleSubmit(handleStatus)} className="mt-6">
        <AdminSelect
          register={register}
          errors={errors}
          inputName={"Status"}
          required={true}
          data={[
            { id: "public", name: "Public" },
            { id: "private", name: "Private" },
          ]}
        />

        <div className="flex flex-row items-center justify-end w-[400px] gap-3">
          <button
            onClick={() => setStage(5)}
            className="px-9 py-2 border border-gray-800 "
          >
            Back
          </button>
          <button className="px-9 py-2 bg-gray-800 text-white">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default ProductStatusUpdate;
