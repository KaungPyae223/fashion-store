import SectionTitle from "@/customer-side/components/SectionTitle";
import React from "react";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProfileDataChange = (data) => {};

  return (
    <div>
      <SectionTitle title="Edit Profile" />
      <form className="max-w-[400px]" onSubmit={handleSubmit(handleProfileDataChange)}>
        <div className="mb-6 ">
          <p className="uppercase font-medium text-sm">Name *</p>
          <input
            type="text"
            defaultValue={"Kaung Pyae Aung"}
            {...register("name", {
              required: "Name is required",
            })}
            className="border-b w-full border-b-black py-2 outline-none"
          />
          {errors.name && (
            <span className="text-xs mt-2 block text-red-800">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="mb-6 ">
          <p className="uppercase font-medium text-sm">Email *</p>
          <input
            type="text"
            defaultValue={"kaungpyaeaung8123@gmail.com"}
            {...register("email", {
              required: "Email is required",
            })}
            className="border-b w-full border-b-black py-2 outline-none"
          />
          {errors.email && (
            <span className="text-xs mt-2 block text-red-800">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="mb-6 ">
          <p className="uppercase font-medium text-sm">City *</p>
          <input
            type="text"
            defaultValue={"Yangon"}
            {...register("city", {
              required: "City is required",
            })}
            className="border-b w-full border-b-black py-2 outline-none"
          />
          {errors.city && (
            <span className="text-xs mt-2 block text-red-800">
              {errors.city.message}
            </span>
          )}
        </div>
        <div className="mb-6 ">
          <p className="uppercase font-medium text-sm">Township *</p>
          <input
            type="text"
            defaultValue={"Kyee Myint Daing"}
            {...register("township", {
              required: "Township is required",
            })}
            className="border-b w-full border-b-black py-2 outline-none"
          />
          {errors.township && (
            <span className="text-xs mt-2 block text-red-800">
              {errors.township.message}
            </span>
          )}
        </div>
        <div className="mb-6 ">
          <p className="uppercase font-medium text-sm">Zip Code</p>
          <input
            type="number"
            defaultValue={"078145"}
            {...register("zipCode")}
            className="border-b w-full border-b-black py-2 outline-none"
          />
          
        </div>
        <div className="mb-6 ">
          <p className="uppercase font-medium text-sm">Address *</p>
          <textarea
            rows={4}
            {...register("address", {
              required: "Address is required",
            })}
            className="border-b w-full resize-none border-b-black py-2 outline-none"
          >
            No.123 Inya Road, Yangon Kyee Myint Daing
          </textarea>
          {errors.address && (
            <span className="text-xs mt-2 block text-red-800">
              {errors.address.message}
            </span>
          )}
        </div>
        <div className="mb-6 ">
          <p className="uppercase font-medium text-sm">Password *</p>
          <input
            type="text"
            {...register("password", {
                required: "Password is required",
              })}
            className="border-b w-full border-b-black py-2 outline-none"
          />
          {errors.password && (
            <span className="text-xs mt-2 block text-red-800">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
        type="submit"
        className="my-3 block ms-auto bg-black text-white py-2 px-12">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
