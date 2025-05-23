import AdminInput from "@/admin-side/components/AdminInput";
import AdminSelect from "@/admin-side/components/AdminSelect";
import { storeSize } from "@/admin-side/services/size";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateSizeForm = ({
  setOpenModal
}: {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

      const { revalidate } = useRevalidatedData();
  

  const handleCreateSize = async(data) => {
    try {
      const res = await storeSize(data.Category,data.Size);
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }

      toast.success("Product created successfully");
      reset();

      await revalidate("/size")

      setOpenModal(false)
      
    } catch (error) {
      toast.error("An error occurred while creating the product.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
        
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create Size</h2>
        <form onSubmit={handleSubmit(handleCreateSize)} className="my-4">
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Size"}
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
            <button type="submit" className="py-2 cursor-pointer w-20 bg-gray-800 text-white text-center">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSizeForm;
