import AdminInput from "@/admin-side/components/AdminInput";
import AdminSelect from "@/admin-side/components/AdminSelect";
import useProductStore from "@/admin-side/stores/useProductStore";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import React from "react";
import { useForm } from "react-hook-form";

const ProductDataUpdateForm = ({ setStage }) => {
  const {
    setProductData,
    product: { productData },
    resetProductProperties,
  } = useProductStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Name: productData.Name,
      Price: productData.Price,
      Category: productData.CategoryID,
      Gender: productData.Gender,
      Description: productData.Description,
    },
  });

  const handleStoreProductData = (data) => {

    const addProductData = {
      Name: data.Name,
      Price: data.Price,
      CategoryID: data.Category,
      Gender: data.Gender,
      Description: data.Description,
    };

    if (productData.CategoryID !== data.Category) {
      resetProductProperties();
    }

    setProductData(addProductData);

    setStage(2);
  };

  return (
    <div>
      <p className="text-2xl font-medium tracking-wide">Product Data Update</p>
      <form onSubmit={handleSubmit(handleStoreProductData)} className="mt-9">
        <AdminInput
          register={register}
          errors={errors}
          inputName={"Name"}
          type={"text"}
          required={true}
        />
        <AdminInput
          register={register}
          errors={errors}
          inputName={"Price"}
          type={"number"}
          required={true}
        />
        <AdminSelect
          register={register}
          errors={errors}
          inputName={"Category"}
          required={true}
          data={[
            { id: "1", name: "Clothing" },
            { id: "2", name: "Footwears" },
            { id: "3", name: "Accessories" },
            { id: "4", name: "Life Styles" },
          ]}
        />
        <AdminSelect
          register={register}
          errors={errors}
          inputName={"Gender"}
          required={true}
          data={[
            { id: "Men", name: "Man" },
            { id: "Women", name: "Woman" },
            { id: "All", name: "All" },
          ]}
        />
        <div className="flex flex-col my-5">
          <label htmlFor="Description" className="text-sm text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            id="Description"
            rows={6}
            {...register("Description", {
              required: "Description is required",
            })}
            className={`${
              errors.Description ? "border-red-500" : ""
            } resize-none outline-none py-2 px-3 border border-gray-300 w-[400px]`}
          ></textarea>
          {errors.Description && (
            <FormErrorMessage message={errors.Description.message} />
          )}
        </div>
        <div className="flex flex-row items-center justify-end w-[400px] gap-3">
          <button type="submit" className="px-9 py-2 bg-gray-800 text-white">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductDataUpdateForm;
