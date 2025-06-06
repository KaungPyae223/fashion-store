import PageTitle from "@/admin-side/components/PageTitle";
import React from "react";
import PageManagementAnimation from "@/assets/PageManagementAnimation.json";
import PageManagement from "@/admin-side/features/system-admin/page_management/page/PageManagement";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Page Management"
        subTitle="Manage the Home page content"
        animate={PageManagementAnimation}
      />
      <AdminCheck allow={"System Admin"}>
        <PageManagement />
      </AdminCheck>
    </div>
  );
};

export default page;
