import AdminInput from "@/admin-side/components/AdminInput";
import { storeDeliver } from "@/admin-side/services/deliver";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import { revalidateTag } from "next/cache";
import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateDeliveryForm = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { revalidate } = useRevalidatedData();

  const handleCreateDelivery = async (data) => {
    try {
      const res = await storeDeliver(
        data.Name,
        data.Email,
        data.Phone,
        data.Address
      );
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }
      toast.success("Product created successfully");
      reset();

      await revalidate("/deliver");

      setOpenModal(false);
    } catch (error) {
      toast.error("An error occurred while creating the delivery.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Create Delivery
        </h2>
        <form onSubmit={handleSubmit(handleCreateDelivery)} className="my-4">
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
            inputName={"Email"}
            type={"email"}
            required={true}
          />
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Phone"}
            type={"text"}
            required={true}
          />
          <div className="flex flex-col my-5">
            <label htmlFor="Address" className="text-sm text-gray-700 mb-2">
              Address *
            </label>
            <textarea
              id="Address"
              rows={3}
              {...register("Address", { required: "Address is required" })}
              className={`${
                errors.Address ? "border-red-500" : ""
              } resize-none outline-none py-2 px-3 border border-gray-300 w-[400px]`}
            ></textarea>
            {errors.Address && (
              <FormErrorMessage message={errors.Address.message} />
            )}
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

export default CreateDeliveryForm;
