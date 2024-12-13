import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import React from "react";

const ProfileEditInput = ({
  inputName,
  errors,
  register,
  required,
  defaultValue,
}) => {
  const RequiredMessage = required
    ? {
        required: `${inputName} is required`,
      }
    : {};

  return (
    <div className="mb-6 ">
      <label htmlFor={inputName} className="uppercase font-medium text-sm">
        {inputName} {required ? "*" : ""}
      </label>
      <input
        id={inputName}
        defaultValue={defaultValue}
        type="text"
        {...register(inputName, RequiredMessage)}
        className="border-b w-full border-b-black py-2 outline-none"
      />
      {errors[inputName] && (
        <FormErrorMessage message={errors[inputName].message} />
      )}
    </div>
  );
};

export default ProfileEditInput;
