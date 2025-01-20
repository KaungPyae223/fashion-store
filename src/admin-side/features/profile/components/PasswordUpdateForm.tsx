import AdminInput from "@/admin-side/components/AdminInput";
import { updatePassword } from "@/admin-side/services/admin";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const PasswordUpdateForm = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const handleCreateColor = async (data) => {
    try {
      const res = await updatePassword(data);
      const json = await res.json();

      if (res.status !== 200) {
        toast.error(json.message);
        return;
      }

      toast.success("Password Updated successfully");
      reset();

      setOpenModal(false);
    } catch (error) {
      toast.error("An error occurred while updating the password.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="bg-white p-5">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Change Password
        </h2>
        <form onSubmit={handleSubmit(handleCreateColor)} className="my-4">
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Old_Password"}
            type={"text"}
            required={true}
          />
          <div className="flex flex-col my-5">
            <label
              htmlFor="new password"
              className="text-sm text-gray-700 mb-2"
            >
              New Password *
            </label>
            <input
              type="text"
              {...register("password", {
                required: "New password is required",
                validate: {
                  hasUppercase: (value) =>
                    (/[A-Z]/.test(value) && /[a-z]/.test(value)) ||
                    "Password must include at least one uppercase and one lowercase letter",
                  hasNumberOrSymbol: (value) =>
                    /[\d!@#$%^&*(),.?":{}|<>]/.test(value) ||
                    "Password must include at least one number or special character",
                  minLength: (value) =>
                    value.length >= 8 ||
                    "Password must be at least 8 characters",
                },
              })}
              className={`${
                errors.password ? "border-red-500" : ""
              } outline-none py-2 h-11 px-3 border border-gray-300 w-[400px]`}
            />
            {errors.password && (
              <FormErrorMessage message={errors.password.message} />
            )}
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
            <button
              type="submit"
              className="py-2 cursor-pointer w-20 bg-gray-800 text-white text-center"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordUpdateForm;
