import PageTitle from "@/admin-side/components/PageTitle";
import AdminControlPage from "@/admin-side/features/system-admin/admin-monitoring/pages/AdminMonitorPage";
import React from "react";
import AdminMonitoringAnimation from "@/assets/AdminMonitoringAnimation.json";
import AdminCheck from "@/admin-side/components/AdminCheck";

const page = () => {
  return (
    <div>
      <PageTitle
        title="Admin Monitoring"
        subTitle="Monitoring the Admin activities"
        animate={AdminMonitoringAnimation}
      />
      <AdminCheck allow={"System Admin"}>
        <AdminControlPage />
      </AdminCheck>
    </div>
  );
};

export default page;
