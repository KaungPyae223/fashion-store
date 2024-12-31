import AdminInput from "@/admin-side/components/AdminInput";
import { updateColor } from "@/admin-side/services/color";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateColorForm = ({
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
      Color: oldData.color,
    },
  });

    const { revalidate } = useRevalidatedData();
  

  const handleUpdateColor = async (data) => {
    try {
      const res = await updateColor(oldData.id, data.Color);

      const json = await res.json();

      if(res.status != 200){
        toast.error(json.message);
        return;
      }

      toast.success("Product updated successfully");
      reset();
      await revalidate("/color")
      setOpenModal(false);
    } catch (error) {
      toast.error("An error occurred while updating the product.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">Update Color</h2>
        <form onSubmit={handleSubmit(handleUpdateColor)} className="my-4">
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Color"}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateColorForm;
