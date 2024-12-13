import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React from "react";
import { useForm } from "react-hook-form";
import ProfileEditInput from "./ProfileEditInput";

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
      <form
        className="max-w-[400px]"
        onSubmit={handleSubmit(handleProfileDataChange)}
      >
        <ProfileEditInput
          inputName="Name"
          register={register}
          errors={errors}
          required={true}
          defaultValue="Kaung Pyae"
        />
        <ProfileEditInput
          inputName="Email"
          register={register}
          errors={errors}
          required={true}
          defaultValue="kaungpyaeaung8123@gmail.com"
        />
        <ProfileEditInput
          inputName="City"
          register={register}
          errors={errors}
          required={true}
          defaultValue="Yangon"
        />
        <ProfileEditInput
          inputName="Township"
          register={register}
          errors={errors}
          required={true}
          defaultValue="Kyee Myint Daing"
        />
        <ProfileEditInput
          inputName="Zip Code"
          register={register}
          errors={errors}
          required={false}
          defaultValue="123456"
        />
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
            <FormErrorMessage message={errors.address.message} />
          )}
        </div>
        <ProfileEditInput
          inputName="Password"
          register={register}
          errors={errors}
          required={true}
          defaultValue=""
        />
        <button
          type="submit"
          className="my-3 block ms-auto bg-black text-white py-2 px-12"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
