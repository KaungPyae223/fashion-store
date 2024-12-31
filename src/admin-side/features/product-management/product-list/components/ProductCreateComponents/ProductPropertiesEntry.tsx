import AdminSelect from "@/admin-side/components/AdminSelect";
import React from "react";
import { Toaster } from "react-hot-toast";

import { useProductPropertiesEntry } from "../../hooks/useProductPropertiesEntry";

const ProductPropertiesEntry = ({ setStage }) => {
  const {
    brandData,
    typeData,
    colorData,
    register,
    handleSubmit,
    errors,
    size,
    setNextStage,
    SizeRef,
    handleStoreProductProperties,
    data,
    isLoading,
    AddSize,
    removeSize,
  } = useProductPropertiesEntry(setStage);

  if (isLoading) {
    return <></>;
  }

  

  return (
    <div>
      <Toaster />
      <p className="text-2xl font-medium tracking-wide">
        Product Properties Entry
      </p>
      <form
        onSubmit={handleSubmit(handleStoreProductProperties)}
        className="mt-9"
      >
        <AdminSelect
          register={register}
          errors={errors}
          inputName={"Brand"}
          required={true}
          data={brandData}
        />
        <AdminSelect
          register={register}
          errors={errors}
          inputName={"Type"}
          required={true}
          data={typeData}
        />
        <AdminSelect
          register={register}
          errors={errors}
          inputName={"Color"}
          required={true}
          data={colorData}
        />

        <div className="flex flex-col my-5">
          <label htmlFor="Size" className="text-sm text-gray-700 mb-2">
            Choose a size *
          </label>
          <div className="flex flex-row">
            <select
              ref={SizeRef}
              id="Size"
              className="outline-none bg-white h-11 px-3 border border-gray-300 w-[325px]"
            >
              <option value="">Select a size</option>
              {data.sizes.map((el) => (
                <option key={JSON.stringify(el)} value={JSON.stringify(el)}>
                  {el.name}
                </option>
              ))}
            </select>
            <div
              onClick={AddSize}
              className="bg-gray-800 text-white w-[75px] flex items-center justify-center cursor-pointer"
            >
              ADD
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 justify-start">
            {size.length > 0 &&
              size.map((el) => (
                <div
                  key={el.name}
                  className="text-sm bg-white border border-gray-300 flex flex-row items-center gap-2 text-gray-700 px-3 py-1 rounded-full"
                >
                  <p>{el.name}</p>
                  <svg
                    onClick={() => removeSize(el.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              ))}
          </div>
          <div className="flex mt-6 flex-row items-center justify-end w-[400px] gap-3">
            <button
              onClick={() => setNextStage(1)}
              type="submit"
              className="px-9 py-2 border border-gray-800 "
            >
              Back
            </button>

            <button
              onClick={() => setNextStage(3)}
              type="submit"
              className="px-9 py-2 bg-gray-800 text-white"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductPropertiesEntry;
