import AdminInput from "@/admin-side/components/AdminInput";
import AdminSelect from "@/admin-side/components/AdminSelect";
import { updateType } from "@/admin-side/services/type";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateTypeForm = ({
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
      Type: oldData.type,
      Category: oldData.category_id,
    },
  });

  const { revalidate } = useRevalidatedData();

  const handleUpdateType = async (data) => {
    try {
      await updateType(oldData.id, data.Category, data.Type);
      toast.success("Product updated successfully");
      reset();
      await revalidate("/type");
      setOpenModal(false);
    } catch (error) {
      toast.error("An error occurred while updating the product.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">Update Type</h2>
        <form onSubmit={handleSubmit(handleUpdateType)} className="my-4">
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Type"}
            type={"text"}
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

export default UpdateTypeForm;
