import PageTitle from "@/admin-side/components/PageTitle";
import PageManagement from "@/admin-side/features/page_management/page/PageManagement";
import React from "react";
import PageManagementAnimation from "@/assets/PageManagementAnimation.json";

const page = () => {
  return (
    <div>
      <PageTitle title="Page Management" subTitle="Manage the Home page content" animate={PageManagementAnimation} />
      <PageManagement />
    </div>
  );
};

export default page;
