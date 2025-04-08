import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React from "react";
import { useForm } from "react-hook-form";
import ProfileEditInput from "./ProfileEditInput";
import { updateCustomer } from "@/customer-side/services/Customer";
import toast, { Toaster } from "react-hot-toast";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";

const EditProfile = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: data.name,
      Phone: data.phone,
      address: data.address,
    },
  });

  const { revalidate } = useRevalidatedData();

  const handleProfileDataChange = async (data) => {
    const updateData = {
      name: data.Name,
      phone: data.Phone,
      address: data.address,
      password: data.Password,
    };

    const res = await updateCustomer(updateData);

    if (res.status === 200) {
      await revalidate("/customer-data");
      toast.success("Profile updated successfully");
    } else {
      toast.error("An error occurred while updating the profile.");
    }
  };

  return (
    <div>
      <Toaster />
      <SectionTitle title="Edit Profile" />
      <form
        className="max-w-[400px] mx-auto lg:mx-0"
        onSubmit={handleSubmit(handleProfileDataChange)}
      >
        <ProfileEditInput
          inputName="Name"
          register={register}
          errors={errors}
          required={true}
        />
        <ProfileEditInput
          inputName="Phone"
          register={register}
          errors={errors}
          required={true}
        />

        <div className="mb-6 ">
          <p className="uppercase font-medium text-sm">Address *</p>
          <textarea
            rows={4}
            {...register("address", {
              required: "Address is required",
            })}
            className="border-b w-full resize-y border-b-black py-2 outline-none"
          ></textarea>
          {errors.address && (
            <FormErrorMessage message={errors.address.message} />
          )}
        </div>
        <ProfileEditInput
          inputName="Password"
          register={register}
          errors={errors}
          required={true}
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
