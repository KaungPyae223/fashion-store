import React from "react";
import InputBox from "./InputBox";
import { useForm } from "react-hook-form";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";

const ShippingInformationForm = ({
  shippingInformation,
  setShippingInformation,
  setCompleteForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: shippingInformation });

  const handleShippingAddressInput = (data) => {
    setShippingInformation(data);
    setCompleteForm((prev) => ({ ...prev, shipping: true }));
  };

  return (
    <form
      onSubmit={handleSubmit(handleShippingAddressInput)}
      className="border border-gray-300"
    >
      <div className="border-b border-b-gray-300 py-5 px-7 flex flex-row gap-6 items-center">
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
          1
        </div>
        <p className="font-semibold uppercase tracking-widest">
          Shipping Address
        </p>
      </div>
      <div className="px-7 pt-7">
        <div className="mb-9">
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="Name"
              className="font-medium uppercase tracking-wider text-sm"
            >
              Name *
            </label>
            <p className="text-sm text-gray-500">* Required Field</p>
          </div>
          <input
            {...register("Name", { required: "Name is required" })}
            type="text"
            id="Name"
            className="mt-4 outline-none pb-3 text-lg border-b border-b-gray-300 w-full"
          />
          {errors.Name && <FormErrorMessage message={errors.Name.message} />}
        </div>
        <InputBox
          register={register}
          errors={errors}
          inputName="Phone"
          required={true}
        />
        <InputBox
          register={register}
          errors={errors}
          inputName="Email"
          required={true}
        />
        <div className="mb-6">
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="Address"
              className="font-medium uppercase tracking-wider text-sm"
            >
              Address *
            </label>
          </div>
          <textarea
            {...register("Address", { required: "Address is required" })}
            rows={4}
            id="Address"
            className="mt-4 resize-y outline-none text-lg pb-3 border-b border-b-gray-300 w-full"
          ></textarea>
          {errors.Address && <FormErrorMessage message={errors.Name.message} />}
        </div>
        <div className="mb-6">
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="Note"
              className="font-medium uppercase tracking-wider text-sm"
            >
              Note
            </label>
          </div>
          <textarea
            {...register("Note")}
            rows={1}
            id="Note"
            className="mt-4 resize-y outline-none text-lg pb-3 border-b border-b-gray-300 w-full"
          ></textarea>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-7 pb-7">
        <div
          onClick={() => reset()}
          className="bg-gray-200 cursor-pointer flex justify-center items-center py-3 uppercase tracking-wider text-black font-medium"
        >
          Cancel
        </div>
        <button
          type="submit"
          className="bg-black flex justify-center items-center py-3 uppercase tracking-wider text-white font-medium"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default ShippingInformationForm;
