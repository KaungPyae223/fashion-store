import AdminCheck from "@/admin-side/components/AdminCheck";
import PageOverviewPage from "@/admin-side/features/system-admin/page-overview/page/PageOverviewPage";
import React from "react";

const page = () => {
  return (
    <AdminCheck allow={"System Admin"}>
      <PageOverviewPage />
    </AdminCheck>
  );
};

export default page;
