"use client";
import AdminSelect from "@/admin-side/components/AdminSelect";
import useAdminStore from "@/admin-side/stores/useAdminStore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AdminRole = ({ setStage }) => {
  const {
    setAdminRole,
    data: { adminRole },
  } = useAdminStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Role: adminRole,
    },
  });

  const [nextStage, setNextStage] = useState<number>();

  const handleRole = (data) => {
    setAdminRole(data.Role);
    setStage(nextStage);
  };

  return (
    <div>
      <p className="text-2xl font-medium tracking-wide">Admin Data Entry</p>
      <form onSubmit={handleSubmit(handleRole)} className="mt-6">
        <AdminSelect
          register={register}
          errors={errors}
          inputName={"Role"}
          required={true}
          data={[
            { id: "Product Management", name: "Product Management" },
            { id: "Customer Support", name: "Customer Support" },
            { id: "Order Management", name: "Order Management" },
            { id: "Super Admin", name: "Super Admin" },
            { id: "System Admin", name: "System Admin" },
            { id: "Blog Management", name: "Blog Management" },
            { id: "Retired", name: "Retired" },

          ]}
        />

        <div className="flex flex-row items-center justify-end w-[400px] gap-3">
          <button
            type="submit"
            onClick={() => setNextStage(2)}
            className="px-9 py-2 border border-gray-800 "
          >
            Back
          </button>
          <button
            type="submit"
            onClick={() => setNextStage(4)}
            className="px-9 py-2 bg-gray-800 text-white"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminRole;
