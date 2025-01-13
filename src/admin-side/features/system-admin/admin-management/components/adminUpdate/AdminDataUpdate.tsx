import AdminInput from "@/admin-side/components/AdminInput";
import useAdminStore from "@/admin-side/stores/useAdminStore";
import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import React from "react";
import { useForm } from "react-hook-form";

const AdminDataUpdate = ({
  setStage,
  id,
}: {
  id: string;
  setStage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    setAdminData,
    data: { admin },
  } = useAdminStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Name: admin.name,
      Email: admin.email,
      Phone: admin.phone,
      Address: admin.address,
    },
  });

  const handleStoreAdminData = (data) => {
    const adminData = {
      id: id,
      name: data.Name,
      email: data.Email,
      phone: data.Phone,
      address: data.Address,
    };

    setAdminData(adminData);

    setStage(2);
  };

  return (
    <div>
      <p className="text-2xl font-medium tracking-wide">Admin Data Update</p>
      <form onSubmit={handleSubmit(handleStoreAdminData)} className="mt-9">
        <AdminInput
          register={register}
          errors={errors}
          inputName={"Name"}
          type={"text"}
          required={true}
        />
        <AdminInput
          register={register}
          errors={errors}
          inputName={"Email"}
          type={"email"}
          required={true}
        />
        <AdminInput
          register={register}
          errors={errors}
          inputName={"Phone"}
          type={"text"}
          required={true}
        />

        <div className="flex flex-col my-5">
          <label htmlFor="Address" className="text-sm text-gray-700 mb-2">
            Address *
          </label>
          <textarea
            id="Address"
            rows={6}
            {...register("Address", {
              required: "Address is required",
            })}
            className={`${
              errors.Address ? "border-red-500" : ""
            } resize-none outline-none py-2 px-3 border border-gray-300 w-[400px]`}
          ></textarea>
          {errors.Address && (
            <FormErrorMessage message={errors.Address.message} />
          )}
        </div>
        <div className="flex flex-row items-center justify-end w-[400px] gap-3">
          <button type="submit" className="px-9 py-2 bg-gray-800 text-white">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminDataUpdate;
