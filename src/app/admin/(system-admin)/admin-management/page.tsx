import PageTitle from "@/admin-side/components/PageTitle";
import AdminManagementPage from "@/admin-side/features/system-admin/admin-management/pages/AdminManagementPage";
import React from "react";
import AdminManagementAnimation from "@/assets/AdminManagementAnimation.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Admin Management" subTitle="Manage the Admin of the website" animate={AdminManagementAnimation} />
      <AdminManagementPage />
    </div>
  );
};

export default page;
