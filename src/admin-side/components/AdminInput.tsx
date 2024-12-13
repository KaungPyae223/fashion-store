import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import React from "react";

const AdminInput = ({ register, errors,type, inputName, required }) => {
  const inputDisplayName = inputName.replaceAll("_", " ");

  const RequiredMessage = required
    ? {
        required: `${inputDisplayName} is required`,
      }
    : {};

  return (
    <div className="flex flex-col my-5">
      <label htmlFor={inputName} className="text-sm text-gray-700 mb-2">
        {inputDisplayName} {required ? "*" : ""}
      </label>
      <input
        id={inputName}
        type={type}
        {...register(inputName, RequiredMessage)}
        className={`${ errors[inputName] ? "border-red-500" : ""} outline-none py-2 h-11 px-3 border border-gray-300 w-[400px]`}
      />
      {errors[inputName] && (
        <FormErrorMessage message={errors[inputName].message} />
      )}
    </div>
  );
};

export default AdminInput;
