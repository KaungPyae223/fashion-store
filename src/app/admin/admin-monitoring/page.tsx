import PageTitle from "@/admin-side/components/PageTitle";
import AdminControlPage from "@/admin-side/features/admin-monitoring/pages/AdminMonitorPage";
import React from "react";

const page = () => {
  return (
    <div>
      <PageTitle title="Admin Monitoring" />
      <AdminControlPage />
    </div>
  );
};

export default page;
