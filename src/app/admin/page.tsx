import AdminCheck from "@/admin-side/components/AdminCheck";
import DefaultPage from "@/admin-side/features/default/DefaultPage";
import React from "react";

const page = () => {
  return (
    <div>
      <AdminCheck allow={"All"}>
        <DefaultPage />
      </AdminCheck>
    </div>
  );
};

export default page;
