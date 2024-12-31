import AdminInput from "@/admin-side/components/AdminInput";
import { storePayment } from "@/admin-side/services/payment";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const PaymentCreateForm = ({
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

  const handleCreatePayment = async (data) => {
    try {
      const res = await storePayment(data.Payment);
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }

      toast.success("Product created successfully");
      reset();

      await revalidate("/payment");

      setOpenModal(false);
    } catch (error) {
      toast.error("An error occurred while creating the payment.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Create Payment
        </h2>
        <form onSubmit={handleSubmit(handleCreatePayment)} className="my-4">
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Payment"}
            type={"text"}
            required={true}
          />

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

export default PaymentCreateForm;
