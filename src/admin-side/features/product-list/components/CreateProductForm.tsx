"use client";
import AdminInput from "@/admin-side/components/AdminInput";
import AdminSelect from "@/admin-side/components/AdminSelect";
import SingleImageUpload from "@/admin-side/components/SingleImageUpload";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import ProductBlankImage from "@/assets/image.png";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { json } from "stream/consumers";
import MultipleImageUpload from "@/admin-side/components/MultipleImageUpload";

const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Admin = [
    { id: 1, name: "Adidas" },
    { id: 2, name: "Nike" },
    { id: 3, name: "Giordano" },
    { id: 4, name: "Victor" },
  ];

  const Type = [
    { id: 1, name: "Long Code" },
    { id: 2, name: "Ginger" },
    { id: 3, name: "Mini Skirt" },
  ];

  const AvailabeSize = [
    { id: 1, name: "Small" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Large" },
  ];

  const [size, setSize] = useState([]);

  const SizeRef = useRef();

  const AddSize = () => {
    if (SizeRef.current.value) {
      const selectedSize = JSON.parse(SizeRef.current.value);
      const exists = size.some((el) => el?.id == selectedSize.id);

      if (!exists) {
        setSize([...size, selectedSize]);
      }
    }
  };

  const [profileImage, setProfileImage] = useState();
  const [detailImages, setDetailsImages] = useState([]);

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 border-b">
        <form>
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Product_Name"}
            type={"text"}
            required={true}
          />

          <AdminInput
            register={register}
            errors={errors}
            inputName={"Price"}
            required={true}
            type={"number"}
          />
          <AdminSelect
            register={register}
            errors={errors}
            inputName={"Status"}
            required={true}
            data={[
              { id: "Public", name: "Public" },
              { id: "Private", name: "Private" },
            ]}
          />
          <AdminSelect
            register={register}
            errors={errors}
            inputName={"Category"}
            required={true}
            data={[
              { id: "1", name: "Clothing" },
              { id: "2", name: "Footwear" },
              { id: "3", name: "Accessory" },
              { id: "4", name: "LifeStyle" },
            ]}
          />
          <AdminSelect
            register={register}
            errors={errors}
            inputName={"Brand"}
            required={true}
            data={Admin}
          />
          <AdminSelect
            register={register}
            errors={errors}
            inputName={"Type"}
            required={true}
            data={Type}
          />
          <AdminSelect
            register={register}
            errors={errors}
            inputName={"Gender"}
            required={true}
            data={[
              { id: "Men", name: "Men" },
              { id: "Women", name: "Women" },
            ]}
          />
          <AdminSelect
            register={register}
            errors={errors}
            inputName={"Color"}
            required={true}
            data={[
              { id: "1", name: "Gray" },
              { id: "2", name: "Red" },
            ]}
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
                {AvailabeSize.map((el) => (
                  <option key={el.id} value={JSON.stringify(el)}>
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
                  <div className="text-sm bg-white border border-gray-300 flex flex-row items-center gap-2 text-gray-700 px-5 py-1 rounded-full">
                    <p>{el.name}</p>
                    <svg
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
          </div>
          <div className="flex flex-col my-5">
            <label htmlFor="Description" className="text-sm text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              {...register("Description", {
                required: "Feedback is required",
              })}
              id="Description"
              rows={7}
              className={`${
                errors.Description ? "border-red-500" : ""
              } w-[400px] resize-none outline-none border p-3 text-sm`}
            ></textarea>
            {errors.Description && (
              <FormErrorMessage message={errors.Description.message} />
            )}
          </div>
        </form>
        <div>
          <div className="flex flex-col my-5">
            <label htmlFor="Description" className="text-sm text-gray-700 mb-2">
              Product profile image *
            </label>
            {profileImage ? (
              <img
                src={profileImage.preview}
                className="w-[280px] object-cover"
              />
            ) : (
              <Image
                className="border mt-1.5 border-gray-300 cursor-pointer "
                src={ProductBlankImage}
                alt="Product Image"
                width={280}
                height={280}
              />
            )}
            <SingleImageUpload setImage={setProfileImage} />
          </div>
          <div className="flex flex-col my-10">
            <label htmlFor="Description" className="text-sm text-gray-700 mb-2">
              Product details image ({detailImages.length}/4) *
            </label>
            {detailImages.length ? (
              <div className="flex flex-wrap gap-3 justify-start">
                {detailImages?.map((el) => (
                  <img src={el.preview} className="w-[280px] object-cover" />
                ))}
              </div>
            ) : (
              <Image
                className="border mt-1.5 border-gray-300 cursor-pointer "
                src={ProductBlankImage}
                alt="Product Image"
                width={280}
                height={280}
              />
            )}
            <MultipleImageUpload setImages={setDetailsImages} />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="bg-white border border-gray-300 text-gray-500 hover:border-gray-500 duration-300 cursor-pointer hover:text-black flex items-center justify-center mt-6  w-32">
          Cancel
        </div>
        <div className="bg-gray-800 w-fit mt-6 text-white px-6 py-3 cursor-pointer">
          Continue
        </div>
      </div>
    </div>
  );
};

export default CreateProductForm;
