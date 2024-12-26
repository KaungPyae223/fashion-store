import AdminInput from "@/admin-side/components/AdminInput";
import SingleImageUpload from "@/admin-side/components/SingleImageUpload";
import { storeBrand } from "@/admin-side/services/brand";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ProductBlankImage from "@/assets/image.png";


const CreateBrandForm = ({
  setOpenModal,handleRevalidate
}: {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  handleRevalidate: Function;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

    const [productImage, setProductImage] = useState();
  

  const handleCreateBrand = async(data) => {

    if(!productImage){
        toast.error("Upload a Brand Image");
        return;
    }

    try {
      const res = await storeBrand(data.Brand,productImage.file);
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }

      toast.success("Product created successfully");
      reset();

      handleRevalidate()

      setOpenModal(false)
      
    } catch (error) {
      toast.error("An error occurred while creating the product.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
        
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create Brand</h2>
        <form onSubmit={handleSubmit(handleCreateBrand)} className="my-4">
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Brand"}
            type={"text"}
            required={true}
          />
          <div className="flex flex-col my-5">
            <label htmlFor="Description" className="text-sm text-gray-700 mb-2">
              Product profile image *
            </label>
            {productImage ? (
              <img
                src={productImage.preview}
                className="w-[400px] h-[300px] object-cover"
              />
            ) : (
              <Image
                className="border w-[400px] h-[300px] mt-1.5 border-gray-300 cursor-pointer object-cover"
                src={ProductBlankImage}
                alt="Product Image"
                width={400}
                height={300}
              />
            )}
            <SingleImageUpload setImage={setProductImage} />
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
            <button type="submit" className="py-2 cursor-pointer w-20 bg-gray-800 text-white text-center">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBrandForm;
