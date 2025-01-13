import PageTitle from "@/admin-side/components/PageTitle";
import AdminManagementPage from "@/admin-side/features/system-admin/admin-management/pages/AdminManagementPage";
import React from "react";
import AdminManagementAnimation from "@/assets/AdminManagementAnimation.json";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <AdminCheck allow={"System Admin"}>
        <>
          <PageTitle
            title="Admin Management"
            subTitle="Manage the Admin of the website"
            animate={AdminManagementAnimation}
          />
          <AdminManagementPage />
        </>
      </AdminCheck>
    </div>
  );
};

export default page;
