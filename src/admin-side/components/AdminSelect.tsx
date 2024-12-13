import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import React from "react";

const AdminSelect = ({ register, errors, inputName, required, data }) => {
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
      <select
        id={inputName}
        {...register(inputName, RequiredMessage)}
        className={`${
          errors[inputName] ? "border-red-500" : ""
        } outline-none bg-white h-11 px-3 border border-gray-300 w-[400px]`}
      >
        <option value="">Select a {inputName.toLowerCase()}</option>
        {data.map((el) => (
          <option value={el.id} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      {errors[inputName] && (
        <FormErrorMessage message={errors[inputName].message} />
      )}
    </div>
  );
};

export default AdminSelect;
