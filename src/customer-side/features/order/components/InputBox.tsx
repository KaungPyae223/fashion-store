import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import React from "react";

const InputBox = ({ register, errors, inputName, required }) => {
  const inputDisplayName = inputName.replaceAll("_", " ");

  const RequiredMessage = required
    ? {
        required: `${inputDisplayName} is required`,
      }
    : {};

  return (
    <div className="mb-9">
      <div>
        <div className="flex flex-row justify-between items-center">
          <label
            htmlFor={inputName}
            className="font-medium uppercase tracking-wider text-sm"
          >
            {inputDisplayName} {required ? "*" : ""}
          </label>
        </div>
        <input
          id={inputName}
          type="text"
          {...register(inputName, RequiredMessage)}
          className="mt-4 outline-none pb-3 border-b text-lg border-b-gray-300 w-full"
        />
        {errors[inputName] && (
          <FormErrorMessage message={errors[inputName].message} />
        )}
      </div>
    </div>
  );
};

export default InputBox;
