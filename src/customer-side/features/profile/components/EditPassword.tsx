"use client";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ValidOrNot from "../../authentication/components/ValidOrNot";
import toast, { Toaster } from "react-hot-toast";
import { updatePassword } from "@/customer-side/services/Customer";

const EditPassword = () => {
  const [validations, setValidations] = useState({
    hasUppercaseOrLowercase: false,
    hasNumberOrSymbol: false,
    hasMinLength: false,
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Update validations
    setValidations({
      hasUppercaseOrLowercase: /[A-Z]/.test(value) && /[a-z]/.test(value),
      hasNumberOrSymbol: /[\d!@#$%^&*(),.?":{}|<>]/.test(value),
      hasMinLength: value.length >= 8,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handlePasswordUpdate = async (data) => {
    try {
      const res = await updatePassword(data);
      const json = await res.json();

      if (res.status !== 200) {
        toast.error(json.message);
        return;
      }

      toast.success("Password Updated successfully");
      reset();
    } catch (error) {
      toast.error("An error occurred while updating the password.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Toaster/>
      <SectionTitle title="Edit Password" />
      <form
        className="max-w-[400px]"
        onSubmit={handleSubmit(handlePasswordUpdate)}
      >
        <div className="mb-6 ">
          <p className="uppercase font-medium text-sm">Old Password *</p>
          <input
            type="text"
            {...register("oldPassword", {
              required: "Old password is required",
            })}
            className="border-b w-full border-b-black py-2 outline-none"
          />
          {errors.oldPassword && (
            <span className="text-xs mt-2 block text-red-800">
              {errors.oldPassword.message}
            </span>
          )}
        </div>
        <div className="mb-6">
          <p className="uppercase font-medium text-sm">New password *</p>
          <input
            type="text"
            {...register("newPassword", {
              required: "New password is required",
              onChange: handlePasswordChange,
              validate: {
                hasUppercase: (value) =>
                  (/[A-Z]/.test(value) && /[a-z]/.test(value)) ||
                  "Password must include at least one uppercase and one lowercase letter",
                hasNumberOrSymbol: (value) =>
                  /[\d!@#$%^&*(),.?":{}|<>]/.test(value) ||
                  "Password must include at least one number or special character",
                minLength: (value) =>
                  value.length >= 8 || "Password must be at least 8 characters",
              },
            })}
            className="border-b w-full border-b-black py-2 outline-none"
          />
          {errors.newPassword && (
            <span className="text-xs mt-2 block text-red-800">
              {errors.newPassword.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-5 items-center">
            <ValidOrNot valid={validations.hasUppercaseOrLowercase} />
            <p className="text-sm">
              Include both uppercase or lowercase characters
            </p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <ValidOrNot valid={validations.hasNumberOrSymbol} />
            <p className="text-sm">Include at least one number or symbol</p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <ValidOrNot valid={validations.hasMinLength} />
            <p className="text-sm">Be at least 8 characters long</p>
          </div>
        </div>
        <button
          type="submit"
          className="my-3 mt-10 block ms-auto bg-black text-white py-2 px-12"
        >
          Edit Password
        </button>
      </form>
    </div>
  );
};

export default EditPassword;
