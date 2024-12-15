import PageTitle from "@/admin-side/components/PageTitle";
import AdminManagementPage from "@/admin-side/features/admin-management/pages/AdminManagementPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Admin Management" />
      <AdminManagementPage />
    </div>
  );
};

export default page;
