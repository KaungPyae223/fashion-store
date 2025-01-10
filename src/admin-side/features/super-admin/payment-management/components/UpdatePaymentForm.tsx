import AdminInput from "@/admin-side/components/AdminInput";
import AdminSelect from "@/admin-side/components/AdminSelect";
import { updatePayment } from "@/admin-side/services/payment";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import { revalidateTag } from "next/cache";
import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdatePaymentForm = ({
  setOpenModal,
  oldData,
}: {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  oldData: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Payment: oldData.payment,
      Status: oldData.status,
    },
  });

  const { revalidate } = useRevalidatedData();

  const handleUpdatePayment = async (data) => {
    try {
      const res = await updatePayment(oldData.id, data.Payment, data.Status);

      const json = await res.json();

      if (res.status != 200) {
        toast.error(json.message);
        return;
      }

      revalidateTag("allPayments");
      toast.success("Product updated successfully");
      reset();
      await revalidate("/payment");
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
          Update Payment
        </h2>
        <form onSubmit={handleSubmit(handleUpdatePayment)} className="my-4">
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Payment"}
            type={"text"}
            required={true}
          />
          <AdminSelect
            register={register}
            errors={errors}
            inputName={"Status"}
            data={[
              { id: "available", name: "available" },
              { id: "unavailable", name: "unavailable" },
            ]}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePaymentForm;
